import Link from "next/link";
import type { Product } from "@/types/product";
import ProductActions from "./ProductActions";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  const saved = product.originalPrice
    ? Math.round(product.originalPrice - product.price)
    : null;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Image */}
      <div className="relative aspect-square bg-gray-50 p-3">
        {saved && (
          <span className="absolute top-2 left-2 z-10 bg-[#2dcb74] text-white text-[11px] font-bold px-2 py-0.5 rounded">
            -{saved} Lei
          </span>
        )}
        <Link href={`/produse/${product.slug}`} className="block w-full h-full">
          <ProductImage src={product.image} alt={product.name} />
        </Link>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-3 pb-3 pt-2 gap-1.5">
        <StarRating rating={product.rating} count={product.reviewCount} />

        <Link
          href={`/produse/${product.slug}`}
          className="text-sm font-medium text-gray-800 hover:text-[#2dcb74] transition-colors line-clamp-2 leading-snug"
        >
          {product.name}
        </Link>

        <div className="mt-1">
          {product.originalPrice && (
            <p className="text-xs text-gray-400 line-through leading-none mb-0.5">
              {fmt(product.originalPrice)}
            </p>
          )}
          <p className="text-base font-bold text-gray-900">{fmt(product.price)}</p>
        </div>

        <ProductActions product={product} />
      </div>
    </div>
  );
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={i < full ? "#f59e0b" : "#d1d5db"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      {count > 0 && (
        <span className="text-[11px] text-gray-400 ml-0.5">({count})</span>
      )}
    </div>
  );
}

function fmt(n: number) {
  return (
    n.toLocaleString("ro-RO", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " Lei"
  );
}
