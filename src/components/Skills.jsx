import { BarChart3, Database, LineChart, Bot } from 'lucide-react';

const skills = [
  { icon: BarChart3, title: 'Data Visualization', desc: 'Interactive dashboards and compelling visuals with Power BI and Tableau.' },
  { icon: Database, title: 'Data Wrangling', desc: 'Cleaning, transforming, and modeling data with Python and SQL.' },
  { icon: LineChart, title: 'Analytics', desc: 'Exploratory analysis, A/B testing, and KPI tracking to inform decisions.' },
  { icon: Bot, title: 'Automation', desc: 'Repeatable pipelines and reporting with notebooks and scripts.' },
];

export default function Skills() {
  return (
    <section className="relative bg-gradient-to-b from-black to-[#05060a] text-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold">Core Skills</h2>
        <p className="text-white/70 mt-2 max-w-2xl">A toolkit focused on uncovering insights and communicating them clearly.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {skills.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-colors">
              <Icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="text-white/70 mt-2 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
