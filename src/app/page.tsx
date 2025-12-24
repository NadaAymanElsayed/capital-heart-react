import Section2 from "@/features/heroSection/heroSection2/Section2";
import HeroSection from "../features/heroSection/sheroSection1/HeroSection";
import Section3 from "@/features/heroSection/heroSection3/Section3";
import DoctorHero from "@/features/heroSection/heroSection4/section4";
import HelpSection from "@/features/heroSection/heroSection5/section5";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <Section2 />
      <Section3 />
      <DoctorHero />
      <HelpSection />
    </main>
  );
}
