"use client";

import Link from "next/link";

export default function MyBookings() {
  const bookings = [
    {
      id: 1,
      event: "Sunburn Goa",
      date: "15 Dec 2026",
      status: "Confirmed",
      price: 2499,
    },
    {
      id: 2,
      event: "Tech Summit",
      date: "20 Jan 2027",
      status: "Pending",
      price: 999,
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12">

      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between mb-10">

          <h1 className="text-5xl font-black text-white">
            My Bookings
          </h1>

          <Link
            href="/events"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-bold text-white"
          >
            Explore Events
          </Link>

        </div>

        <div className="grid gap-8">

          {bookings.map((booking) => (

            <div
              key={booking.id}
              className="rounded-3xl border border-white/10 bg-[#101629] p-8"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-3xl font-bold text-white">
                    {booking.event}
                  </h2>

                  <p className="mt-2 text-white/60">
                    {booking.date}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-cyan-400 text-2xl font-bold">
                    ₹{booking.price}
                  </p>

                  <span
  className={`mt-3 inline-block rounded-full px-4 py-2 ${
    booking.status === "Confirmed"
      ? "bg-green-500/20 text-green-400"
      : "bg-yellow-500/20 text-yellow-400"
  }`}
>
  {booking.status}
</span>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}