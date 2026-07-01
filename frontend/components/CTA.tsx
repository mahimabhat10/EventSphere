"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-5xl rounded-[40px] border border-cyan-500/20 bg-[#101629] px-8 py-20 text-center">

        <h2 className="text-5xl font-black text-white">
          Ready to Host
          <br />
          Your Next Event?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
          Join thousands of organizers and create unforgettable experiences
          with EventSphere.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            href="/dashboard/create-event"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-bold text-white transition hover:scale-105"
          >
            Create Event
          </Link>

          <Link
            href="/about"
            className="rounded-xl border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10"
          >
            Learn More
          </Link>

        </div>

      </div>
    </section>
  );
}