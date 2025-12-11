import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: ReactNode;
  primary?: boolean;
}

export default function Button({ href, children, primary = false }: ButtonProps) {
  const baseClass = "px-6 py-3 rounded-lg font-semibold shadow-lg transition";
  const colorClass = primary 
    ? "bg-orange-500 hover:bg-black text-white"
    : "bg-black hover:bg-orange-500 text-white";

  return (
    <Link href={href} className={`${baseClass} ${colorClass}`}>
      {children}
    </Link>
  );
}
