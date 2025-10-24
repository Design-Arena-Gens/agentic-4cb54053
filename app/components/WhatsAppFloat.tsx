"use client";

import { FaWhatsapp } from "react-icons/fa6";

const PHONE_E164 = "254742350399"; // +254...

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${PHONE_E164}?text=${encodeURIComponent("Hello Prompt Real Estates, I'm interested in your properties.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-xl hover:shadow-2xl transition-all hover:translate-y-[-1px]"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={22} />
      <span className="hidden sm:inline">Chat</span>
    </a>
  );
}
