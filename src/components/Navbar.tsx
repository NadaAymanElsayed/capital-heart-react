"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useContext, useEffect, useState, useMemo } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const navClasses = useMemo(
    () =>
      theme === "light"
        ? "bg-white text-black"
        : "bg-black text-white",
    [theme]
  );

  const linkClasses = useMemo(
    () =>
      theme === "light"
        ? "text-black hover:text-[#FB8C00]"
        : "text-white hover:text-[#FB8C00]",
    [theme]
  );

  const mobileMenuClasses = useMemo(
    () =>
      theme === "light"
        ? "bg-white text-black"
        : "bg-black text-white",
    [theme]
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300 ${navClasses}`}
    >
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
          <div className="flex gap-10">
            {["Home", "About", "Services", "Doctors", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`font-medium relative group transition ${linkClasses}`}
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FB8C00] transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-[#FB8C00] hover:bg-[#e27e00] text-white shadow-md transition"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          )}

          <Link
            href="/appointment"
            className="bg-[#FB8C00] hover:bg-[#e27e00] text-white px-5 py-2 rounded-full font-semibold shadow transition"
          >
            Book Appointment
          </Link>
        </div>

        <button
          className="md:hidden transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div
          className={`md:hidden px-6 py-4 shadow-lg space-y-4 transition-colors duration-300 ${mobileMenuClasses}`}
        >
          {["Home", "About", "Services", "Doctors", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={`block font-medium transition ${linkClasses}`}
              >
                {item}
              </Link>
            )
          )}

          <Link
            href="/appointment"
            onClick={() => setOpen(false)}
            className="block bg-[#FB8C00] hover:bg-[#e27e00] text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition text-center"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}
