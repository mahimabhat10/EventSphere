"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Music Lover",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Booked Sunburn tickets in under a minute. Super smooth experience!",
  },
  {
    name: "Rahul Mehta",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "Organizing our hackathon became effortless. Loved the dashboard.",
  },
  {
    name: "Ananya Singh",
    role: "College Student",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "The UI is beautiful and finding events nearby is incredibly easy.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-black text-white">
          What People Say
        </h2>

        <p className="mb-16 text-center text-white/60">
          Trusted by thousands of event lovers across India.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((user) => (

            <div
              key={user.name}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#141b33] to-[#0b1022] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
            >

              <div className="mb-6 flex items-center gap-4">

                <img
                  src={user.image}
                  alt={user.name}
                  className="h-16 w-16 rounded-full border-2 border-cyan-400 object-cover"
                />

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {user.name}
                  </h3>

                  <p className="text-white/50">
                    {user.role}
                  </p>

                </div>

              </div>

              <div className="mb-5 flex text-yellow-400">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}

              </div>

              <p className="leading-8 text-white/70">
                "{user.review}"
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}