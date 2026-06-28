"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <div className="mx-auto max-w-3xl px-6 py-20">

        <h1 className="text-5xl font-black">
          Contact Us
        </h1>

        <div className="mt-12 space-y-5">

          <input
            placeholder="Your Name"
            className="w-full rounded-xl bg-[#101629] p-4"
          />

          <input
            placeholder="Email"
            className="w-full rounded-xl bg-[#101629] p-4"
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="w-full rounded-xl bg-[#101629] p-4"
          />

          <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-bold">
            Send Message
          </button>

        </div>

      </div>

    </main>
  );
}