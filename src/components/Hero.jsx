import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve text readability but keep interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pt-28 pb-24 flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="text-cyan-300 font-semibold tracking-wider uppercase mb-3">Portfolio · Data Analyst</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Turning data into decisions</h1>
          <p className="mt-4 text-white/80 md:text-lg">I explore datasets, build dashboards, and translate complex patterns into clear business insights using Python, SQL, and BI tools.</p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="rounded-full bg-cyan-400 text-black font-semibold px-5 py-3 hover:bg-cyan-300 transition-colors">View Projects</a>
            <a href="#contact" className="rounded-full border border-white/30 px-5 py-3 hover:border-white transition-colors">Contact Me</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-white/70">
            <span>Python</span>
            <span>SQL</span>
            <span>Power BI</span>
            <span>Tableau</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
