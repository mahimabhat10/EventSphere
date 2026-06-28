"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function RegisterPage() {
  const { register } = useAuth();

  const router = useRouter();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "attendee",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (form.password !== form.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await register(form);
      router.push("/profile");
    } catch {
      setError("Registration failed");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050816] px-6">

      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <h1 className="text-center text-4xl font-black text-white">
          Create Account
        </h1>

        <p className="mt-3 text-center text-white/60">
          Join EventSphere today
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >

          <div className="grid grid-cols-2 gap-4">

            <input
              name="first_name"
              placeholder="First Name"
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
            />

            <input
              name="last_name"
              placeholder="Last Name"
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
            />

          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
          />

          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
          >
            <option value="attendee">Attendee</option>
            <option value="organizer">Organizer</option>
          </select>

          {error && (
            <p className="text-red-400">{error}</p>
          )}

          <button
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-4 font-bold text-white"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

      </div>

    </main>
  );
}