export default function CTA() {
  return (
    <section className="bg-[#050816] py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[40px] bg-gradient-to-r from-cyan-500 via-violet-600 to-pink-600 p-[1px]">

          <div className="rounded-[40px] bg-[#0a0f1f] px-10 py-24 text-center">

            <h2 className="text-6xl font-black text-white">
              Ready to Host
              <br />
              Your Next Event?
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl text-white/70">
              Join thousands of organizers and create unforgettable
              experiences with EventSphere.
            </p>

            <div className="mt-12 flex justify-center gap-6">

              <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-5 font-bold text-white transition hover:scale-105">
                Create Event
              </button>

              <button className="rounded-2xl border border-white/20 px-10 py-5 font-bold text-white hover:bg-white/10">
                Learn More
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}