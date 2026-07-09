import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col antialiased">
      {/* 1. Global Navigation Bar */}
      <Navbar />
      
      {/* 2. Main Page Sections Content Workspace */}
      <main className="flex-grow">
        <Hero />
        <Products />
      </main>

      {/* 3. Global Footer Component */}
      <Footer />
    </div>
  );
}

export default App;