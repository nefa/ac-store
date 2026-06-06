import type { Metadata } from "next";
import ProductGrid from "@/components/product/ProductGrid";
import { getProductsByCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Aparate de Aer Condiționat",
  description: "Descoperă gama noastră de aparate de aer condiționat de la branduri premium: Daikin, Mitsubishi, Samsung, LG. Livrare rapidă în toată România.",
};

export default function AparatePage() {
  const aparate = getProductsByCategory("Aparate");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-dark">Aparate de Aer Condiționat</h1>
        <p className="text-gray-500 mt-1 text-sm">{aparate.length} produse găsite</p>
      </div>
      <ProductGrid products={aparate} />
    </div>
  );
}
