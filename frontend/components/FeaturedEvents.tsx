"use client";

import useEvents from "@/hooks/useEvents";

export default function FeaturedEvents() {
  const { events, loading } = useEvents();

  if (loading)
    return (
      <section className="py-24 text-center text-white">
        Loading...
      </section>
    );

  return (
    <section className="bg-[#050816] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-5xl font-black text-white">
          Featured Events
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

         {Array.isArray(events) &&
  events.map((event: any) => (
            <div
              key={event.id}
              className="rounded-3xl border border-white/10 bg-[#101629] p-6"
            >
              <img
                src={event.image}
                className="h-56 w-full rounded-2xl object-cover"
                alt={event.title}
              />

              <h3 className="mt-5 text-2xl font-bold text-white">
                {event.title}
              </h3>

              <p className="mt-2 text-white/60">
                {event.location}
              </p>

              <p className="mt-2 text-cyan-400">
                ₹{event.price}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}