"use client";

import Link from "next/link";
import useEvents from "@/hooks/useEvents";

export default function EventsPage() {
  const { events, loading } = useEvents();
console.log("EVENTS:", events);
  if (loading) {
    return (
      <main className="min-h-screen bg-[#050816] flex items-center justify-center text-white text-2xl">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816]">
      <section className="mx-auto max-w-7xl px-6 py-16">

        <h1 className="text-center text-6xl font-black text-white">
          Discover Events
        </h1>

        <div className="mt-10 flex justify-center">
          <input
            placeholder="Search events..."
            className="w-full max-w-xl rounded-xl bg-[#101629] p-4 text-white outline-none"
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {events.map((event: any) => (

            <div
              key={event.id}
              className="overflow-hidden rounded-3xl bg-[#101629]"
            >

            <img
  src={event.image}
  className="h-60 w-full object-cover"
  alt={event.title}
/>
              <div className="p-6">

                <h2 className="text-2xl font-bold text-white">
                  {event.title}
                </h2>

                <p className="mt-3 text-white/60">
         {event.location}
                </p>

                <p className="mt-3 text-cyan-400 text-xl">
                ₹{event.price}
                </p>

                <Link
                  href={`/events/${event.id}`}
                  className="mt-6 block rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-3 text-center text-white font-bold"
                >
                  View Details
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>
    </main>
  );
}