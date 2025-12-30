
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import TasteAssistant from './components/TasteAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Soft scrolling effect for content */}
        <div className="relative z-20">
          <About />
          <Features />
          <Menu />
          
          {/* AI Feature Callout */}
          <TasteAssistant />
          
          <div className="bg-[#FFFDF9] py-24 text-center">
            <div className="container mx-auto px-6">
              <span className="font-accent text-4xl text-[#8B5E3C] block mb-4">Ready to unwind?</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D241E] mb-10">
                Take a Break. Come to Lola's.
              </h2>
              <div className="flex justify-center gap-4">
                 <a href="#contact" className="px-10 py-4 bg-[#5C4033] text-white rounded-xl font-bold shadow-xl hover:bg-[#3D2B22] transition-all">
                   Get Directions
                 </a>
              </div>
            </div>
          </div>
          
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
