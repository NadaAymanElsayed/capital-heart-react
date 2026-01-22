"use client";

import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function Hero6Content() {
  const { theme } = useContext(ThemeContext);


  const sectionBg = theme === "light" ? "bg-white" : "bg-[#1b1b1b]";
  const textPrimary = theme === "light" ? "text-black" : "text-white";
  const textSecondary = theme === "light" ? "text-gray-700" : "text-gray-300";
  const textHighlight = "text-orange-500"; 

  const heroImages = ["hero6-1.png", "hero6-2.png", "hero6-3.png", "hero6-4.png"];

  return (
    <section className={`py-16 transition-colors duration-300 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-6">

        <h3 className={`text-sm tracking-widest uppercase ${textSecondary}`}>
          OUR DOCTORS, OUR COMMUNITY
        </h3>

        <div className="w-16 h-[2px] bg-orange-500 mt-3 mb-6"></div>

        <div className="flex flex-wrap gap-2 mb-4">
          <h1 className={`font-bold text-4xl md:text-5xl ${textPrimary}`}>
            Meet Our
          </h1>
          <h1 className={`font-bold text-4xl md:text-5xl ${textHighlight}`}>
            Distinguished
          </h1>
          <h1 className={`text-4xl md:text-5xl ${textPrimary}`}>
            Medical Team
          </h1>
        </div>

        <p className={`${textSecondary} max-w-2xl mb-10 leading-relaxed`}>
          We believe that great doctors aren’t just experts in healthcare —
          they’re people who inspire, support, and lead by example in and out
          of the hospital.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {heroImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl">
              <img
                src={`/assets/${img}`}
                className="h-40 w-full object-cover transition-transform duration-300 hover:scale-105"
                alt={`Hero Image ${index + 1}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
