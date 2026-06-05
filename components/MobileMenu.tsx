"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = { label: string; href: string };

export default function MobileMenu({
  navLinks,
  logo,
  desktopNav,
  rightActions,
}: {
  navLinks: NavLink[];
  logo: React.ReactNode;
  desktopNav: React.ReactNode;
  rightActions: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#1e293b] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-6">
        {logo}
        {desktopNav}
        <div className="flex items-center gap-3">
          {rightActions}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded hover:bg-white/10 transition-colors"
            aria-label="Meniu"
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-[#2dcb74] text-sm font-medium py-1 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}
