import About from "../components/About";
import Experience from "../components/InProgress";
import Education from "../components/Education";

export default function AboutPage() {
    return (
        <main className="flex-1 flex flex-col pt-32 pb-40 min-h-screen">
            <About />
            <Experience />
            <Education />
        </main>
    );
}
