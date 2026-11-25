"use server";

import { Errors, validateAll, Values } from "../contactValidation";
import { contactHtml, contactSubject, contactText } from "./contactEmail";



export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Errors;
  values: Values;
};

export async function sendMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("website") ?? "");
  const values = { name, email, message };

  // Bots fill the hidden field. Pretend it worked.
  if (honeypot) {
    return { status: "success", message: "Thanks! Your message has been sent.", errors: {}, values: { name: "", email: "", message: "" } };
  }

  const errors = validateAll(values);

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.");
    return { status: "error", message: "The contact form isn't set up yet. Please email me directly.", errors: {}, values };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: email, // hitting Reply answers the visitor
        subject: contactSubject(values),
        html: contactHtml(values),
        text: contactText(values), // plain-text fallback
      }),
    });

    if (!res.ok) {
      console.error("Contact form: Resend error", res.status, await res.text());
      return { status: "error", message: "Sorry, your message couldn't be sent. Please try again or email me directly.", errors: {}, values };
    }
  } catch (err) {
    console.error("Contact form: network error", err);
    return { status: "error", message: "Network problem. Please try again in a moment.", errors: {}, values };
  }

  return {
    status: "success",
    message: "Thanks! Your message has been sent. I'll reply by email soon.",
    errors: {},
    values: { name: "", email: "", message: "" },
  };
}