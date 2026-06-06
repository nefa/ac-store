"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  name: string;
  savings: number | null;
};

export default function ProductGallery({ images, name, savings }: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex gap-3">
      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex flex-col gap-2 w-16 shrink-0">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`border-2 rounded overflow-hidden aspect-square ${
                i === selected ? "border-primary" : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <Image src={src} alt={`${name} ${i + 1}`} width={64} height={64} className="object-contain w-full h-full p-1" />
            </button>
          ))}
        </div>
      )}

      {/* Main image */}
      <div className="relative flex-1 aspect-square bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
        {savings && (
          <span className="absolute top-3 left-3 z-10 bg-secondary text-white text-sm font-bold px-3 py-1 rounded">
            -{savings} Lei
          </span>
        )}
        <Image
          src={images[selected]}
          alt={name}
          fill
          className="object-contain p-6"
          priority
        />
      </div>
    </div>
  );
}
