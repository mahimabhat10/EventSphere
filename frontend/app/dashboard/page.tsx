"use client";

import Link from "next/link";

export default function Dashboard() {
  const events = [
    {
      id: 1,
      title: "Sunburn Goa",
      date: "15 Dec 2026",
      location: "Goa",
      price: 2499,
    },
    {
      id: 2,
      title: "Tech Summit",
      date: "20 Jan 2027",
      location: "Delhi",
      price: 999,
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12">

      <div className="mx-auto max-w-7xl">

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

                      <button className="rounded-lg bg-cyan-500 px-4 py-2">
                        Edit
                      </button>

                      <button className="rounded-lg bg-red-500 px-4 py-2">
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