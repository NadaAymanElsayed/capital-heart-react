"use client";

import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function HelpSection() {
  const { theme } = useContext(ThemeContext);

  const sectionBg = theme === "light" ? "bg-white" : "bg-[#1b1b1b]";
  const textPrimary = theme === "light" ? "text-black" : "text-white";
  const textSecondary = theme === "light" ? "text-gray-700" : "text-gray-400";
  const textHighlight = "text-orange-500";

  return (
<section className={`pt-[400px] pb-24 transition-colors duration-300 ${sectionBg}`}>
      <div className={`container mx-auto pl-5 transition-colors duration-300 ${textPrimary}`}>

        <p className={`text-sm uppercase tracking-widest ${textSecondary}`}>
          SERVICES AT ONE GLANCE
        </p>
        <div className="w-16 h-px bg-orange-500 mt-3 mb-4 mx-auto lg:mx-0"></div>

        <h1 className={`text-5xl font-bold mt-2 ${textPrimary}`}>
          How can we
        </h1>
        <h1 className={`text-5xl font-bold mt-2 ${textHighlight}`}>
          Help you?
        </h1>

        <h6 className={`text-1xl mt-2 ${textSecondary}`}>
          Credibly innovate granular internal or “organic“ sources whereas high standards in web-
          readiness. Energistically scale future-proof core competencies vis-a-vis impactful
          experiences. Dramatically synthesize integrated schemas with optimal networks.
        </h6>
      </div>
    </section>
  );
}
