import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Sales Performance Dashboard',
    desc: 'Built an end-to-end Power BI dashboard tracking revenue, conversion, and churn across segments.',
    tags: ['Power BI', 'DAX', 'ETL'],
    link: '#',
  },
  {
    title: 'Customer Churn Analysis',
    desc: 'SQL + Python workflow identifying churn drivers and segment risk with logistic regression.',
    tags: ['Python', 'Pandas', 'SQL'],
    link: '#',
  },
  {
    title: 'Marketing Attribution',
    desc: 'Multi-touch attribution model evaluating channel lift and budget efficiency.',
    tags: ['Modeling', 'Statistics', 'Visualization'],
    link: '#',
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  return (
    <section id="projects" className="relative bg-[#05060a] text-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-white/70 mt-2 max-w-2xl">A selection of analyses and dashboards that drove measurable outcomes.</p>
          </div>
          <div className="hidden md:flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 w-8 rounded-full transition-colors ${active === i ? 'bg-cyan-400' : 'bg-white/20'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors block">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-white/70 mt-2 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
