import type { Metadata } from "next";
import Hero from "./components/Hero";
import HomeBackground from "./components/HomeBackground";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="relative flex-1 flex flex-col justify-center overflow-hidden">
      <HomeBackground />
      <div className="relative z-10">
        <Hero />
      </div>
    </main>
  );
}
