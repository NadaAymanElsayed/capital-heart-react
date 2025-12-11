import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <Image
        src="/assets/hero1.png"
        alt="Healthcare Hero"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
    </>
  );
}
