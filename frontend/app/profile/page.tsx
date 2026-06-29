"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { BookingService } from "@/services/bookings";
import { UserService } from "@/services/users";

export default function ProfilePage() {

 const [bookings, setBookings] = useState<any[]>([]);
const [user, setUser] = useState<any>(null);

useEffect(() => {
  BookingService.getBookings().then((data) => {
    console.log("BOOKINGS:", data);
    setBookings(data);
  });
}, []);

  return (
    <main className="min-h-screen bg-[#050816] py-12 px-6">

      <div className="mx-auto max-w-7xl">

        <Link
          href="/dashboard"
          className="text-cyan-400 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_2fr]">

          {/* Left Card */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="flex flex-col items-center">

              <img
                src="https://i.pravatar.cc/300"
                alt="Profile"
                className="h-36 w-36 rounded-full border-4 border-cyan-400 object-cover"
              />

              <h2 className="mt-6 text-3xl font-black text-white">
               {user?.first_name} {user?.last_name}
              </h2>

              <p className="mt-2 text-white/60">
              {user?.email}
              </p>

              <span className="mt-5 rounded-full bg-cyan-500/20 px-5 py-2 text-cyan-400">
                {user?.role}
              </span>

            </div>

          </div>

          {/* Right Card */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h1 className="mb-8 text-4xl font-black text-white">
              Edit Profile
            </h1>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-white">
                  First Name
                </label>

                <input
                  defaultValue="John"
                  className="w-full rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block text-white">
                  Last Name
                </label>

                <input
                  defaultValue="Doe"
                  className="w-full rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
                />

              </div>

            </div>

            <div className="mt-6">

              <label className="mb-2 block text-white">
                Email
              </label>

              <input
                defaultValue="johndoe@gmail.com"
                className="w-full rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
              />

            </div>

            <div className="mt-6">

              <label className="mb-2 block text-white">
                Phone
              </label>

              <input
                defaultValue="+91 9876543210"
                className="w-full rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
              />

            </div>

            <div className="mt-6">

              <label className="mb-2 block text-white">
                Bio
              </label>

              <textarea
                rows={5}
                defaultValue="Passionate about technology, concerts and networking events."
                className="w-full rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
              />

            </div>

            <button className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-4 font-bold text-white transition hover:scale-105">
              Save Changes
            </button>

          </div>

        </div>

      </div>
<div className="mx-auto mt-12 max-w-7xl">

  <h2 className="mb-8 text-4xl font-black text-white">
    My Bookings
  </h2>

  <div className="grid gap-6">

    {bookings.map((booking: any) => (

      <div
        key={booking.id}
        className="rounded-3xl bg-white/5 border border-white/10 p-6"
      >

        <h3 className="text-2xl font-bold text-white">
          {booking.event_details.title}
        </h3>

        <p className="mt-2 text-white/60">
          Tickets: {booking.quantity}
        </p>

        <p className="mt-2 text-cyan-400">
          ₹{booking.total_price}
        </p>

        <p className="mt-2 text-green-400">
          {booking.status}
        </p>

      </div>

    ))}

  </div>

</div>
    </main>
  );
}