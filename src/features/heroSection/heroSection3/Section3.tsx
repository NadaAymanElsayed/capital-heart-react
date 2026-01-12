"use client";

import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Section3Content from "./Section3Content";

export default function Section3() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`relative ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <Section3Content />
    </section>
  );
}
