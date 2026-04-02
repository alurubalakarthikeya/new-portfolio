import type { Metadata } from "next";
import About from "../components/About";

export const metadata: Metadata = {
    title: "About",
};

export default function AboutPage() {
    return (
        <main className="flex-1 flex flex-col pt-32 pb-40 min-h-screen">
            <About />
        </main>
    );
}
