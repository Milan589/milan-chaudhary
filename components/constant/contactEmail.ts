const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

type Input = { name: string; email: string; message: string };

function receivedAt(): string {
  const tz = process.env.CONTACT_TIMEZONE || "UTC"; // e.g. Asia/Kathmandu
  try {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: tz,
    }).format(new Date()) + ` (${tz})`;
  } catch {
    return new Date().toUTCString();
  }
}

export function contactSubject({ name }: Input): string {
  return `New message from ${name.replace(/[\r\n]+/g, " ").slice(0, 80)}`;
}

export function contactText({ name, email, message }: Input): string {
  return [
    "New message from your portfolio contact form",
    "",
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Received: ${receivedAt()}`,
    "",
    "Message:",
    message,
    "",
    "Reply to this email to answer them directly.",
  ].join("\n");
}

export function contactHtml({ name, email, message }: Input): string {
  const n = esc(name);
  const e = esc(email);
  const m = esc(message).replace(/\r?\n/g, "<br>");
  const when = esc(receivedAt());
  const initial = esc((name.trim()[0] ?? "?").toUpperCase());
  const replySubject = encodeURIComponent("Re: your message");

  return `<!doctype html>
<html lang="en">
<body style="margin:0;padding:0;background:#f3f7fa;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${n} sent you a message through your portfolio.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f7fa;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #dbe5ee;border-radius:14px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#2a4058;">

        <tr><td style="background:#2e506e;padding:22px 28px;">
          <div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#9cc3e6;">Portfolio contact form</div>
          <div style="font-size:22px;font-weight:700;color:#ffffff;margin-top:4px;">New message</div>
        </td></tr>

        <tr><td style="padding:26px 28px 8px;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="width:48px;height:48px;border-radius:24px;background:#e6eff7;color:#2e506e;text-align:center;font-size:20px;font-weight:700;">${initial}</td>
            <td style="padding-left:14px;">
              <div style="font-size:18px;font-weight:700;color:#2e506e;">${n}</div>
              <div style="font-size:14px;"><a href="mailto:${e}" style="color:#2f6ea6;text-decoration:none;">${e}</a></div>
            </td>
          </tr></table>
        </td></tr>

        <tr><td style="padding:16px 28px 4px;">
          <div style="font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#5d7389;margin-bottom:8px;">Message</div>
          <div style="background:#f3f7fa;border-left:4px solid #2f6ea6;border-radius:8px;padding:16px 18px;font-size:15px;line-height:1.65;color:#2a4058;">${m}</div>
        </td></tr>

        <tr><td style="padding:22px 28px 8px;">
          <a href="mailto:${e}?subject=${replySubject}" style="display:inline-block;background:#2e506e;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;padding:12px 26px;border-radius:999px;">Reply to ${n}</a>
        </td></tr>

        <tr><td style="padding:18px 28px 24px;border-top:1px solid #dbe5ee;">
          <div style="font-size:12px;color:#5d7389;">Received ${when}</div>
          <div style="font-size:12px;color:#5d7389;margin-top:2px;">Replying to this email goes straight to ${n}.</div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}