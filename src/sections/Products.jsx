

// Simulated database array of e-commerce products
const PRODUCTS = [
  { id: 1, name: "Premium Wireless Headphones", price: "Rs. 8,500", icon: "", tag: "Best Seller" },
  { id: 2, name: "Minimalist Leather Wallet", price: "Rs. 3,200", icon: "", tag: "New" },
  { id: 3, name: "Ergonomic Mechanical Keyboard", price: "Rs. 12,000", icon: "", tag: "Sale" },
  { id: 4, name: "Smart Fitness Watch v2", price: "Rs. 15,500", icon: "", tag: "Top Rated" },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">Trending Products</h2>
          <p className="mt-4 text-gray-500">Our customer favorites, inspected carefully for premium quality craftsmanship.</p>
        </div>

        {/* Dynamic Responsive Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative border border-gray-100 rounded-2xl bg-[#eae2d6] p-5 flex flex-col justify-between hover:shadow-xl transition-all hover:-translate-y-1">
              <div>
                {/* Badge Tag */}
                <span className="absolute top-4 left-4 bg-gray-900 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
                  {product.tag}
                </span>
                {/* Image Placeholder Frame */}
                <div className="w-full aspect-square bg-gray-50 rounded-xl flex items-center justify-center text-5xl mb-6 group-hover:scale-105 transition-transform">
                  {product.icon}
                </div>
                {/* Text Details */}
                <h3 className="font-bold text-gray-900 text-base leading-tight group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
              </div>
              <div className="mt-4">
                <div className="text-lg font-extrabold text-gray-900 mb-3">{product.price}</div>
                <button className="w-full bg-gray-50 text-black font-semibold py-2.5 px-4 rounded-xl relative transition-all duration-300 hover:bg-[#fffbf3] hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}