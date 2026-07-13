import Home from "./Home";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Test from "./sections/Test";

import Contact from "./sections/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animations will last 1 second
      once: false,     //  Animates every single time the element enters the screen
      mirror: true,    // Animation happens only once while scrolling down
      easing: 'ease-in-out',
      anchorPlacement:"top-center",
    });
  }, []);
  return (
    <Router>
      <div className="overflow-x-hidden flex flex-col min-h-screen">
        <Navbar />
        {/* <Test/> */}
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* Home Route containing everything except the Contact Form */}
            <Route path="/" element={<Home/>} />
            
            {/* Separate Contact Page Route */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;


