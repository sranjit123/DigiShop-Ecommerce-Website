import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Products from './sections/Products';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#040C18] text-white flex flex-col antialiased">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <Products />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;


