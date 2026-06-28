"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();

  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    setError("");

    try {
      await login(email, password);

      router.push("/profile");
    } catch (err: any) {
      setError("Invalid email or password");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#050816] flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <h1 className="text-center text-4xl font-black text-white">
          Welcome Back
        </h1>

        <p className="mt-3 text-center text-white/60">
          Login to EventSphere
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full rounded-xl bg-[#101629] p-4 text-white outline-none border border-white/10"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full rounded-xl bg-[#101629] p-4 text-white outline-none border border-white/10"
          />

          {error && (
            <p className="text-red-400">
              {error}
            </p>
          )}

          <button
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-4 font-bold text-white"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>

    </main>
  );
}