import HeroCarousel from "@/components/HeroCarousel";
import ProductGrid from "@/components/product/ProductGrid";
import type { Product } from "@/types/product";

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Aparat Aer Condiționat Daikin FTXC25C 9000 BTU",
    slug: "daikin-ftxc25c-9000-btu",
    image: "/img/products/daikin-ftxc25c-9000-btu.webp",
    price: 2499,
    originalPrice: 2999,
    inStock: true,
    rating: 5,
    reviewCount: 24,
  },
  {
    id: 2,
    name: "Aparat Aer Condiționat Mitsubishi MSZ-HR25VF 9000 BTU",
    slug: "mitsubishi-msz-hr25vf",
    image: "/img/products/mitsubishi-msz-hr25vf.jpg",
    price: 2850,
    originalPrice: 3420,
    inStock: true,
    rating: 4,
    reviewCount: 18,
  },
  {
    id: 3,
    name: "Aparat Aer Condiționat Samsung AR09TXHQASINEU 9000 BTU",
    slug: "samsung-ar09txhqasineu",
    image: "/img/products/samsung-ar09txhqasineu.jpg",
    price: 1999,
    inStock: true,
    rating: 4,
    reviewCount: 31,
  },
  {
    id: 4,
    name: "Aparat Aer Condiționat LG S09EQ 9000 BTU Wi-Fi",
    slug: "lg-s09eq-wifi",
    image: "/img/products/lg-s09eq-wifi.jpg",
    price: 2199,
    originalPrice: 2599,
    inStock: false,
    rating: 3,
    reviewCount: 9,
  },
];

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ProductGrid products={featuredProducts} title="Produse Recomandate" />
    </>
  );
}
