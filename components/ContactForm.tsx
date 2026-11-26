// "use client";

// import { useActionState, useEffect, useRef, useState } from "react";
// import { useFormStatus } from "react-dom";
// import { CheckCircle2, Loader2, Send } from "lucide-react";



// import { Errors, Field, LIMITS, validateAll, validateField } from "./contactValidation";
// import { ContactState, sendMessage } from "@/functions/api/contact";



// const initialState: ContactState = {
//   status: "idle",
//   message: "",
//   errors: {},
//   values: { name: "", email: "", message: "" },
// };

// function SubmitButton() {
//   const { pending } = useFormStatus();
//   return (
//     <button type="submit" className="btn btn-dark form-submit" disabled={pending}>
//       {pending ? (
//         <>
//           <Loader2 size={18} className="spin" aria-hidden="true" /> Sending…
//         </>
//       ) : (
//         <>
//           Send message <Send size={17} aria-hidden="true" />
//         </>
//       )}
//     </button>
//   );
// }

// export default function ContactForm() {
//   const [state, formAction] = useActionState(sendMessage, initialState);
//   const [errors, setErrors] = useState<Errors>({});
//   const [length, setLength] = useState(state.values.message.length);
//   const formRef = useRef<HTMLFormElement>(null);

//   // show errors coming back from the server too
//   useEffect(() => {
//     setErrors(state.errors);
//   }, [state]);

//   if (state.status === "success") {
//     return (
//       <div className="form-success" role="status">
//         <CheckCircle2 size={40} aria-hidden="true" />
//         <h3>Message sent</h3>
//         <p>{state.message}</p>
//       </div>
//     );
//   }

//   const check = (field: Field, value: string) =>
//     setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));

//   // validate while typing, but only once a field has shown an error
//   const onChange = (field: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     if (field === "message") setLength(e.target.value.length);
//     if (errors[field]) check(field, e.target.value);
//   };

//   const onBlur = (field: Field) => (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
//     check(field, e.target.value);

//   // stop the submit in the browser when anything is invalid
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     const data = new FormData(e.currentTarget);
//     const found = validateAll({
//       name: String(data.get("name") ?? ""),
//       email: String(data.get("email") ?? ""),
//       message: String(data.get("message") ?? ""),
//     });
//     if (Object.keys(found).length > 0) {
//       e.preventDefault();
//       setErrors(found);
//       const first = (["name", "email", "message"] as Field[]).find((f) => found[f]);
//       if (first) formRef.current?.querySelector<HTMLElement>(`#${first}`)?.focus();
//     }
//   };

//   const fieldProps = (field: Field) => ({
//     id: field,
//     name: field,
//     required: true,
//     "aria-required": true as const,
//     "aria-invalid": errors[field] ? (true as const) : undefined,
//     "aria-describedby": errors[field] ? `${field}-error` : undefined,
//     onBlur: onBlur(field),
//     onChange: onChange(field),
//   });

//   return (
//     <form ref={formRef} action={formAction} onSubmit={onSubmit} className="contact-form-fields" noValidate>
//       <p className="form-note"><span className="req" aria-hidden="true">*</span> All fields are required.</p>

//       {state.status === "error" && !Object.keys(state.errors).length && (
//         <p className="form-alert" role="alert">{state.message}</p>
//       )}

//       <div className="field">
//         <label htmlFor="name">Name <span className="req" aria-hidden="true">*</span></label>
//         <input
//           {...fieldProps("name")}
//           type="text" autoComplete="name" maxLength={LIMITS.name}
//           defaultValue={state.values.name}
//         />
//         {errors.name && <span className="field-error" id="name-error" role="alert">{errors.name}</span>}
//       </div>

//       <div className="field">
//         <label htmlFor="email">Email <span className="req" aria-hidden="true">*</span></label>
//         <input
//           {...fieldProps("email")}
//           type="email" autoComplete="email" maxLength={LIMITS.email}
//           defaultValue={state.values.email}
//         />
//         {errors.email && <span className="field-error" id="email-error" role="alert">{errors.email}</span>}
//       </div>

