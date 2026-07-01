"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { EventService } from "@/services/events";

export default function CreateEventPage() {
  const router = useRouter();

 const [form, setForm] = useState({
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
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      await EventService.createEvent({
        ...form,
        price: Number(form.price),
        capacity: Number(form.capacity),
      });

     alert("Event created successfully!");
router.push("/events");
    } catch (err) {
      alert("Failed to create event.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12">

      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#101629] p-10">

        <h1 className="mb-8 text-4xl font-black text-white">
          Create Event
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="title"
            placeholder="Event Title"
            onChange={handleChange}
            className="w-full rounded-xl bg-[#18223f] p-4 text-white"
          />

          <textarea
            name="description"
            placeholder="Description"
            rows={5}
            onChange={handleChange}
            className="w-full rounded-xl bg-[#18223f] p-4 text-white"
          />

          <input
            name="location"
            placeholder="Location"
            onChange={handleChange}
            className="w-full rounded-xl bg-[#18223f] p-4 text-white"
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full rounded-xl bg-[#18223f] p-4 text-white"
          />

          <input
            type="time"
            name="time"
            onChange={handleChange}
            className="w-full rounded-xl bg-[#18223f] p-4 text-white"
          />

          <input
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="w-full rounded-xl bg-[#18223f] p-4 text-white"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="w-full rounded-xl bg-[#18223f] p-4 text-white"
          />

          <input
            type="number"
            name="capacity"
            placeholder="Capacity"
            onChange={handleChange}
            className="w-full rounded-xl bg-[#18223f] p-4 text-white"
          />

          <button
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-4 text-lg font-bold text-white"
          >
            {loading ? "Creating..." : "Create Event"}
          </button>

        </form>

      </div>

    </main>
  );
}