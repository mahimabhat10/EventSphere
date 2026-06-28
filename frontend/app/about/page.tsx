export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <section className="mx-auto max-w-6xl px-6 py-20">

        <h1 className="text-6xl font-black">
          About EventSphere
        </h1>

        <p className="mt-8 text-xl text-white/70 leading-9">
          EventSphere is a modern event management platform that helps
          users discover, book and manage events while enabling
          organizers to create and promote amazing experiences.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-[#101629] p-8">
            <h2 className="text-2xl font-bold">1000+</h2>
            <p className="mt-3 text-white/60">
              Events Hosted
            </p>
          </div>

          <div className="rounded-3xl bg-[#101629] p-8">
            <h2 className="text-2xl font-bold">50K+</h2>
            <p className="mt-3 text-white/60">
              Happy Users
            </p>
          </div>

          <div className="rounded-3xl bg-[#101629] p-8">
            <h2 className="text-2xl font-bold">200+</h2>
            <p className="mt-3 text-white/60">
              Organizers
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}