import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050816]">

      <div className="text-8xl">
        🎉
      </div>

      <h1 className="mt-6 text-5xl font-black text-white">
        Booking Successful
      </h1>

      <p className="mt-4 text-white/60">
        Your ticket has been confirmed.
      </p>

      <Link
        href="/my-bookings"
        className="mt-10 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 text-white"
      >
        View My Bookings
      </Link>

    </main>
  );
}