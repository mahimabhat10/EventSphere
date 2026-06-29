"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { EventService } from "@/services/events";
import { BookingService } from "@/services/bookings";
export default function BookingPage() {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);
  const [tickets, setTickets] = useState(1);

  useEffect(() => {
    EventService.getEvent(id).then(setEvent);
  }, [id]);
const handleBooking = async () => {
  try {
    await BookingService.createBooking({
      event: event.id,
      quantity: tickets,
      total_price: tickets * Number(event.price),
      user: 1, // replace later with logged-in user
    });

    alert("🎉 Booking Successful!");
    window.location.href = "/profile";
  } catch (err) {
    console.error(err);
    alert("Booking Failed");
  }
};
  if (!event) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">

        <h1 className="text-5xl font-black mb-8">
          Book Tickets
        </h1>

        <div className="rounded-3xl bg-[#101629] p-8">

          <h2 className="text-3xl font-bold">
            {event.title}
          </h2>

          <p className="mt-3 text-white/60">
            📍 {event.location}
          </p>

          <p className="mt-2 text-white/60">
            📅 {event.date}
          </p>

          <div className="mt-8">

            <label className="block mb-3">
              Number of Tickets
            </label>

            <input
              type="number"
              min={1}
              value={tickets}
              onChange={(e) => setTickets(Number(e.target.value))}
              className="w-full rounded-xl bg-[#050816] p-4"
            />

          </div>

          <h3 className="mt-8 text-3xl font-bold text-cyan-400">
            Total: ₹{tickets * Number(event.price)}
          </h3>

      <button
  onClick={handleBooking}
  className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-4 text-xl font-bold"
>
  Confirm Booking
</button>

        </div>

      </div>
    </main>
  );
}