"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050816]">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/30 blur-[140px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[170px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-500/20 blur-[130px]" />
    </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-32 lg:flex-row">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >

          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-cyan-300">
            🚀 India's Premium Event Platform
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white lg:text-8xl">
            Find Your
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Next Experience
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
            Book concerts, hackathons, workshops, festivals and conferences
            from thousands of verified organizers across India.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-2xl">
              Explore Events
              <ArrowRight size={20} />
            </button>

            <button className="rounded-xl border border-white/20 px-8 py-4 text-white hover:bg-white/10">
              Become Organizer
            </button>

          </div>

          <div className="mt-14 flex flex-wrap gap-8 text-white/70">

            <div className="flex items-center gap-3">
              <CalendarDays className="text-cyan-400" />
              5,000+ Events
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-pink-400" />
              100+ Cities
            </div>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-20 flex-1 lg:mt-0"
        >

          <div className="rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl shadow-[0_0_80px_rgba(99,102,241,.25)]">

            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900"
              alt="event"
              className="rounded-3xl"
            />

            <div className="mt-8 flex justify-between">

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Sunburn Goa
                </h3>

                <p className="mt-2 text-white/60">
                  Biggest EDM Festival
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 font-bold text-white">
                ₹2499
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}