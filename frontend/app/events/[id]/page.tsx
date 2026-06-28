"use client";

import Link from "next/link";

export default function EventDetailsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1400"
          alt="Event"
          className="h-[450px] w-full rounded-3xl object-cover"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <h1 className="text-5xl font-black">
              Sunburn Goa 2026
            </h1>

            <p className="mt-6 text-lg text-white/70 leading-8">
              India's biggest electronic music festival featuring
              world-famous DJs, immersive stages, food courts,
              networking lounges and unforgettable experiences.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-[#101629] p-6">
                <h3 className="text-cyan-400">📍 Location</h3>
                <p className="mt-2">Goa, India</p>
              </div>

              <div className="rounded-2xl bg-[#101629] p-6">
                <h3 className="text-cyan-400">📅 Date</h3>
                <p className="mt-2">15 December 2026</p>
              </div>

              <div className="rounded-2xl bg-[#101629] p-6">
                <h3 className="text-cyan-400">🎟 Capacity</h3>
                <p className="mt-2">5000 People</p>
              </div>

              <div className="rounded-2xl bg-[#101629] p-6">
                <h3 className="text-cyan-400">⭐ Rating</h3>
                <p className="mt-2">4.9 / 5</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-[#101629] p-8">
            <h2 className="text-3xl font-bold">Ticket</h2>

            <p className="mt-6 text-5xl font-black text-cyan-400">
              ₹2499
            </p>

            <ul className="mt-8 space-y-3 text-white/70">
              <li>✔ Instant Confirmation</li>
              <li>✔ Free Cancellation</li>
              <li>✔ QR Ticket</li>
              <li>✔ Secure Payment</li>
            </ul>

            <Link
              href="/booking"
              className="mt-10 block rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-4 text-center font-bold"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}