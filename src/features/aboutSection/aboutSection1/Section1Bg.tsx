import Image from "next/image";

export default function AboutBg() {
  return (
    <>
      <Image
        src="/assets/about.png"
        alt="About section"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
    </>
  );
}
