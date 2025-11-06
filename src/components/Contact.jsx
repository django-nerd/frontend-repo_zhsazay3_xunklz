import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I\'ll get back to you shortly.');
  };

  return (
    <section id="contact" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Let\'s collaborate</h2>
            <p className="text-white/70 mt-3 max-w-xl">Open to freelance, full-time, and collaboration opportunities. Share a bit about your project and I\'ll respond within a day.</p>
            {status && <p className="mt-6 text-cyan-300">{status}</p>}
          </div>
          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Name</label>
              <input required type="text" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input required type="email" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Message</label>
              <textarea required rows="4" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <button type="submit" className="rounded-md bg-cyan-400 text-black font-semibold px-4 py-2 hover:bg-cyan-300 transition-colors">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
