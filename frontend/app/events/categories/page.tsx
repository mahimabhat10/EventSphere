"use client";

export default function CategoriesPage() {
  const categories = [
    "Music",
    "Technology",
    "Business",
    "Sports",
    "Education",
    "Food",
    "Startup",
    "Gaming",
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-12">
      <h1 className="text-5xl font-bold mb-10">Event Categories</h1>

      <div className="grid gap-6 md:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category}
            className="rounded-2xl bg-[#101629] p-8 text-center border border-white/10 hover:border-cyan-400"
          >
            {category}
          </div>
        ))}
      </div>
    </main>
  );
}