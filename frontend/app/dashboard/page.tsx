"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EventService } from "@/services/events";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  price: number;
}
export default function Dashboard() {
const [dashboard, setDashboard] = useState<any>(null);
const [events, setEvents] = useState<Event[]>([]);

useEffect(() => {
  EventService.getDashboard().then(setDashboard);
  EventService.getMyEvents().then(setEvents);
}, []);
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <Link
          href="/"
          className="mb-6 inline-block text-cyan-400 hover:text-cyan-300 hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-black text-white">
              Organizer Dashboard
            </h1>

            <p className="mt-3 text-white/60">
              Manage all your events
            </p>
          </div>

          <Link
            href="/dashboard/create-event"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-bold text-white"
          >
            + Create Event
          </Link>
        </div>
<div className="mb-8 grid gap-6 md:grid-cols-3">
  <div className="rounded-xl bg-white/5 p-6">
    <p className="text-white/60">Total Events</p>
    <h2 className="text-3xl font-bold text-cyan-400">
      {dashboard?.total_events ?? 0}
    </h2>
  </div>

  <div className="rounded-xl bg-white/5 p-6">
    <p className="text-white/60">Bookings</p>
    <h2 className="text-3xl font-bold text-cyan-400">
      {dashboard?.total_bookings ?? 0}
    </h2>
  </div>

  <div className="rounded-xl bg-white/5 p-6">
    <p className="text-white/60">Revenue</p>
    <h2 className="text-3xl font-bold text-cyan-400">
      ₹{dashboard?.total_revenue ?? 0}
    </h2>
  </div>
</div>
        {/* Rest of your code */}
        <div className="overflow-hidden rounded-3xl border border-white/10">

          <table className="w-full">

            <thead className="bg-[#0d1429]">

              <tr className="text-left text-white">

                <th className="p-5">Event</th>
                <th>Date</th>
                <th>Location</th>
                <th>Price</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {events.map((event) => (

                <tr
                  key={event.id}
                  className="border-t border-white/10 text-white"
                >

                  <td className="p-5">{event.title}</td>

                  <td>{event.date}</td>

                  <td>{event.location}</td>

                  <td>₹{event.price}</td>

                  <td>

                    <div className="flex gap-3">

                  
<Link
  href={`/events/edit/${event.id}`}
  className="rounded-lg bg-cyan-500 px-4 py-2 text-white"
>
  Edit
</Link>
                      <button
  onClick={async () => {
    if (!confirm("Delete this event?")) return;

   await EventService.deleteEvent(event.id);

setEvents(events.filter((e) => e.id !== event.id));
  }}
  className="rounded-lg bg-red-500 px-4 py-2"
>
  Delete
</button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}