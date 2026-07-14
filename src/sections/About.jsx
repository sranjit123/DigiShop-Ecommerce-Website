export default function About() {
  return (
    <section id="about" className="py-24 bg-[#043f39] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Interactive Accent Visual Card */}
        <div className="relative p-px rounded-3xl bg-gray-800" data-aos="fade-right">
          <div className="bg-[#616450] rounded-[23px] p-8 aspect-square flex flex-col justify-center">
            <span className="text-4xl mb-6">👁️‍🗨️</span>
            <h3 className="text-3xl font-black text-white tracking-tight leading-tight">
              The Future of E-Commerce Is Already Here.
            </h3>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              We transcend classical market models to construct an environment prioritizing absolute minimalist product performance.
            </p>
          </div>
        </div>

        {/* Right Structured Narrative */}
        <div className="flex flex-col gap-6" data-aos="fade-left">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-450">
            OUR ECOSYSTEM
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            We operate beyond standard limitations.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            What started as a minimalist blueprint concept has evolved into a global ecosystem. By linking direct high-tier fabricators with our users, we completely eliminate retail premium inflation.
          </p>

          {/* Minimalist Metrics Counters */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-800 mt-2">
            <div>
              <div className="text-3xl font-extrabold text-white">10k+</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Ecosystem Nodes</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">99.4%</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Efficiency Match</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">0.02s</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Latency Delivery</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}