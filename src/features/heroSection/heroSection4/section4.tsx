"use client";

import Button from "@/components/Button";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function DoctorHero() {
  const { theme } = useContext(ThemeContext);

  const sectionBg = theme === "light" ? "bg-white" : "bg-[#1b1b1b]";
  const textPrimary = theme === "light" ? "text-black" : "text-white";
  const textSecondary = theme === "light" ? "text-gray-700" : "text-gray-300";
  const textHighlight = "text-orange-500"; 

  const doctors = [
    {
      job: "FOUNDER / CHIEF SURGEON",
      name: "Walid Eltahlawy",
      desc:
        "Podcasting operational change management inside of workflows to establish a framework.",
    },
    {
      job: "ASSISTANT SURGEON",
      name: "Anna Wilson",
      desc:
        "Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts.",
    },
    {
      job: "LEAD NURSE",
      name: "Peggie Cannon",
      desc:
        "Seamlessly visualize quality intellectual capital without superior collaboration and installed base portals.",
    },
    {
      job: "NURSE",
      name: "Hubert Jackson",
      desc:
        "Energistically scale future-proof core competencies vis-a-vis impactful experiences with optimal networks.",
    },
  ];

  return (
    <section
      className={`relative overflow-visible transition-colors duration-300 ${sectionBg}`}
    >
      <div className="container mx-auto relative min-h-[700px] px-4 sm:px-6 lg:px-0">

        <div
          className="
            absolute 
            left-1/2 -translate-x-1/2 
            lg:left-0 lg:translate-x-0 
            top-4 
            w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[420px] 
            z-10
          "
        >
          <img src="/assets/doc.png" alt="Doctor" className="w-full" />
        </div>

        <div
          className="
            relative lg:absolute
            lg:left-[200px] lg:bottom-[-210px]
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-4 sm:gap-6
            mt-12 lg:mt-0
            z-20
          "
        >
          {doctors.map((item, index) => (
            <div
              key={index}
              className={`w-full max-w-[180px] mx-auto text-center shadow-lg flex flex-col transition-colors duration-300 ${
                theme === "light" ? "bg-white text-black" : "bg-[#222] text-white"
              }`}
            >
              <img
                src={`/assets/doc${index + 1}.png`}
                className="w-full h-[200px] object-contain"
                alt={item.name}
              />

              <p
                className={`text-[11px] mt-2 leading-relaxed ${
                  theme === "light" ? "text-gray-800" : "text-gray-300"
                }`}
              >
                {item.job}
              </p>
              <div className="w-16 h-px bg-orange-500 mt-3 mb-1 mx-auto"></div>
              <h4 className={`mt-3 font-semibold text-sm ${textPrimary}`}>
                {item.name}
              </h4>
              <p
                className={`text-xs mb-6 ${
                  theme === "light" ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {item.desc}
              </p>

              <Button
                href="/doctor-profile"
                variant="white"
                className="mt-auto text-xs py-1.5 px-3 w-full max-w-[120px] mx-auto h-10"
              >
                View Profile
              </Button>
            </div>
          ))}
        </div>

        <div className="ml-auto max-w-xl pt-16 lg:pt-32 px-0 sm:px-4 lg:pr-10 text-center lg:text-left">
          <p className={`text-sm uppercase tracking-widest ${textSecondary}`}>
            INTRODUCING OUR TEAM
          </p>
          <div className="w-16 h-px bg-orange-500 mt-3 mb-4 mx-auto lg:mx-0"></div>
          <h1 className={`text-4xl font-bold mt-2 ${textHighlight}`}>
            Great passion <br />
            <span className={textPrimary}>for healing</span>
          </h1>

          <p className={`${textPrimary} mt-4`}>
            Some up and coming trends are healthcare consolidation for independent healthcare
            centers that see a cut in unforeseen payouts. High deductible health plans are also
            expected to transpire along with a growth of independent practices.
          </p>
          <p className={`${textHighlight} mt-2 text-center lg:text-right`}>
            Walid Eltahlawy
          </p>
          <p className={`${textSecondary} mt-2 text-center lg:text-right`}>
            Cardiac transplant specialist
          </p>
        <img
  src={theme === "light" ? "/assets/signatureLight.png" : "/assets/signature.png"}
  alt="Signature"
  className="mx-auto lg:ml-auto mt-4 w-32 opacity-80"
/>

        </div>

      </div>
    </section>
  );
}
