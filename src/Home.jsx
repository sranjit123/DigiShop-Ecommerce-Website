import React from 'react'
import Navbar from "./components/Navbar";
import Hero from './sections/Hero';
import Services from './sections/Services';
import Products from './sections/Products';
import About from './sections/About';
import Footer from './components/Footer';

const Home= () => {
  return (
    <div>
        <Hero />
        <Services />
        <Products />
        <About />
    </div>
  );
};

export default Home;