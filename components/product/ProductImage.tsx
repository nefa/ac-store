"use client";

import { useState } from "react";

const PLACEHOLDER = "/img/products/placeholder.svg";

function hoveredSrc(src: string): string {
  const dot = src.lastIndexOf(".");
  if (dot === -1) return src;
  return src.slice(0, dot) + "-hover" + src.slice(dot);
}

export default function ProductImage({ src, alt }: { src: string; alt: string }) {
  const primary = src || PLACEHOLDER;
  const hovered = hoveredSrc(primary);
  // optimistic: assume the -hovered variant exists until it 404s
  const [hasHoveredVariant, setHasHoveredVariant] = useState(true);

  return (
    <div className="relative w-full h-full group">
      {/* Primary — fades out on hover only when a hovered variant is confirmed */}
      <img
        src={primary}
        alt={alt}
        className={[
          "absolute inset-0 w-full h-full object-contain transition-opacity duration-300",
          hasHoveredVariant ? "group-hover:opacity-0" : "",
        ].join(" ")}
        onError={(e) => {
          e.currentTarget.src = PLACEHOLDER;
        }}
      />

      {/* Hovered variant — preloaded, fades in on hover */}
      {hasHoveredVariant && (
        <img
          src={hovered}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          onError={() => setHasHoveredVariant(false)}
        />
      )}
    </div>
  );
}
