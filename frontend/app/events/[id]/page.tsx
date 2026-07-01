"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { EventService } from "@/services/events";
import { BookingService } from "@/services/bookings";
import { useRouter } from "next/navigation";
export default function EventDetailsPage() {
  const { id } = useParams();
const router = useRouter();
const [booking, setBooking] = useState(false);
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

EventService.getEvent(id as string).then((data: any) => {
      setEvent(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center text-white text-2xl">
        Event not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] py-10 px-6">

      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#101629]">

        <img
          src={event.image}
          alt={event.title}
          className="h-[420px] w-full object-cover"
        />

        <div className="p-10">

          <h1 className="text-5xl font-black text-white">
            {event.title}
          </h1>

          <p className="mt-6 text-white/70">
            {event.description}
          </p>

          <div className="mt-8 space-y-3 text-lg text-white">

            <p>📍 {event.location}</p>

            <p>📅 {event.date}</p>

            <p>🕒 {event.time}</p>

            <p>🏷 {event.category}</p>

            <p className="text-green-400 font-bold">
              ₹{event.price}
            </p>

            <p>
              Seats Left : {event.available_seats}
            </p>

          </div>

          <button
            className="mt-10 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-bold text-white"
          >
            Book Now
          </button>

        </div>

      </div>

    </main>
  );
}