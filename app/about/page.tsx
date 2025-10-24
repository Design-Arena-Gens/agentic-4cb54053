import Image from "next/image";

export const metadata = {
  title: "About Us",
  description: "Our story, mission, and team.",
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl font-semibold text-[#0b1d39]">About Prompt Real Estates</h1>
          <p className="mt-4 text-gray-700">
            Prompt Real Estates is a trusted property agency based in Nairobi, Kenya. We connect buyers and sellers with
            verified listings, experienced agents, and transparent processes.
          </p>
          <p className="mt-3 text-gray-700">
            <strong>Mission:</strong> Empowering property buyers and sellers through trust and innovation.
          </p>
        </div>
        <div className="relative h-72 lg:h-96">
          <Image
            src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop"
            alt="Nairobi real estate"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-[#0b1d39]">Our Team</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[{name: "Mike Jamal", role: "Lead Agent"}, {name: "Sarah Wambui", role: "Property Consultant"}, {name: "Jane Njeri", role: "Client Relations"}].map((m, i) => (
            <div key={i} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full">
                <Image src={`https://i.pravatar.cc/300?img=${i+12}`} alt={m.name} fill className="object-cover" />
              </div>
              <div className="mt-3 text-[#0b1d39] font-medium">{m.name}</div>
              <div className="text-sm text-gray-600">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
