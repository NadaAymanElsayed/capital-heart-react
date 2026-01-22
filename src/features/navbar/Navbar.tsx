"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState, useEffect, useMemo } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Button from "@/components/Button";
import { Moon, Sun, Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const navbarClass = useMemo(
    () =>
      theme === "light"
        ? "bg-white text-black"
        : "bg-black text-white",
    [theme]
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300 ${navbarClass}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logoBlack.png"
            width={225}
            height={47}
            alt="Logo"
          />
        </Link>

        <div className="hidden md:flex items-center flex-1 justify-center">
          <NavbarLinks />
        </div>

        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 shadow-md transition"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          )}

          <Button href="/appointment" variant="primary">
            Book Appointment
          </Button>
        </div>

        <button
          className="md:hidden transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <MobileMenu
          closeMenu={() => setOpen(false)}
          toggleTheme={toggleTheme}
          theme={theme}
        />
      )}
    </nav>
  );
}
