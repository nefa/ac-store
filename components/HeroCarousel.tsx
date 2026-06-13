"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  {
    id: 2,
    image: "/img/slide1.jpg",
    placeholderBg: "#0f172a",
    placeholderAccent: "#1e3a8a",
    headline: "Aparate de Aer Condiționat",
    subtitle: "Modele premium pentru orice spațiu. Eficiență energetică A+++.",
    cta: "Vezi aparatele",
    href: "/produse/aparate",
  },
  {
    id: 3,
    image: "/img/slide2.jpg",
    placeholderBg: "#052e16",
    placeholderAccent: "#14532d",
    headline: "Piese & Accesorii Originale",
    subtitle: "Tot ce ai nevoie pentru instalare și service rapid.",
    cta: "Explorează piesele",
    href: "/produse/piese",
  },
  {
    id: 4,
    image: "/img/slide3.jpg",
    placeholderBg: "#1c1917",
    placeholderAccent: "#7c2d12",
    headline: "Oferte Speciale",
    subtitle: "Reduceri de până la 30% la aparatele selectate. Stoc limitat.",
    cta: "Vezi ofertele",
    href: "/oferte",
  },
  {
    id: 5,
    image: "/img/microclima-banner.png",
    placeholderBg: "#0f172a",
    placeholderAccent: "#1e3a8a",
    headline: "Aparate de Aer Condiționat",
    subtitle: "Modele premium pentru orice spațiu. Eficiență energetică A+++.",
    cta: "Vezi aparatele",
    href: "/produse/aparate",
  },
];

const AUTOPLAY_MS = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, next]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(260px, 45vw, 520px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          aria-hidden={i !== current}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: i === current ? 1 : 0,
            pointerEvents: i === current ? "auto" : "none",
          }}
        >
          {/* Background — image with placeholder fallback color */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundColor: slide.placeholderBg,
            }}
          />
          {/* Gradient overlay for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, ${slide.placeholderBg}ee 0%, ${slide.placeholderBg}99 40%, transparent 75%)`,
            }}
          />

          {/* Text content */}
          <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center gap-4">
            <h2
              className="text-white font-bold leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)" }}
            >
              {slide.headline}
            </h2>
            <p
              className="text-white/80 max-w-md"
              style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.125rem)" }}
            >
              {slide.subtitle}
            </p>
            <Link
              href={slide.href}
              className="self-start mt-2 px-6 py-3 rounded-md font-semibold text-sm text-white transition-colors"
              style={{ backgroundColor: "#2dcb74" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#22a85e")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#2dcb74")
              }
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      {/* Arrow — prev */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/55 text-white transition-colors"
      >
        <ChevronLeft />
      </button>

      {/* Arrow — next */}
      <button
        onClick={next}
        aria-label="Slide următor"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/55 text-white transition-colors"
      >
        <ChevronRight />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              backgroundColor:
                i === current ? "#2dcb74" : "rgba(255,255,255,0.55)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
