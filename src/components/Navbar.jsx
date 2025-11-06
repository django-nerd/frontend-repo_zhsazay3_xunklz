import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = 'text-sm md:text-base font-medium text-white/80 hover:text-white transition-colors';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/30 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="inline-flex items-center gap-2">
            <span className="h-8 w-8 rounded bg-gradient-to-tr from-blue-500 to-cyan-400" />
            <span className="text-white font-semibold tracking-tight">Data Analyst</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className={linkBase}>Home</a>
            <a href="#projects" className={linkBase}>Projects</a>
            <a href="#contact" className={linkBase}>Contact</a>
          </nav>
          <div className="md:hidden" />
        </div>
      </div>
    </header>
  );
}
