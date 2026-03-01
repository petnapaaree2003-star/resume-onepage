import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
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