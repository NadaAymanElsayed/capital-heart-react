import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
