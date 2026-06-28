"use client";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16">

      <div className="mx-auto max-w-3xl rounded-3xl bg-[#101629] p-10">

        <h1 className="text-5xl font-black text-white">
          Settings
        </h1>

        <div className="mt-10 space-y-6">

          <label className="flex items-center justify-between text-white">

            Email Notifications

            <input type="checkbox" defaultChecked />

          </label>

          <label className="flex items-center justify-between text-white">

            Dark Mode

            <input type="checkbox" defaultChecked />

          </label>

        </div>

      </div>

    </main>
  );
}