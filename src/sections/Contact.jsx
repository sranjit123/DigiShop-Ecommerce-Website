export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#040C18] border-t border-gray-800 relative">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fuchsia-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-white tracking-tight">Establish Connection</h2>
          <p className="mt-3 text-gray-400 text-sm">Have data inquiries or system feedback? Initialize a message thread.</p>
        </div>

        {/* Form Terminal Wrapper */}
        <form className="bg-[#0B1A30]/40 border border-gray-800 p-8 rounded-2xl text-left flex flex-col gap-6 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Identifier Name</label>
              <input type="text" className="w-full bg-[#040C18] border border-gray-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="Alex" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Network Routing Email</label>
              <input type="email" className="w-full bg-[#040C18] border border-gray-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="alex@network.com" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Message Payload</label>
            <textarea rows={4} className="w-full bg-[#040C18] border border-gray-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none" placeholder="Input string query details..."></textarea>
          </div>

          <button type="button" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl tracking-wide transition-all shadow-lg hover:shadow-cyan-500/20">
            Transmit Packet
          </button>
        </form>
      </div>
    </section>
  );
}
