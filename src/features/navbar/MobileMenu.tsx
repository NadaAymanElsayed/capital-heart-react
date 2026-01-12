import Link from "next/link";
import { Moon, Sun } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

interface MobileMenuProps {
  closeMenu: () => void;
  toggleTheme: () => void;
  theme: "light" | "dark";
}

export default function MobileMenu({ closeMenu, toggleTheme, theme }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-white px-6 py-4 shadow-lg space-y-4 z-50 relative">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          onClick={closeMenu}
          className="block text-gray-700 font-medium hover:text-[#FB8C00]"
        >
          {link.label}
        </Link>
      ))}

      <button
        onClick={toggleTheme}
        className="w-full p-2 bg-orange-500 text-white rounded hover:bg-orange-600 flex items-center justify-center gap-2"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        Toggle Theme
      </button>

      <Link
        href="/appointment"
        onClick={closeMenu}
        className="bg-[#FB8C00] hover:bg-[#e27e00] text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition block text-center"
      >
        Book Appointment
      </Link>
    </div>
  );
}
