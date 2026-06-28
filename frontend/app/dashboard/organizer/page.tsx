const events = [
  {
    id: 1,
    title: "Sunburn Goa",
    tickets: 1240,
    revenue: "₹30,45,000",
    status: "Live",
  },
  {
    id: 2,
    title: "Google DevFest",
    tickets: 640,
    revenue: "₹6,39,000",
    status: "Upcoming",
  },
];

export default function OrganizerDashboard() {
  return (
    <main className="min-h-screen bg-[#050816] px-8 py-12">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-black text-white">
              Organizer Dashboard
            </h1>

            <p className="mt-3 text-white/60">
              Manage your events and monitor performance.
            </p>

          </div>

          <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-bold text-white">
            + Create Event
          </button>

        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-4">

          {[
            ["Total Events", "14"],
            ["Tickets Sold", "8,520"],
            ["Revenue", "₹48.2L"],
            ["Followers", "18K"],
          ].map(([title, value]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-white/60">{title}</p>
              <h2 className="mt-4 text-4xl font-black text-cyan-400">
                {value}
              </h2>
            </div>
          ))}

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="mb-8 text-3xl font-bold text-white">
            My Events
          </h2>

          <div className="space-y-5">

            {events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col gap-4 rounded-2xl bg-[#111827] p-6 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-white/60">
                    Tickets Sold: {event.tickets}
                  </p>

                  <p className="text-white/60">
                    Revenue: {event.revenue}
                  </p>
                </div>

                <div className="flex gap-3">

                  <span className="rounded-xl bg-cyan-500/20 px-5 py-2 text-cyan-400">
                    {event.status}
                  </span>

                  <button className="rounded-xl bg-purple-600 px-5 py-2 text-white">
                    Edit
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}