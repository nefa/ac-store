"use client";

import { useState } from "react";
import type { Product } from "@/types/product";

export default function AddToCartSection({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      {/* Quantity + Add to cart */}
      <div className="flex items-stretch gap-3">
        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors text-lg leading-none"
            aria-label="Scade cantitate"
          >
            −
          </button>
          <span className="w-10 text-center font-medium text-gray-800 select-none">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors text-lg leading-none"
            aria-label="Crește cantitate"
          >
            +
          </button>
        </div>

        <button
          disabled={!product.inStock}
          onClick={() => { /* wire up cart store */ }}
          className="flex-1 bg-secondary hover:bg-secondary-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded transition-colors"
        >
          {product.inStock ? "Adaugă în coș" : "Stoc epuizat"}
        </button>
      </div>

      {/* Wishlist + Contact */}
      <div className="flex items-center gap-6 pt-1 border-t border-gray-100">
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors">
          <HeartIcon />
          Adaugă la Favorite
        </button>
        <a
          href="mailto:CristianM@aerconditionatservice.ro"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
        >
          <MailIcon />
          Cere informații
        </a>
      </div>
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

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
