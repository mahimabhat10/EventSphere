"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { EventService } from "@/services/events";

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvents();
    loadCategories();
  }, []);

  async function loadEvents() {
    try {
      setLoading(true);

      const data = await EventService.getEvents(
        search,
        category
      );

      setEvents(data);
    } finally {
      setLoading(false);
    }
  }

  async function loadCategories() {
    const data = await EventService.getCategories();
    setCategories(data);
  }

  useEffect(() => {
    loadEvents();
  }, [search, category]);

  return (
    <main className="min-h-screen bg-[#050816] py-10 px-6">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-5xl font-black text-white">
          Explore Events
        </h1>

        <div className="mb-10 grid gap-4 md:grid-cols-2">

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search events..."
            className="rounded-xl bg-[#101629] p-4 text-white outline-none"
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="rounded-xl bg-[#101629] p-4 text-white outline-none"
          >
            <option value="">
              All Categories
            </option>

            {categories.map((cat) => (
              <option
                key={cat}
                value={cat}
              >
                {cat}
              </option>
            ))}

          </select>

        </div>

        {loading ? (

          <div className="text-center text-white">
            Loading...
          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {events.map((event) => (

              <div
                key={event.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >

                <img
                  src={event.image}
                  alt={event.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold text-white">
                    {event.title}
                  </h2>

                  <p className="mt-2 text-white/60">
                    📍 {event.location}
                  </p>

                  <p className="mt-2 text-cyan-400">
                    {event.category}
                  </p>

                  <p className="mt-2 text-green-400">
                    ₹{event.price}
                  </p>

                  <p className="mt-2 text-white/60">
                    Seats Left:{" "}
                    {event.available_seats}
                  </p>

                  <Link
                    href={`/events/${event.id}`}
                    className="mt-6 inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-bold text-white"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}