import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-20">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">

        <div>

          <h2 className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-3xl font-black text-transparent">
            EventSphere
          </h2>

          <p className="mt-6 text-white/60">
            India's modern event discovery platform.
          </p>

        </div>

        <div>
          <h3 className="mb-5 font-bold text-white">Company</h3>

          <div className="space-y-3 text-white/60">
            <p>About</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>

        </div>

        <div>

          <h3 className="mb-5 font-bold text-white">
            Resources
          </h3>

          <div className="space-y-3 text-white/60">
            <p>Events</p>
            <p>Blog</p>
            <p>Help Center</p>
          </div>

        </div>

        <div>

          <h3 className="mb-5 font-bold text-white">
            Follow
          </h3>

          <div className="flex gap-4 text-2xl">

  <FaFacebook className="cursor-pointer text-cyan-400 transition hover:scale-110" />
  <FaInstagram className="cursor-pointer text-pink-400 transition hover:scale-110" />
  <FaXTwitter className="cursor-pointer text-cyan-300 transition hover:scale-110" />
  <FaLinkedin className="cursor-pointer text-blue-400 transition hover:scale-110" />

</div>

        </div>

      </div>

      <p className="mt-16 text-center text-white/40">
        © 2026 EventSphere. All Rights Reserved.
      </p>

    </footer>
  );
}