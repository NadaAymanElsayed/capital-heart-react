"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";




export default function Navbar() {
  const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
   
        <Link href="/" className="flex items-center gap-2">
          <Image
  src="/assets/logoBlack.png"
  width={120}           
  height={38}
  className="md:w-[225px] md:h-[47px]" 
  alt="Logo"
/>

        </Link>

        <div className="hidden md:flex items-center flex-1 justify-center">

          <div className="flex gap-19">

            <Link href="/" className="text-white font-medium relative group hover:text-[#FB8C00] transition">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FB8C00] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="/about" className="text-white font-medium relative group hover:text-[#FB8C00] transition">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FB8C00] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="/services" className="text-white font-medium relative group hover:text-[#FB8C00] transition">
              Services
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FB8C00] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="/doctors" className="text-white font-medium relative group hover:text-[#FB8C00] transition">
              Doctors
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FB8C00] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="/contact" className="text-white font-medium relative group hover:text-[#FB8C00] transition">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FB8C00] transition-all duration-300 group-hover:w-full"></span>
            </Link>

          </div>
        </div>

  <div className="hidden md:flex items-center gap-4">
  {mounted && (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-[#FB8C00] hover:bg-[#e27e00] text-white shadow-md"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )}

  <Link
    href="/appointment"
    className="bg-[#FB8C00] hover:bg-[#e27e00] text-white px-5 py-2 rounded-full font-semibold shadow"
  >
    Book Appointment
  </Link>
</div>


        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black px-6 py-4 shadow-lg space-y-4">

          <Link href="/" onClick={() => setOpen(false)} className="block text-white font-medium hover:text-[#FB8C00]">
            Home
          </Link>

          <Link href="/about" onClick={() => setOpen(false)} className="block text-white font-medium hover:text-[#FB8C00]">
            About
          </Link>

          <Link href="/services" onClick={() => setOpen(false)} className="block text-white font-medium hover:text-[#FB8C00]">
            Services
          </Link>

          <Link href="/doctors" onClick={() => setOpen(false)} className="block text-white font-medium hover:text-[#FB8C00]">
            Doctors
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)} className="block text-white font-medium hover:text-[#FB8C00]">
            Contact
          </Link>

          <Link
            href="/appointment"
            onClick={() => setOpen(false)}
            className="bg-[#FB8C00] hover:bg-[#e27e00] text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}
