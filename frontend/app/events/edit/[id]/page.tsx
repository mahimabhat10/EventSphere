"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { EventService } from "@/services/events";

export default function EditEventPage() {
  const { id } = useParams();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [event, setEvent] = useState({
    title: "",
    description: "",
    location: "",
    category: "Technology",
    date: "",
    time: "",
    image: "",
    price: "",
    capacity: "",
  });
useEffect(() => {
  if (!id) return;

  EventService.getEvent(Number(id)).then((data: any) => {
    setEvent({
      title: data.title,
      description: data.description,
      location: data.location,
      category: data.category || "Technology",
      date: data.date,
      time: data.time.slice(0, 5),
      image: data.image,
      price: String(data.price),
      capacity: String(data.capacity),
    });
  });
}, [id]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  }

  async function saveEvent(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      await EventService.updateEvent(
        Number(id),
        {
          ...event,
          price: Number(event.price),
          capacity: Number(event.capacity),
        }
      );

      alert("Event Updated Successfully");

     router.push("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Failed to update event.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050816] py-10 px-6">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10">

        <h1 className="mb-10 text-5xl font-black text-white">
          Edit Event
        </h1>

        <form
          onSubmit={saveEvent}
          className="grid gap-6"
        >

          <input
            name="title"
            value={event.title}
            onChange={handleChange}
            placeholder="Event Title"
            className="rounded-xl bg-[#101629] p-4 text-white outline-none"
            required
          />

          <textarea
            name="description"
            rows={5}
            value={event.description}
            onChange={handleChange}
            placeholder="Description"
            className="rounded-xl bg-[#101629] p-4 text-white outline-none"
            required
          />

          <input
            name="location"
            value={event.location}
            onChange={handleChange}
            placeholder="Location"
            className="rounded-xl bg-[#101629] p-4 text-white outline-none"
            required
          />

          <select
            name="category"
            value={event.category}
            onChange={handleChange}
            className="rounded-xl bg-[#101629] p-4 text-white outline-none"
          >
            <option>Technology</option>
            <option>Business</option>
            <option>Music</option>
            <option>Sports</option>
            <option>Education</option>
            <option>Food</option>
            <option>Gaming</option>
            <option>Startup</option>
          </select>

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="date"
              name="date"
              value={event.date}
              onChange={handleChange}
              className="rounded-xl bg-[#101629] p-4 text-white outline-none"
              required
            />

            <input
              type="time"
              name="time"
              value={event.time}
              onChange={handleChange}
              className="rounded-xl bg-[#101629] p-4 text-white outline-none"
              required
            />

          </div>

          <input
            name="image"
            value={event.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="rounded-xl bg-[#101629] p-4 text-white outline-none"
          />

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="number"
              name="price"
              value={event.price}
              onChange={handleChange}
              placeholder="Price"
              className="rounded-xl bg-[#101629] p-4 text-white outline-none"
              required
            />

            <input
              type="number"
              name="capacity"
              value={event.capacity}
              onChange={handleChange}
              placeholder="Capacity"
              className="rounded-xl bg-[#101629] p-4 text-white outline-none"
              required
            />

          </div>

          <div className="flex gap-4 mt-6">

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-bold text-white transition hover:scale-105 disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Event"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/dashboard")}
              className="rounded-xl border border-white/20 px-8 py-4 font-bold text-white hover:bg-white/10"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </main>
  );
}