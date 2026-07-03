import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/salon/Navbar";
import { Hero } from "@/components/salon/Hero";
import { Services } from "@/components/salon/Services";
import { Lookbook } from "@/components/salon/Lookbook";
import { Stylists } from "@/components/salon/Stylists";
import { Booking } from "@/components/salon/Booking";
import { Footer } from "@/components/salon/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Lookbook />
        <Stylists />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
