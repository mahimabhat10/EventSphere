"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  async function handleLogout() {
    await logout();
    window.location.href = "/";
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link href="/" className="text-3xl font-black">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            EventSphere
          </span>
        </Link>

        <nav className="hidden gap-8 text-white md:flex">

          <Link href="/">Home</Link>

          <Link href="/events">Events</Link>

          <Link href="/booking">Booking</Link>

          <Link href="/profile">Profile</Link>

        </nav>

        {!user ? (

          <div className="flex gap-4">

            <Link
              href="/login"
              className="rounded-xl border border-cyan-400 px-5 py-2 text-cyan-400"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2 font-semibold text-white"
            >
              Register
            </Link>

          </div>

        ) : (

          <div className="flex items-center gap-4">

            <span className="text-white">
              Hi, {user.first_name}
            </span>

            <button
              onClick={handleLogout}
              className="rounded-xl bg-red-500 px-5 py-2 text-white"
            >
              Logout
            </button>

          </div>

        )}

      </div>

    </header>
  );
}