"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { EventService } from "@/services/events";

interface Dashboard {
  total_events: number;
  total_bookings: number;
  total_revenue: number;
}

interface Event {
  id: number;
  title: string;
  location: string;
  date: string;
  price: number;
}

export default function OrganizerDashboardPage() {
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
 const [loading, setLoading] = useState(true);

useEffect(() => {
  async function loadDashboard() {
    try {
      const [dashboardData, myEvents] = await Promise.all([
        EventService.getDashboard(),
        EventService.getMyEvents(),
      ]);

      setDashboard(dashboardData);
      setEvents(myEvents);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  loadDashboard();
}, []);
      
  async function deleteEvent(id: number) {
    if (!confirm("Delete this event?")) return;

    try {
      await EventService.deleteEvent(id);

      setEvents((prev) => prev.filter((event) => event.id !== id));

      alert("Event deleted successfully.");
    } catch (err) {
      console.error(err);
      alert("Unable to delete event.");
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050816] flex items-center justify-center text-white text-2xl font-bold">
        Loading Dashboard...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] p-8">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-black text-white">
              Organizer Dashboard
            </h1>

            <p className="mt-2 text-white/60">
              Manage your events and bookings
            </p>
          </div>

          <Link
            href="/events/create"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white hover:bg-cyan-600"
          >
            + Create Event
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-white/60">
              Total Events
            </h3>

            <p className="mt-4 text-5xl font-black text-cyan-400">
              {dashboard?.total_events}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-white/60">
              Total Bookings
            </h3>

            <p className="mt-4 text-5xl font-black text-green-400">
              {dashboard?.total_bookings}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-white/60">
              Revenue
            </h3>

            <p className="mt-4 text-5xl font-black text-purple-400">
              ₹{dashboard?.total_revenue}
            </p>
          </div>

        </div>

        <div className="mt-12">

          <h2 className="mb-8 text-3xl font-black text-white">
            My Events
          </h2>

          {events.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center text-white/60">
              No events created yet.
            </div>
          ) : (
            <div className="grid gap-6">
         {events.map((event: Event) => (
                <div
                  key={event.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-center justify-between">

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {event.title}
                      </h3>

                      <p className="mt-2 text-white/60">
                        {event.location}
                      </p>

                      <p className="mt-2 text-cyan-400">
                        {event.date}
                      </p>

                      <p className="mt-2 text-green-400">
                        ₹{event.price}
                      </p>
                    </div>

                    <div className="flex gap-3">

                      <Link
                        href={`/events/${event.id}`}
                        className="rounded-xl bg-blue-600 px-4 py-2 text-white"
                      >
                        View
                      </Link>

                      <Link
                        href={`/events/edit/${event.id}`}
                        className="rounded-xl bg-yellow-500 px-4 py-2 text-white"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteEvent(event.id)}
                        className="rounded-xl bg-red-600 px-4 py-2 text-white"
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </main>
  );
}