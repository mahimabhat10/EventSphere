"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { EventService } from "@/services/events";
import Link from "next/link";
export default function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    EventService.getEvent(id).then(setEvent);
  }, [id]);

  if (!event) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">

        <img
          src={event.image}
          className="h-[450px] w-full rounded-3xl object-cover"
          alt={event.title}
        />

        <h1 className="mt-8 text-5xl font-black">
          {event.title}
        </h1>

        <p className="mt-4 text-xl text-white/70">
          📍 {event.location}
        </p>

        <p className="mt-2 text-xl text-white/70">
          📅 {event.date}
        </p>

        <p className="mt-6 text-cyan-400 text-3xl font-bold">
          ₹{event.price}
        </p>

        <p className="mt-8 text-lg leading-8 text-white/80">
          {event.description}
        </p>

       <Link
  href={`/booking/${event.id}`}
  className="mt-10 inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 text-xl font-bold"
>
  Book Ticket
</Link>

      </div>
    </main>
  );
}