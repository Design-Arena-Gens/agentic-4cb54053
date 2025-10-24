export type PropertyType = "House" | "Apartment" | "Plot" | "Office";

export type Property = {
  id: string;
  slug: string;
  title: string;
  type: PropertyType;
  price: number; // Kenyan Shilling
  location: string; // City or area, e.g. "Westlands, Nairobi"
  bedrooms?: number;
  bathrooms?: number;
  sizeSqm?: number; // square meters
  description: string;
  amenities: string[];
  images: string[]; // absolute URLs to images
  coordinates?: { lat: number; lng: number };
  agent: { name: string; phone: string; email?: string };
  featured?: boolean;
};

export const formatPriceKES = (value: number) =>
  new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(value);

export const PROPERTIES: Property[] = [
  {
    id: "p1",
    slug: "luxury-4br-house-karen",
    title: "Luxury 4BR House in Karen",
    type: "House",
    price: 78000000,
    location: "Karen, Nairobi",
    bedrooms: 4,
    bathrooms: 4,
    sizeSqm: 420,
    description:
      "Elegant 4-bedroom standalone house nestled in the serene greenery of Karen. High ceilings, modern kitchen, lush garden, and DSQ.",
    amenities: [
      "Gated community",
      "Backup generator",
      "Borehole",
      "24/7 security",
      "Parking for 4",
    ],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617104678098-de229db5117d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    ],
    coordinates: { lat: -1.3275, lng: 36.7209 },
    agent: { name: "Mike Jamal", phone: "+254742350399", email: "mikejamal254@gmail.com" },
    featured: true,
  },
  {
    id: "p2",
    slug: "modern-2br-apartment-westlands",
    title: "Modern 2BR Apartment in Westlands",
    type: "Apartment",
    price: 15500000,
    location: "Westlands, Nairobi",
    bedrooms: 2,
    bathrooms: 2,
    sizeSqm: 110,
    description:
      "Contemporary apartment with skyline views, rooftop pool, gym, high-speed lifts, and tight security. Walking distance to malls.",
    amenities: ["Rooftop pool", "Gym", "High-speed lifts", "CCTV", "Backup power"],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597047084893-51a1b3c1f8ff?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
    ],
    coordinates: { lat: -1.2681, lng: 36.8110 },
    agent: { name: "Sarah Wambui", phone: "+254742350399" },
    featured: true,
  },
  {
    id: "p3",
    slug: "prime-commercial-office-upper-hill",
    title: "Prime Commercial Office in Upper Hill",
    type: "Office",
    price: 52000000,
    location: "Upper Hill, Nairobi",
    sizeSqm: 350,
    description:
      "Grade A office space with excellent natural lighting, secure parking, fiber connectivity, and proximity to major institutions.",
    amenities: ["Fiber internet", "Security", "Parking", "Cafeteria"],
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=1600&auto=format&fit=crop",
    ],
    coordinates: { lat: -1.3000, lng: 36.8167 },
    agent: { name: "Prompt Real Estates", phone: "+254742350399" },
  },
  {
    id: "p4",
    slug: "spacious-3br-apartment-kileleshwa",
    title: "Spacious 3BR Apartment in Kileleshwa",
    type: "Apartment",
    price: 21000000,
    location: "Kileleshwa, Nairobi",
    bedrooms: 3,
    bathrooms: 3,
    sizeSqm: 150,
    description:
      "Airy apartment with floor-to-ceiling windows, ensuite bedrooms, kid's play area, and ample parking.",
    amenities: ["Kids play area", "Ample parking", "Security", "Gym"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
    ],
    coordinates: { lat: -1.2864, lng: 36.7819 },
    agent: { name: "Jane Njeri", phone: "+254742350399" },
    featured: true,
  },
  {
    id: "p5",
    slug: "quarter-acre-plot-ruiru",
    title: "1/4 Acre Plot in Ruiru",
    type: "Plot",
    price: 5500000,
    location: "Ruiru, Kiambu",
    description:
      "Prime residential plot with ready title deed, red soil, and access road. Water and power nearby.",
    amenities: ["Ready title", "Access road", "Water & power nearby"],
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
    ],
    coordinates: { lat: -1.1500, lng: 36.9500 },
    agent: { name: "Prompt Real Estates", phone: "+254742350399" },
  },
];

export const PROPERTY_TYPES: PropertyType[] = ["House", "Apartment", "Plot", "Office"];
