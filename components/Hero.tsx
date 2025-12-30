
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center zoom-animation"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501339819358-683e3373c94a?auto=format&fit=crop&q=80&w=1920')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF9]/90 via-[#FFFDF9]/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 pb-32 md:pb-0">
        <div className="max-w-2xl">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#F5E6D3] text-[#8B5E3C] text-sm font-bold tracking-widest uppercase">
            EST. 2024 • ABRAKA, DELTA
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#2D241E] leading-tight mb-6">
            Your Everyday <span className="italic text-[#8B5E3C]">Coffee</span> & Comfort Spot.
          </h1>
          <p className="text-lg md:text-xl text-[#5C4033]/80 mb-10 leading-relaxed max-w-lg">
            Experience the perfect blend of premium signature drinks, gourmet meals, and a space designed for moments that matter. Great drinks. Great food. Great moments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="px-8 py-4 bg-[#5C4033] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#3D2B22] transition-all group shadow-lg"
            >
              View Our Menu
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-[#5C4033] text-[#5C4033] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#5C4033] hover:text-white transition-all"
            >
              Visit Us
            </a>
          </div>
        </div>
      </div>

      {/* Centered Scroll Indicator */}
      <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-2 text-[#5C4033]/50 animate-bounce pointer-events-none z-10">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-center block w-full px-4">
          Scroll to discover
        </span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};

export default Hero;
