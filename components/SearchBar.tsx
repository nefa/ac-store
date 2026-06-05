"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/produse?q=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-sm rounded-md overflow-hidden"
      style={{ background: "#f2f2f2" }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Caută produse..."
        className="flex-1 bg-transparent text-[#333] placeholder-gray-400 text-sm px-3 py-2 outline-none"
      />
      <button
        type="submit"
        aria-label="Caută"
        className="px-3 py-2 text-gray-500 hover:text-[#2dcb74] transition-colors"
      >
        <SearchIcon />
      </button>
    </form>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
}
