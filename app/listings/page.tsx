import Image from "next/image";
import Link from "next/link";
import { PROPERTIES, formatPriceKES } from "@/data/properties";

export const metadata = {
  title: "Listings",
  description: "Browse available properties across Kenya.",
};

export default function ListingsPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const qLocation = (searchParams.location as string)?.toLowerCase() || "";
  const qType = (searchParams.type as string) || "";
  const priceMin = parseInt((searchParams.priceMin as string) || "0");
  const priceMax = parseInt((searchParams.priceMax as string) || "0");

  const filtered = PROPERTIES.filter((p) => {
    const inLocation = qLocation ? p.location.toLowerCase().includes(qLocation) : true;
    const inType = qType ? p.type === qType : true;
    const inMin = priceMin ? p.price >= priceMin : true;
    const inMax = priceMax ? p.price <= priceMax : true;
    return inLocation && inType && inMin && inMax;
  });

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold text-[#0b1d39]">Available Properties</h1>
      <p className="mt-2 text-gray-600">Use filters on the homepage to narrow your search.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
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
    </div>
  );
}
