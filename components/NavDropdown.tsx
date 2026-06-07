"use client";

import Link from "next/link";
import { useState } from "react";

type Child = { label: string; href: string };
type NavLink = { label: string; href: string; children?: Child[] };

export default function NavDropdown({ navLinks }: { navLinks: NavLink[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
      {navLinks.map((link) =>
        link.children ? (
          <div
            key={link.href}
            className="relative"
            onMouseEnter={() => setOpen(link.href)}
          >
            <button className="flex items-center gap-1 text-gray-300 hover:text-primary transition-colors">
              {link.label}
              <ChevronIcon open={open === link.href} />
            </button>
            {open === link.href && (
              <div
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-1.5 z-50"
                onMouseLeave={() => setOpen(null)}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(null)}
                  className="block px-4 py-2 text-sm font-semibold text-gray-dark hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-100 mb-1"
                >
                  Toate serviciile
                </Link>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(null)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-300 hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ),
      )}
    </nav>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M7 10l5 5 5-5z" />
    </svg>
  );
}
