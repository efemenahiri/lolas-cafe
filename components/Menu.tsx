
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category'] | 'All'>('All');

  const categories: (MenuItem['category'] | 'All')[] = ['All', 'Coffee', 'Cold', 'Pastries', 'Snacks'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#8B5E3C] mb-4">Curated Flavors</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#2D241E]">The Lola's Selection</h3>
          <p className="mt-4 text-[#5C4033]/60 max-w-xl mx-auto">
            Each item is prepared with passion and the finest ingredients to ensure a premium taste every time.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat 
                  ? 'bg-[#5C4033] text-white border-[#5C4033] shadow-md' 
                  : 'bg-transparent text-[#5C4033] border-[#E8DCCF] hover:border-[#8B5E3C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#F5E6D3] transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <span className="text-sm font-bold text-[#5C4033]">{item.price}</span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#8B5E3C] mb-2 block">
                  {item.category}
                </span>
                <h4 className="text-xl font-bold text-[#2D241E] mb-2">{item.name}</h4>
                <p className="text-[#5C4033]/70 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <button className="w-full py-3 rounded-xl border border-[#E8DCCF] text-[#5C4033] text-sm font-bold hover:bg-[#5C4033] hover:text-white transition-all">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
