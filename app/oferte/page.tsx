import type { Metadata } from "next";
import ProductGrid from "@/components/product/ProductGrid";
import { getDiscountedProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Oferte & Promoții",
  description: "Cele mai bune oferte la aparate de aer condiționat și accesorii. Reduceri limitate — comandă acum!",
};

export default function OfertePage() {
  const oferte = getDiscountedProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-dark">Oferte & Promoții</h1>
        <p className="text-gray-500 mt-1 text-sm">{oferte.length} produse în promoție</p>
      </div>
      <ProductGrid products={oferte} />
    </div>
  );
}
