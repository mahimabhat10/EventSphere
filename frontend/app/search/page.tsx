"use client";

import { useState } from "react";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-5xl font-black text-white">
          Search Events
        </h1>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="mt-8 w-full rounded-xl bg-[#101629] p-5 text-white outline-none"
        />

        <div className="mt-10 rounded-3xl bg-[#101629] p-8 text-white">
          Search results will appear here.
        </div>

      </div>

    </main>
  );
}