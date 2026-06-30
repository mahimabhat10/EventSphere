"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BookingService } from "@/services/bookings";
import { UserService } from "@/services/users";

interface Booking {
  id: number;
  quantity: number;
  total_price: number;
  status: string;
  event_details: {
    title: string;
  };
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  avatar?: string;
}

export default function ProfilePage() {
 const [bookings, setBookings] = useState<Booking[]>([]);
const [user, setUser] = useState<User | null>(null);

useEffect(() => {
  BookingService.getBookings().then((data: Booking[]) => {
    setBookings(data);
  });

  UserService.profile().then((data: User) => {
    setUser(data);
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
                src={user?.avatar || "https://i.pravatar.cc/300"}
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
  value={user?.first_name || ""}
  onChange={(e) => {
  if (!user) return;

  setUser({
    ...user,
    first_name: e.target.value,
  });
}}
  className="w-full rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
/>
              </div>

              <div>

                <label className="mb-2 block text-white">
                  Last Name
                </label>

                <input
            value={user?.last_name || ""}
onChange={(e) => {
  if (!user) return;

  setUser({
    ...user,
    last_name: e.target.value,
  });
}}
                  className="w-full rounded-xl border border-white/10 bg-[#101629] p-4 text-white outline-none"
                />

              </div>

            </div>

            <div className="mt-6">

              <label className="mb-2 block text-white">
                Email
              </label>
<input
  value={user?.email || ""}
  readOnly
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

           <button
  onClick={async () => {
   if (!user) return;

await UserService.updateProfile({
  first_name: user.first_name,
  last_name: user.last_name,
  avatar: user.avatar,
});

    toast.success("Profile Updated");
  }}
  className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-4 font-bold text-white transition hover:scale-105"
>
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

    {bookings.map((booking) =>(

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
<button
  onClick={async () => {
    await BookingService.cancelBooking(booking.id);
    setBookings(bookings.filter((b: Booking) => b.id !== booking.id));
  }}
  className="mt-4 rounded-xl bg-red-600 px-4 py-2 text-white hover:bg-red-700"
>
  Cancel Booking
</button>
      </div>

    ))}

  </div>

</div>
    </main>
  );
}