"use client";
import { ReactNode } from "react";
import Link from "next/link";


interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "white";
  className?: string;
}
export default function Button({
  href,
  children,
  variant = "dark",
  className = "",
}: ButtonProps) {
  const baseClass =
    "px-6 py-3 rounded-lg font-semibold shadow-lg transition";

  const variantClass = {
    primary: "bg-orange-500 hover:bg-black text-white",
    dark: "bg-black hover:bg-orange-500 text-white",
    white: "bg-white hover:bg-orange-500 text-black",
  };

  return (
    <Link
      href={href}
      className={`${baseClass} ${variantClass[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}



