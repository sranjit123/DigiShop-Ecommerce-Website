export default function Services() {
  const perks = [
    { id: 1, icon: "🚚", title: "Instant Dispatch", desc: "Priority automated routing globally." },
    { id: 2, icon: "🔒", title: "Quantum Security", desc: "Next-gen end-to-end encrypted checkouts." },
    { id: 3, icon: "🔄", title: "Zero Friction Returns", desc: "30-day smart contract automated refunds." },
    { id: 4, icon: "⚡", title: "Hyper Support", desc: "Instant AI diagnostics active 24/7." }
  ];

  return (
    <section id="services" className="py-20 border-b border-gray-800 bg-[#040C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk) => (
            <div key={perk.id} className="relative group overflow-hidden bg-gradient-to-br from-[#0B1A30] to-[#040C18] p-6 rounded-2xl border border-gray-800 transition-all hover:border-cyan-500/50">
              {/* Subtle light orb glow effect on card hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity blur-md" />
              <div className="text-3xl mb-4 p-3 bg-[#071424] rounded-xl w-fit border border-gray-800">{perk.icon}</div>
              <h3 className="font-bold text-white text-lg tracking-tight">{perk.title}</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}