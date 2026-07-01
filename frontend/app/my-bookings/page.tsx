"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookingService } from "@/services/bookings";

export default function MyBookings() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookings();
  }, []);

  async function loadBookings() {
    try {
      const data = await BookingService.getMyBookings();
      setBookings(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function cancelBooking(id: number) {
    if (!confirm("Cancel this booking?")) return;

    try {
      await BookingService.cancelBooking(id);
      setBookings((prev) => prev.filter((b) => b.id !== id));
    } catch {
      alert("Failed to cancel booking.");
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050816] flex items-center justify-center text-white">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-center justify-between">
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

        {bookings.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-[#101629] p-10 text-center">
            <h2 className="text-2xl font-bold text-white">
              No Bookings Yet
            </h2>

            <p className="mt-3 text-white/60">
              Book an event to see it here.
            </p>
          </div>
        ) : (
          <div className="grid gap-8">

            {bookings.map((booking: any) => (

              <div
                key={booking.id}
                className="rounded-3xl border border-white/10 bg-[#101629] p-8"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-3xl font-bold text-white">
                      {booking.event_title}
                    </h2>

                    <p className="mt-2 text-white/60">
                    {booking.event_details.date}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-2xl font-bold text-cyan-400">
                      ₹{booking.total_price}
                    </p>

                    <span className="mt-3 inline-block rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                      {booking.status}
                    </span>

                  </div>

                </div>

                <button
                  onClick={() => cancelBooking(booking.id)}
                  className="mt-6 rounded-xl bg-red-500 px-5 py-3 font-semibold text-white hover:bg-red-600"
                >
                  Cancel Booking
                </button>

              </div>

            ))}

          </div>
        )}

      </div>
    </main>
  );
}