//       <div className="field">
//         <label htmlFor="message">Message <span className="req" aria-hidden="true">*</span></label>
//         <textarea
//           {...fieldProps("message")}
//           rows={6} maxLength={LIMITS.message}
//           defaultValue={state.values.message}
//         />
//         <div className="field-foot">
//           {errors.message ? (
//             <span className="field-error" id="message-error" role="alert">{errors.message}</span>
//           ) : <span />}
//           <span className="field-count">{length}/{LIMITS.message}</span>
//         </div>
//       </div>

//       {/* Honeypot: hidden from people, filled in by bots */}
//       <div className="hp" aria-hidden="true">
//         <label htmlFor="website">Leave this empty</label>
//         <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
//       </div>

//       <SubmitButton />
//     </form>
//   );
// }
"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Errors, Field, LIMITS, validateAll, validateField } from "./contactValidation";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [alert, setAlert] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [length, setLength] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const check = (field: Field, value: string) =>
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));

  // validate while typing, but only once a field has shown an error
  const onChange =
    (field: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (field === "message") setLength(e.target.value.length);
      if (errors[field]) check(field, e.target.value);
    };

  const onBlur =
    (field: Field) => (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      check(field, e.target.value);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const values = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const found = validateAll(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      const first = (["name", "email", "message"] as Field[]).find((f) => found[f]);
      if (first) formRef.current?.querySelector<HTMLElement>(`#${first}`)?.focus();
      return;
    }

    setStatus("sending");
    setAlert("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: String(data.get("website") ?? "") }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setAlert("Sorry, your message couldn't be sent. Please try again or email me directly.");
      }
    } catch {
      setStatus("error");
      setAlert("Network problem. Please try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={40} aria-hidden="true" />
        <h3>Message sent</h3>
        <p>Thanks! Your message has been sent. I&apos;ll reply by email soon.</p>
      </div>
    );
  }

  const fieldProps = (field: Field) => ({
    id: field,
    name: field,
    required: true,
    "aria-required": true as const,
    "aria-invalid": errors[field] ? (true as const) : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
    onBlur: onBlur(field),
    onChange: onChange(field),
  });

  const sending = status === "sending";

  return (
    <form ref={formRef} onSubmit={onSubmit} className="contact-form-fields" noValidate>
      <p className="form-note">
        <span className="req" aria-hidden="true">*</span> All fields are required.
      </p>

      {status === "error" && alert && (
        <p className="form-alert" role="alert">{alert}</p>
      )}

      <div className="field">
        <label htmlFor="name">Name <span className="req" aria-hidden="true">*</span></label>
        <input {...fieldProps("name")} type="text" autoComplete="name" maxLength={LIMITS.name} />
        {errors.name && <span className="field-error" id="name-error" role="alert">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="email">Email <span className="req" aria-hidden="true">*</span></label>
        <input {...fieldProps("email")} type="email" autoComplete="email" maxLength={LIMITS.email} />
        {errors.email && <span className="field-error" id="email-error" role="alert">{errors.email}</span>}
      </div>

      <div className="field">
        <label htmlFor="message">Message <span className="req" aria-hidden="true">*</span></label>
        <textarea {...fieldProps("message")} rows={6} maxLength={LIMITS.message} />
        <div className="field-foot">
          {errors.message ? (
            <span className="field-error" id="message-error" role="alert">{errors.message}</span>
          ) : <span />}
          <span className="field-count">{length}/{LIMITS.message}</span>
        </div>
      </div>

      {/* Honeypot: hidden from people, filled in by bots */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="btn btn-dark form-submit" disabled={sending}>
        {sending ? (
          <>
            <Loader2 size={18} className="spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Send message <Send size={17} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}