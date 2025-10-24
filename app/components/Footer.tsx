import Link from "next/link";
import { SocialIcons } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0b1d39] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="text-lg font-semibold"><span className="text-white">Prompt</span> <span className="text-[#C9A227]">Real Estates</span></div>
          <p className="mt-3 text-sm text-white/80">Trusted property agency based in Nairobi, connecting buyers and sellers across Kenya.</p>
          <SocialIcons className="mt-4" iconClassName="text-white" />
        </div>
        <div>
          <h4 className="font-medium mb-3 text-white/90">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/listings" className="hover:text-white">Listings</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-white/90">Contacts</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Email: <a href="mailto:mikejamal254@gmail.com" className="hover:text-white">mikejamal254@gmail.com</a></li>
            <li>WhatsApp: <a href="https://wa.me/254742350399" className="hover:text-white" target="_blank" rel="noopener noreferrer">+254 742 350 399</a></li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">© {new Date().getFullYear()} Prompt Real Estates. All rights reserved.</div>
    </footer>
  );
}
