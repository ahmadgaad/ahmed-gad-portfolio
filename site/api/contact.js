// Vercel serverless function: receives the contact form and emails it to you via Resend.
// Env vars (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY  — from https://resend.com/api-keys
//   CONTACT_TO      — where messages are delivered (e.g. softagi.tech@gmail.com)
//   CONTACT_FROM    — optional, a sender on a domain verified in Resend (e.g. "Portfolio <hello@ahmedgad.dev>")
//                     until a domain is verified, leave it unset: Resend's test sender only delivers to your own Resend account email.

const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });
  const b = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
  if (b.website) return res.json({ ok: true }); // honeypot

  const name = String(b.name || "").trim().slice(0, 120);
  const email = String(b.email || "").trim().slice(0, 200);
  const phone = String(b.phone || "").trim().slice(0, 30);
  const company = String(b.company || "").trim().slice(0, 160);
  const message = String(b.message || "").trim().slice(0, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return res.status(400).json({ ok: false, error: "Please add your name, a valid email and a message." });
  if (phone && !/^\+?[\d\s().-]{6,30}$/.test(phone))
    return res.status(400).json({ ok: false, error: "That phone number doesn't look right. You can leave it empty." });

  const digits = phone.replace(/\D/g, "");
  const rows = [["Name", esc(name)], ["Email", `<a href="mailto:${esc(email)}">${esc(email)}</a>`]];
  if (phone) rows.push(["Phone", `<a href="tel:${esc(phone.replace(/[^\d+]/g, ""))}">${esc(phone)}</a> · <a href="https://wa.me/${digits}">WhatsApp</a>`]);
  if (company) rows.push(["Company", esc(company)]);

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO],
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      html: `<div style="font-family:Arial,sans-serif;font-size:15px;color:#111">
        <p style="font-size:17px"><b>New message from your portfolio</b></p>
        <table cellpadding="6" style="border-collapse:collapse">${rows.map(([k, v]) => `<tr><td style="color:#777">${k}</td><td>${v}</td></tr>`).join("")}</table>
        <p style="white-space:pre-wrap;background:#f4f4f6;padding:14px;border-radius:8px">${esc(message)}</p>
        <p style="color:#777">Reply to this email to answer ${esc(name)} directly.</p></div>`,
      text: `New message from your portfolio\n\nName: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone} (WhatsApp: https://wa.me/${digits})` : ""}${company ? `\nCompany: ${company}` : ""}\n\n${message}`,
    }),
  });
  if (!r.ok) {
    console.error("resend failed", r.status, await r.text());
    return res.status(502).json({ ok: false, error: "Couldn't send right now. Please try again or reach me on WhatsApp." });
  }
  res.json({ ok: true });
}
