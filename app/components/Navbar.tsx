import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b1d39]/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight text-white">
            <span className="text-white">Prompt</span> <span className="text-[#C9A227]">Real Estates</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/90">
            <Link href="/listings" className="hover:text-white">Listings</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
          <Link
            href="/contact?intent=list"
            className="rounded-full bg-[#C9A227] px-4 py-2 text-sm font-medium text-[#0b1d39] hover:brightness-110"
          >
            List Your Property
          </Link>
        </div>
      </div>
    </header>
  );
}
