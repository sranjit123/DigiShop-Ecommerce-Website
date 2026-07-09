

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm">
        <div className="font-black text-white tracking-tight text-lg">DigiShop</div>
        <div className="flex gap-8 font-medium">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-white cursor-pointer transition-colors">Support</span>
        </div>
        <div className="text-xs text-gray-500">&copy; {new Date().getFullYear()} DigiShop Inc. All rights reserved.</div>
      </div>
    </footer>
  );
}