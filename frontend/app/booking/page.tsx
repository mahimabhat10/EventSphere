"use client";

import { useState } from "react";
import { BookingService } from "@/services/bookings";

export default function BookingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(1);

  async function book() {
    try {
      await BookingService.createBooking({
        full_name: name,
        email,
        tickets,
        event: 1,
      });

      alert("Booking Successful!");
    } catch (err) {
      console.log(err);
      alert("Booking Failed");
    }
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-xl px-6 py-20">

        <h1 className="mb-10 text-5xl font-black">
          Book Ticket
        </h1>

        <div className="space-y-5 rounded-3xl bg-[#101629] p-8">

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-[#1b2238] p-4"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-[#1b2238] p-4"
          />

          <input
            type="number"
            value={tickets}
            onChange={(e) => setTickets(Number(e.target.value))}
            className="w-full rounded-xl bg-[#1b2238] p-4"
          />

          <button
            onClick={book}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-4 font-bold"
          >
            Book Now
          </button>

        </div>
      </div>
    </main>
  );
}