/// <reference types="@cloudflare/workers-types" />

interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_TIMEZONE?: string;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request" }, 400);
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();

  // Honeypot: pretend success for bots
  if (data.website) return json({ ok: true });

  if (!name || !email || !message || name.length > 100 || email.length > 200 || message.length > 5000) {
    return json({ ok: false, error: "Invalid fields" }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return json({ ok: false, error: "Not configured" }, 500);
  }

  const when = new Date().toLocaleString("en-US", {
    timeZone: env.CONTACT_TIMEZONE ?? "Asia/Kathmandu",
  });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `New message from ${name}`,
      html: `<h2>New contact message</h2>
             <p><b>Name:</b> ${esc(name)}</p>
             <p><b>Email:</b> ${esc(email)}</p>
             <p><b>Sent:</b> ${esc(when)}</p>
             <p style="white-space:pre-wrap">${esc(message)}</p>`,
      text: `From: ${name} <${email}>\nSent: ${when}\n\n${message}`,
    }),
  });

   if (!res.ok) {
    const detail = await res.text();
    console.error("Resend error", res.status, detail);
    return json({ ok: false, error: "Send failed", resendStatus: res.status, detail }, 502);
  }

  return json({ ok: true });
};