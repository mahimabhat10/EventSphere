import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050816]">

      <h1 className="text-8xl font-black text-cyan-400">
        404
      </h1>

      <p className="mt-5 text-2xl text-white">
        Page Not Found
      </p>

      <Link
        href="/"
        className="mt-10 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-bold text-white"
      >
        Back Home
      </Link>

    </main>
  );
}