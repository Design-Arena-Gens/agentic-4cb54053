import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROPERTIES, formatPriceKES } from "@/data/properties";

export async function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export default function PropertyDetails({ params }: { params: { slug: string } }) {
  const property = PROPERTIES.find((p) => p.slug === params.slug);
  if (!property) return notFound();

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-3 gap-3">
            {property.images.map((src, i) => (
              <div key={i} className={i === 0 ? "col-span-3 h-80 relative" : "relative h-40"}>
                <Image src={src} alt={`${property.title} image ${i + 1}`} fill className="object-cover rounded-lg" />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h1 className="text-3xl font-semibold text-[#0b1d39]">{property.title}</h1>
            <p className="mt-2 text-gray-700">{property.description}</p>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-[#0b1d39]">Amenities</h3>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                {property.amenities.map((a, idx) => (
                  <li key={idx} className="rounded-md bg-gray-50 px-3 py-2 ring-1 ring-gray-200">{a}</li>
                ))}
              </ul>
            </div>

            {property.coordinates && (
              <div className="mt-8">
                <h3 className="text-lg font-medium text-[#0b1d39]">Location</h3>
                <div className="mt-2 overflow-hidden rounded-xl ring-1 ring-black/5">
                  <iframe
                    title="Map"
                    src={`https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&hl=en&z=14&output=embed`}
                    className="h-72 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sticky top-24">
            <div className="text-2xl font-semibold text-[#0b1d39]">{formatPriceKES(property.price)}</div>
            <div className="mt-1 text-sm text-gray-600">{property.location}</div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-sm text-gray-700">
              {property.bedrooms && <div className="rounded-md bg-gray-50 px-3 py-2 ring-1 ring-gray-200">{property.bedrooms} Beds</div>}
              {property.bathrooms && <div className="rounded-md bg-gray-50 px-3 py-2 ring-1 ring-gray-200">{property.bathrooms} Baths</div>}
              {property.sizeSqm && <div className="rounded-md bg-gray-50 px-3 py-2 ring-1 ring-gray-200">{property.sizeSqm} sqm</div>}
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-[#0b1d39]">Agent</h4>
              <p className="text-sm text-gray-700">{property.agent.name}</p>
              <div className="mt-3 grid grid-cols-1 gap-2">
                <a
                  href={`https://wa.me/254742350399?text=${encodeURIComponent(`Hello, I'm interested in ${property.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-4 py-2 text-white font-medium hover:brightness-110"
                >
                  WhatsApp Agent
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#C9A227] px-4 py-2 text-[#0b1d39] font-medium hover:brightness-110">Contact Form</Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
