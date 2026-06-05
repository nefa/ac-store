"use client";

import type { Product } from "@/types/product";

export default function ProductActions({ product }: { product: Product }) {
  return (
    <div className="flex items-center gap-2 mt-auto pt-3">
      <button
        disabled={!product.inStock}
        onClick={() => {
          /* wire up cart store later */
        }}
        className="flex-1 bg-[#f66930] hover:bg-[#d9541f] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold py-2 px-3 rounded transition-colors"
      >
        {product.inStock ? "Adaugă în coș" : "Stoc epuizat"}
      </button>
      <button
        onClick={() => {
          /* wire up wishlist later */
        }}
        aria-label="Adaugă la favorite"
        className="p-2 rounded border border-gray-200 hover:border-[#2dcb74] hover:text-[#2dcb74] text-gray-400 transition-colors"
      >
        <HeartIcon />
      </button>
    </div>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
