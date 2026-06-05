import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  title,
}: {
  products: Product[];
  title?: string;
}) {
  return (
    <section className="max-w-8xl mx-auto px-4 py-8">
      {title && (
        <h2 className="text-xl font-bold text-gray-800 mb-5 pb-2 border-b border-gray-200">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
