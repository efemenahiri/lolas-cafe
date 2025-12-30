
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FFFDF9] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400" 
                className="rounded-2xl h-80 w-full object-cover shadow-lg translate-y-8"
                alt="Cafe Interior"
              />
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400" 
                className="rounded-2xl h-80 w-full object-cover shadow-lg"
                alt="Coffee Pour"
              />
            </div>
            {/* Floating accent badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#8B5E3C] text-white p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-2xl rotate-12">
              <span className="text-xs font-bold uppercase tracking-widest">Since</span>
              <span className="text-3xl font-serif font-bold">2024</span>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#8B5E3C] mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#2D241E] leading-tight mb-8">
              A Warm Sanctuary in the Heart of Abraka.
            </h3>
            <p className="text-lg text-[#5C4033]/80 leading-relaxed mb-6 italic">
              "Lola's started with a simple dream: to create a space where every student, worker, and friend feels at home over a perfect cup of coffee."
            </p>
            <div className="space-y-6 text-[#5C4033]/70">
              <p>
                Nestled in the vibrant town of Abraka, Lola’s Café is more than just a coffee shop. It's a brand debut built on quality, community, and the beauty of slow moments.
              </p>
              <p>
                From our locally-inspired smoothies to our premium espresso blends, every detail is crafted to offer an Instagram-worthy aesthetic without compromising on the depth of flavor.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://picsum.photos/seed/lola/100/100" alt="Lola" />
              </div>
              <div>
                <p className="font-bold text-[#2D241E]">Lola</p>
                <p className="text-sm text-[#8B5E3C]">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
