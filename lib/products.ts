import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Aparat Aer Condiționat Daikin FTXC25C 9000 BTU",
    slug: "daikin-ftxc25c-9000-btu",
    image: "/img/products/daikin-ftxc25c-9000-btu.webp",
    images: ["/img/products/daikin-ftxc25c-9000-btu.webp"],
    price: 2499,
    originalPrice: 2999,
    inStock: true,
    rating: 5,
    reviewCount: 24,
    category: "Aparate",
    sku: "FTXC25C",
    description:
      "Aparatul de aer condiționat Daikin FTXC25C este o soluție fiabilă și eficientă energetic pentru spații de până la 25 m². Tehnologia inverter asigură un consum redus de energie și un nivel scăzut de zgomot, ideal pentru uz rezidențial.",
    specs: [
      { label: "Putere răcire", value: "2.5 kW (9000 BTU)" },
      { label: "Clasa energetică răcire", value: "A++" },
      { label: "Suprafață recomandată", value: "20–25 m²" },
      { label: "Nivel zgomot interior", value: "21 dB(A)" },
      { label: "Agent frigorific", value: "R32" },
      { label: "Dimensiuni unitate int.", value: "770 × 285 × 205 mm" },
      { label: "Greutate unitate int.", value: "8.5 kg" },
      { label: "Wi-Fi", value: "Opțional" },
    ],
  },
  {
    id: 2,
    name: "Aparat Aer Condiționat Mitsubishi MSZ-HR25VF 9000 BTU",
    slug: "mitsubishi-msz-hr25vf",
    image: "/img/products/mitsubishi-msz-hr25vf.jpg",
    images: ["/img/products/mitsubishi-msz-hr25vf.jpg"],
    price: 2850,
    originalPrice: 3420,
    inStock: true,
    rating: 4,
    reviewCount: 18,
    category: "Aparate",
    sku: "MSZ-HR25VF",
    description:
      "Aparatul de aer condiționat Mitsubishi Electric MSZ-HR25VF combină performanța de răcire și încălzire cu o eficiență energetică ridicată. Ideal pentru camere de 20–25 m², oferă un nivel de zgomot extrem de redus și un design modern.",
    specs: [
      { label: "Putere răcire", value: "2.5 kW (9000 BTU)" },
      { label: "Putere încălzire", value: "3.2 kW" },
      { label: "Clasa energetică răcire", value: "A++" },
      { label: "Clasa energetică încălzire", value: "A+" },
      { label: "Suprafață recomandată", value: "20–25 m²" },
      { label: "Nivel zgomot interior", value: "22 dB(A)" },
      { label: "Agent frigorific", value: "R32" },
      { label: "Dimensiuni unitate int.", value: "798 × 278 × 205 mm" },
      { label: "Greutate unitate int.", value: "9.5 kg" },
      { label: "Wi-Fi", value: "Nu" },
    ],
  },
  {
    id: 3,
    name: "Aparat Aer Condiționat Samsung AR09TXHQASINEU 9000 BTU",
    slug: "samsung-ar09txhqasineu",
    image: "/img/products/samsung-ar09txhqasineu.jpg",
    images: ["/img/products/samsung-ar09txhqasineu-1.jpg", "/img/products/samsung-ar09txhqasineu-2.jpg", "/img/products/samsung-ar09txhqasineu-3.jpg", "/img/products/samsung-ar09txhqasineu-4.jpg"],
    price: 1999,
    inStock: true,
    rating: 4,
    reviewCount: 31,
    category: "Aparate",
    sku: "AR09TXHQASINEU",
    description:
      "Aparatul Samsung Wind-Free™ AR09TXHQASINEU răcește fără curenți direcți de aer rece, distribuind aerul printr-o rețea de micro-orificii pentru un confort optim în orice anotimp.",
    specs: [
      { label: "Putere răcire", value: "2.5 kW (9000 BTU)" },
      { label: "Clasa energetică răcire", value: "A+++" },
      { label: "Suprafață recomandată", value: "20–25 m²" },
      { label: "Nivel zgomot interior", value: "19 dB(A)" },
      { label: "Agent frigorific", value: "R32" },
      { label: "Dimensiuni unitate int.", value: "889 × 299 × 215 mm" },
      { label: "Greutate unitate int.", value: "10 kg" },
      { label: "Wi-Fi", value: "Da" },
    ],
  },
  {
    id: 4,
    name: "Aparat Aer Condiționat LG S09EQ 9000 BTU Wi-Fi",
    slug: "lg-s09eq-wifi",
    image: "/img/products/lg-s09eq-wifi.jpg",
    images: ["/img/products/lg-s09eq-wifi.jpg"],
    price: 2199,
    originalPrice: 2599,
    inStock: false,
    rating: 3,
    reviewCount: 9,
    category: "Aparate",
    sku: "S09EQ",
    description:
      "Aparatul LG S09EQ cu Wi-Fi integrat permite controlul complet din aplicația LG ThinQ. Tehnologia Dual Inverter asigură eficiență energetică ridicată și un nivel redus de zgomot pe toată durata funcționării.",
    specs: [
      { label: "Putere răcire", value: "2.5 kW (9000 BTU)" },
      { label: "Clasa energetică răcire", value: "A++" },
      { label: "Suprafață recomandată", value: "20–25 m²" },
      { label: "Nivel zgomot interior", value: "21 dB(A)" },
      { label: "Agent frigorific", value: "R32" },
      { label: "Dimensiuni unitate int.", value: "870 × 299 × 210 mm" },
      { label: "Greutate unitate int.", value: "9.8 kg" },
      { label: "Wi-Fi", value: "Da" },
    ],
  },
  {
    id: 5,
    name: "Filtru Aer Universal Aer Condiționat",
    slug: "filtru-aer-universal",
    image: "/img/products/placeholder.svg",
    images: ["/img/products/placeholder.svg"],
    price: 49,
    inStock: true,
    rating: 4,
    reviewCount: 12,
    category: "Piese",
    sku: "FILTRU-UNIV-01",
    description:
      "Filtru de aer universal compatibil cu majoritatea aparatelor de aer condiționat rezidențiale. Captează praful, polenul și particulele fine pentru un aer mai curat.",
    specs: [
      { label: "Tip", value: "Filtru PM2.5" },
      { label: "Dimensiuni", value: "30 × 25 cm (tăiabil)" },
      { label: "Compatibilitate", value: "Universal" },
      { label: "Durata de viață", value: "3–6 luni" },
    ],
  },
  {
    id: 6,
    name: "Telecomandă Universală Aer Condiționat",
    slug: "telecomanda-universala-ac",
    image: "/img/products/placeholder.svg",
    images: ["/img/products/placeholder.svg"],
    price: 89,
    originalPrice: 120,
    inStock: true,
    rating: 4,
    reviewCount: 27,
    category: "Piese",
    sku: "REMOTE-UNIV-01",
    description:
      "Telecomandă universală compatibilă cu peste 2000 de modele de aer condiționat. Programare simplă, display LCD și funcție timer.",
    specs: [
      { label: "Compatibilitate", value: "2000+ modele" },
      { label: "Frecvență", value: "38 kHz IR" },
      { label: "Baterii", value: "2 × AAA (incluse)" },
      { label: "Display", value: "LCD retroiluminat" },
    ],
  },
  {
    id: 7,
    name: "Kit Instalare Aer Condiționat 3m",
    slug: "kit-instalare-ac-3m",
    image: "/img/products/placeholder.svg",
    images: ["/img/products/placeholder.svg"],
    price: 185,
    originalPrice: 220,
    inStock: true,
    rating: 5,
    reviewCount: 8,
    category: "Piese",
    sku: "KIT-INST-3M",
    description:
      "Kit complet de instalare pentru aer condiționat, include țevi de cupru izolate, cablu electric, suport unitate externă și accesorii de prindere.",
    specs: [
      { label: "Lungime țevi", value: "3 m" },
      { label: "Diametru țeavă", value: "1/4\" + 3/8\"" },
      { label: "Cablu electric", value: "3 × 1.5 mm²" },
      { label: "Conținut", value: "Țevi, cablu, suport, accesorii" },
    ],
  },
  {
    id: 8,
    name: "Agent Frigorific R32 — Butelie 1 kg",
    slug: "freon-r32-1kg",
    image: "/img/products/placeholder.svg",
    images: ["/img/products/placeholder.svg"],
    price: 145,
    inStock: true,
    rating: 5,
    reviewCount: 5,
    category: "Piese",
    sku: "R32-1KG",
    description:
      "Agent frigorific R32 în butelie de 1 kg, pentru reîncărcarea aparatelor de aer condiționat moderne. GWP redus față de R410A.",
    specs: [
      { label: "Tip agent", value: "R32 (Difluorometan)" },
      { label: "Greutate netă", value: "1 kg" },
      { label: "GWP", value: "675" },
      { label: "Utilizare", value: "Tehnicieni autorizați" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getDiscountedProducts(): Product[] {
  return products.filter((p) => p.originalPrice !== undefined);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
