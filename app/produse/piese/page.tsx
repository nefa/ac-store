import type { Metadata } from "next";
import ProductGrid from "@/components/product/ProductGrid";
import { getProductsByCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Piese & Accesorii Aer Condiționat",
  description: "Filtre, telecomenzi, kituri de instalare și agenți frigorifici pentru aparatele de aer condiționat. Livrare rapidă în toată România.",
};

export default function PiesePage() {
  const piese = getProductsByCategory("Piese");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-dark">Piese & Accesorii</h1>
        <p className="text-gray-500 mt-1 text-sm">{piese.length} produse găsite</p>
      </div>
      <ProductGrid products={piese} />
    </div>
  );
}
