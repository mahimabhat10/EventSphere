import Link from "next/link";

export default function OrganizerHome() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20">

      <div className="mx-auto max-w-6xl text-center">

        <h1 className="text-6xl font-black text-white">
          Become an Organizer
        </h1>

        <p className="mt-6 text-xl text-white/70">
          Create, manage and sell tickets for your events.
        </p>

        <Link
          href="/dashboard"
          className="mt-10 inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-4 font-bold text-white"
        >
          Open Dashboard
        </Link>

      </div>

    </main>
  );
}