import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
import Cursor from "./components/Cursor";
import MobileNav from "./components/MobileNav";
import SearchKeywordHighlighter from "./components/SearchKeywordHighlighter";
import logo from "./assets/imgs/logo.png";

const doto = localFont({
  src: "./assets/fonts/Doto/Doto-VariableFont_ROND,wght.ttf",
  variable: "--font-doto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Karthikeya | Home",
    template: "Karthikeya | %s",
  },
  description: "Portfolio of Bala Karthikeya, Full Stack & AI Developer",
  icons: {
    icon: logo.src,
    shortcut: logo.src,
    apple: logo.src,
  },
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
      <body className={`${doto.variable} antialiased min-h-screen flex flex-col cursor-none`}>
        <Cursor />
        <Suspense fallback={null}>
          <SearchKeywordHighlighter />
        </Suspense>
        <div className="flex-1 w-full relative z-10 flex flex-col">
          {children}
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
