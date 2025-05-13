import About from "./components/About";
import Courses from "./components/Courses";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 gap-16">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
