"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      await EventService.createEvent({
        ...form,
        price: Number(form.price),
        capacity: Number(form.capacity),
      });

      alert("Event Created Successfully");

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Unable to create event.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050816] py-10 px-6">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10">

        <h1 className="mb-10 text-5xl font-black text-white">
          Create Event
        </h1>

        <form onSubmit={handleSubmit} className="grid gap-6">

          <input
            name="title"
            placeholder="Event Title"
            value={form.title}
            onChange={handleChange}
            className="rounded-xl bg-[#101629] p-4 text-white outline-none"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            rows={5}
            className="rounded-xl bg-[#101629] p-4 text-white outline-none"
            required
          />

          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="rounded-xl bg-[#101629] p-4 text-white outline-none"
            required
          />

          <select
            name="category"
            value={form.category}
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
              value={form.date}
              onChange={handleChange}
              className="rounded-xl bg-[#101629] p-4 text-white outline-none"
              required
            />

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="rounded-xl bg-[#101629] p-4 text-white outline-none"
              required
            />

          </div>

          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="rounded-xl bg-[#101629] p-4 text-white outline-none"
          />

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="rounded-xl bg-[#101629] p-4 text-white outline-none"
              required
            />

            <input
              type="number"
              name="capacity"
              placeholder="Capacity"
              value={form.capacity}
              onChange={handleChange}
              className="rounded-xl bg-[#101629] p-4 text-white outline-none"
              required
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-bold text-white transition hover:scale-105 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Event"}
          </button>

        </form>

      </div>
    </main>
  );
}