import Image from "next/image";
import Link from "next/link";
import { PROPERTIES, formatPriceKES } from "@/data/properties";

export default function Home() {
  const featured = PROPERTIES.filter((p) => p.featured).slice(0, 6);
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0b1d39] text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000&auto=format&fit=crop"
            alt="Nairobi skyline"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1d39]/70 via-[#0b1d39]/60 to-[#0b1d39]" />
        </div>
        <div className="container py-28 sm:py-36">
          <div className="max-w-2xl fade-up">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
              Find Your Dream Home with <span className="text-[#C9A227]">Prompt Real Estates</span>.
            </h1>
            <p className="mt-4 text-white/85 text-lg">
              Connecting you to trusted agents and prime properties across Kenya.
            </p>
          </div>

          {/* Search bar */}
          <div className="mt-8 rounded-xl bg-white/95 p-4 shadow-xl ring-1 ring-black/5 backdrop-blur">
            <form action="/listings" className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <input name="location" placeholder="Location (e.g. Westlands)" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#C9A227]" />
              <input name="priceMin" type="number" placeholder="Min Price (KES)" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#C9A227]" />
              <input name="priceMax" type="number" placeholder="Max Price (KES)" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#C9A227]" />
              <select name="type" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#C9A227]">
                <option value="">Any Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Plot</option>
                <option>Office</option>
              </select>
              <button className="sm:col-span-4 rounded-lg bg-[#C9A227] px-4 py-2 text-sm font-medium text-[#0b1d39] hover:brightness-110">Search</button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured listings */}
      <section className="container py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#0b1d39]">Featured Properties</h2>
            <p className="text-gray-600">Handpicked homes and investments in prime locations.</p>
          </div>
          <Link href="/listings" className="text-sm font-medium text-[#0b1d39] hover:text-[#C9A227]">View all</Link>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Link key={p.id} href={`/listings/${p.slug}`} className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-56">
                <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#0b1d39]">{p.type}</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-[#0b1d39] group-hover:text-[#C9A227]">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.location}</p>
                <p className="mt-2 text-base font-semibold text-[#0b1d39]">{formatPriceKES(p.price)}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/contact?intent=list" className="inline-flex items-center justify-center rounded-full bg-[#C9A227] px-6 py-3 text-[#0b1d39] font-medium hover:brightness-110">List Your Property</Link>
        </div>
      </section>
    </div>
  );
}
