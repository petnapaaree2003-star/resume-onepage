import { useTranslation } from "react-i18next";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const { i18n } = useTranslation();

  const fontClass =
    i18n.language === "th"
      ? "font-['THSarabunNew']"
      : "font-['Inter']";

  return (
    <div className={`${fontClass} bg-gray-100 text-gray-900 min-h-screen`}>
      <Navbar />

      <main className="pb-16">
        <div className="mx-auto bg-white shadow-md">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;