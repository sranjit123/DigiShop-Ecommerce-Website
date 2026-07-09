
export default function Hero() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left flex flex-col gap-6">
          <span className="inline-flex self-center lg:self-start px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            🔥 Limited Time: Free Shipping Included
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-none">
            Upgrade Your <span className="text-blue-600">Everyday Gear.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            Discover our premium curated collective of minimalist lifestyle essentials. Engineered beautifully for style, durability, and daily performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-2">
            <a href="#products" className="bg-gray-900 text-white text-center px-8 py-3.5 rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-md">
              Shop New Arrivals
            </a>
            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              Explore Story
            </button>
          </div>
        </div>

        {/* Right Visual Frame */}
        <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-2xl border border-blue-200/40 flex items-center justify-center p-8 relative shadow-xs">
          <div className="text-center">
            <div className="text-5xl mb-3"></div>
            <div className="font-bold text-gray-800">Ultima Headphones</div>
            <div className="text-sm text-blue-600 font-semibold mt-1">Rs. 8,500</div>
          </div>
        </div>

      </div>
    </section>
  );
}