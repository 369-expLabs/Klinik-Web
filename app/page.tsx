import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import PainMirror from "@/components/sections/PainMirror";
import DeeperPain from "@/components/sections/DeeperPain";
import IcebergTransitionWrapper from "@/components/sections/IcebergTransitionWrapper";
import ComparisonTable from "@/components/sections/ComparisonTable";
import Agitation from "@/components/sections/Agitation";
import Urgency from "@/components/sections/Urgency";
import Solution from "@/components/sections/Solution";
import Trust from "@/components/sections/Trust";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Booking from "@/components/sections/Booking";
import Footer from "@/components/ui/Footer";

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <IcebergTransitionWrapper>
        <PainMirror />
        <DeeperPain />
      </IcebergTransitionWrapper>
      <Agitation />
      <Urgency />
      <ComparisonTable />
      <Solution />
      <Trust />
      <Process />
      <Testimonials />
      <FAQ />
      <Booking />
      <Footer />
    </main>
  );
}
