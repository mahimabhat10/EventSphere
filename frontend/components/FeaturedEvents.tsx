"use client";

import Link from "next/link";
import useEvents from "@/hooks/useEvents";

export default function FeaturedEvents() {
  const { events, loading } = useEvents();

  if (loading) {
    return (
      <section className="py-24 text-center text-white">
        Loading...
      </section>
    );
  }

  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-5xl font-black text-white">
            Featured Events
          </h2>

          <Link
            href="/events"
            className="text-cyan-400 hover:text-cyan-300"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event: any) => (
            <div
              key={event.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#101629] hover:scale-105 transition"
            >
              <img
                src={
                  event.image ||
                  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900"
                }
                alt={event.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {event.title}
                </h3>

                <p className="mt-2 text-white/60">
                  📍 {event.location}
                </p>

                <p className="mt-2 text-cyan-400 font-bold">
                  ₹{event.price}
                </p>

                <Link
                  href={`/events/${event.id}`}
                  className="mt-6 inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 font-semibold text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}