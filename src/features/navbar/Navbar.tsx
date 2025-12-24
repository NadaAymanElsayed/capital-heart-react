"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Button from "@/components/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
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

        <div className="hidden md:flex">
          <Button href="/appointment" variant="primary">
            Book Appointment
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && <MobileMenu closeMenu={() => setOpen(false)} />}
    </nav>
  );
}
