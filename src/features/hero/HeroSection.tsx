import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  );
}
