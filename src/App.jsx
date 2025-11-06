import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="bg-[#05060a] text-white/60 text-sm py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Data Analyst Portfolio</p>
          <p>Built with React, Tailwind, and an interactive 3D hero.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
