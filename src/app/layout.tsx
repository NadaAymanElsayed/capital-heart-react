// app/layout.tsx
import "./globals.css"; // ملف Tailwind
import type { ReactNode } from "react";
import Navbar from "../components/Navbar"; // تأكدي من المسار الصحيح

export const metadata = {
  title: "HealthCare",
  description: "Healthcare site",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
