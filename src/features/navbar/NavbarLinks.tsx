import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

export default function NavbarLinks() {
  return (
    <div className="flex gap-10">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="text-white font-medium relative group hover:text-[#FB8C00] transition"
        >
          {link.label}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FB8C00] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  );
}
