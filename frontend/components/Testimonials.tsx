export default function Testimonials() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-16 text-center text-5xl font-black text-white">
          Loved by Thousands
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">

          {[
            "Amazing experience booking concerts.",
            "Beautiful platform and super easy.",
            "Perfect for organizing college events."
          ].map((text, i) => (

            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <p className="text-lg leading-8 text-white/70">
                "{text}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-white">
                  User {i + 1}
                </h3>

                <p className="text-white/50">
                  Verified Member
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}