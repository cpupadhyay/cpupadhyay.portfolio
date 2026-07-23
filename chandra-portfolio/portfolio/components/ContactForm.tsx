"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit() {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:chandraprakashupadhyay2001@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  const field =
    "focus-ring w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm placeholder:text-muted";

  return (
    <div className="rounded-2xl border border-line bg-[#FAFAFA] p-6 sm:p-8">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[13px] font-semibold">Name</label>
          <input id="name" className={field} placeholder="Your name"
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold">Email</label>
          <input id="email" type="email" className={field} placeholder="you@company.com"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-[13px] font-semibold">Message</label>
          <textarea id="message" rows={5} className={field} placeholder="What would you like to discuss?"
            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        </div>
        <button
          onClick={handleSubmit}
          className="focus-ring w-full rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dim"
        >
          Send message
        </button>
        {status === "sent" && (
          <p className="text-sm font-medium text-accent">Your email app should now be open with the message ready to send.</p>
        )}
      </div>
    </div>
  );
}
