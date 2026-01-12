"use client";
"use client";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  text: string;
}

export default function Section3Card({ image, title, subtitle, text }: CardProps) {
  const { theme } = useContext(ThemeContext); 

  return (
    <div
      className={`flex flex-col h-[480px] text-white ${
        theme === "dark" ? "bg-black" : "bg-[#F58220]"
      }`}
    >
      <div className="relative w-full h-40">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xs font-semibold uppercase tracking-wider">{subtitle}</h4>
        <h3 className="text-xl font-semibold mt-1">{title}</h3>
        <div className={`w-10 h-[2px] ${theme === "dark" ? "bg-white" : "bg-black"} mt-2`}></div>
        <p className="text-sm mt-4 flex-grow">{text}</p>
        <button
          className={`mt-auto border py-2 px-4 text-sm font-medium transition
            ${theme === "dark"
              ? "bg-transparent border-white text-white hover:bg-white hover:text-black"
              : "bg-transparent border-white text-white hover:bg-white hover:text-black"
            }`}
        >
          Find out more
        </button>
      </div>
    </div>
  );
}

