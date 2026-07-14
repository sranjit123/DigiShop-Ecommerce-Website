import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#043f39] border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="text-xl font-black tracking-tight text-[#eeedeb]">
          Digi<span className="text-white">SHOP</span>
        </div>
{/* Desktop Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
  <Link 
  to="/" 
  className="relative px-4 py-2 text-white font-medium transition-all duration-300 rounded-xl hover:bg-[#fffbf3] hover:text-black hover:font-bold hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
>
  Home
</Link>

  <ScrollLink
    to="services"
    smooth={true}
    duration={500}
    className="relative px-4 py-2 text-white font-medium transition-all duration-300 rounded-xl hover:bg-[#fffbf3] hover:text-black hover:font-bold hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
  >
    Services
  </ScrollLink>

  <ScrollLink
    to="about"
    smooth={true}
    duration={500}
    className="relative px-4 py-2 text-white font-medium transition-all duration-300 rounded-xl hover:bg-[#fffbf3] hover:text-black hover:font-bold hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
  >
    About Us
  </ScrollLink>

  <Link to="/contact" className="relative px-4 py-2 text-white font-medium transition-all duration-300 rounded-xl hover:bg-[#fffbf3] hover:text-black hover:font-bold hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95">
    Contact
  </Link>
</nav>
        {/* Icons Area */}
        <div className="flex items-center gap-4 text-gray-700">
          <button className="relative px-4 py-2 text-white font-medium transition-all duration-300 rounded-xl hover:bg-[#fffbf3] hover:text-black hover:font-bold hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}