"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const message = String(form.get("message") || "");

    const mailto = `mailto:mikejamal254@gmail.com?subject=${encodeURIComponent("Property Inquiry from " + name)}&body=${encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\n${message}`
    )}`;
    window.location.href = mailto;
    setStatus("Opening your email client...");
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold text-[#0b1d39]">Contact Us</h1>
      <p className="mt-2 text-gray-700">We usually respond within the same day.</p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C9A227]" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Phone</label>
              <input name="phone" required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C9A227]" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-gray-700">Message</label>
            <textarea name="message" rows={6} required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C9A227]" />
          </div>
          <button className="mt-6 rounded-full bg-[#C9A227] px-6 py-3 text-[#0b1d39] font-medium hover:brightness-110">Send</button>
          {status && <p className="mt-3 text-sm text-gray-600">{status}</p>}
        </form>

        <div className="space-y-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div className="text-sm text-gray-700">
              <div>Email: <a href="mailto:mikejamal254@gmail.com" className="text-[#0b1d39] hover:text-[#C9A227]">mikejamal254@gmail.com</a></div>
              <div>WhatsApp: <a href="https://wa.me/254742350399" target="_blank" rel="noopener noreferrer" className="text-[#0b1d39] hover:text-[#C9A227]">+254 742 350 399</a></div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
            <iframe
              title="Nairobi Map"
              src={`https://www.google.com/maps?q=-1.286389,36.817223&hl=en&z=12&output=embed`}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
