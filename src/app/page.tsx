import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <br />
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
