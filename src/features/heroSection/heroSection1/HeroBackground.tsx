"use client";
import Image from "next/image";
import { useContext, useMemo } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function HeroBackground() {
  const { theme } = useContext(ThemeContext);

  const overlayClass = useMemo(
    () => (theme === "dark" ? "bg-black/70" : "bg-black/30"),
    [theme]
  );

  return (
    <>
      <Image
        src="/assets/hero1.png"
        alt="Healthcare Hero"
        fill
        className="object-cover"
        priority
      />

      <div
        className={`absolute inset-0 transition-all duration-300 ease-in-out ${overlayClass}`}
      />
    </>
  );
}
