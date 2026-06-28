import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedEvents from "@/components/FeaturedEvents";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050816] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedEvents />
      <Categories />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}