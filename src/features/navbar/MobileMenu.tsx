import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

interface MobileMenuProps {
  closeMenu: () => void;
}

export default function MobileMenu({ closeMenu }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-white px-6 py-4 shadow-lg space-y-4">
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

      <Link
        href="/appointment"
        onClick={closeMenu}
        className="bg-[#FB8C00] hover:bg-[#e27e00] text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
      >
        Book Appointment
      </Link>
    </div>
  );
}
