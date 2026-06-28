"use client";

import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    { number: 5000, label: "Events" },
    { number: 120000, label: "Users" },
    { number: 250, label: "Organizers" },
    { number: 100, label: "Cities" },
  ];

  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
          >
            <h2 className="text-5xl font-black text-cyan-400">
              <CountUp end={item.number} duration={3} />+
            </h2>

            <p className="mt-4 text-white/60">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}