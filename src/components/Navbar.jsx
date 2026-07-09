

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="text-xl font-black tracking-tight text-gray-900">
          Digi<span className="text-blue-600">SHOP</span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-blue-600">Home</a>
          <a href="#products" className="hover:text-blue-600 transition-colors">Shop All</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Categories</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Deals</a>
        </nav>

        {/* Icons Area */}
        <div className="flex items-center gap-4 text-gray-700">
          <button className="p-1 hover:text-blue-600 relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}