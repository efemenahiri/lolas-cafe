
import React, { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X, Phone } from 'lucide-react';
import { CAFE_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#FFFDF9]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-[#5C4033] p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Coffee className="text-white w-5 h-5" />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight ${
            isScrolled ? 'text-[#2D241E]' : 'text-[#2D241E]'
          }`}>
            Lola’s <span className="text-[#8B5E3C]">Café</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Menu', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-widest text-[#5C4033] hover:text-[#8B5E3C] transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 bg-[#5C4033] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#3D2B22] transition-all shadow-md active:scale-95"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#2D241E]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFFDF9] border-t border-[#F5E6D3] md:hidden py-6 px-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top duration-300">
          {['Menu', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-[#5C4033]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center justify-center gap-2 bg-[#5C4033] text-white py-4 rounded-xl font-bold"
          >
            <Phone size={18} />
            {CAFE_INFO.phone}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
