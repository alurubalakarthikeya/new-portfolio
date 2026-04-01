import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

export const metadata: Metadata = {
  title: "Karthikeya | AI & Web Developer",
  description: "Portfolio of Bala Karthikeya, Full Stack & AI Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col cursor-none">
        <Cursor />
        <div className="flex-1 w-full relative z-10 flex flex-col">
          {children}
        </div>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
