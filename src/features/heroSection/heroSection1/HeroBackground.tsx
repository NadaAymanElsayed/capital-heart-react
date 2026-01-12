
"use client";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function HeroBackground() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Image
        src="/assets/hero1.png"
        alt="Healthcare Hero"
        fill
        className="object-cover"
      />
      <div
        className={`absolute inset-0 ${
          theme === "dark" ? "bg-black/70" : "bg-black/30"
        }`}
      />
    </>
  );
}
