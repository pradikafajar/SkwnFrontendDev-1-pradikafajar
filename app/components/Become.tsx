"use client";

import { Send } from "lucide-react";

export default function Become() {
  return (
    <section className="bg-white px-6 md:px-12 py-12 text-black space-y-4">
      {/* Teks kecil di atas judul */}
      <p className="text-sm font-semibold text-lime-600 uppercase tracking-wide">
        🔥 Limited Deals
      </p>

      {/* Judul lebih panjang ke kanan */}
      <h1 className="text-5xl md:text-6xl font-bold leading-snug max-w-4xl">
        Become a member and get 10% off of your first purchase
      </h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex max-w-md border border-zinc-300 rounded-lg overflow-hidden"
      >
        <input
          type="email"
          required
          placeholder="Enter your email here"
          className="w-full px-4 py-3 outline-none text-sm"
        />
        <button
          type="submit"
          className="bg-lime-400 text-black p-3 flex items-center justify-center"
        >
          <Send size={18} />
        </button>
      </form>
    </section>
  );
}
