import HeroCarousel from "@/components/HeroCarousel";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/lib/products";

const alt_Products = [...products].sort((a, b) => b.id - a.id);

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ProductGrid products={products} title="Produse AC Recomandate" />
      <ProductGrid
        products={alt_Products}
        title="Piese si accesorii AC"
      ></ProductGrid>
    </>
  );
}
