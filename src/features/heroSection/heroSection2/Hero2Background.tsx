"use client";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function Section2Background() {
   const { theme } = useContext(ThemeContext);
  return (
    <div className="absolute inset-0">
      <img
        src="/assets/bgSection2.png" 
        alt="background"
        className="w-full h-full object-cover"
      />
      <div    className={`absolute inset-0 ${
          theme === "dark" ? "bg-black/70" : "bg-black/30"
        }`}></div>
    </div>
  );
}
