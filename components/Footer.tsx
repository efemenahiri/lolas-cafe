
import React from 'react';
import { Coffee } from 'lucide-react';
import { CAFE_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFDF9] py-20 border-t border-[#F5E6D3]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="bg-[#5C4033] p-1.5 rounded-lg">
                <Coffee className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-serif font-bold text-[#2D241E]">Lola’s <span className="text-[#8B5E3C]">Café</span></span>
            </div>
            <p className="text-[#5C4033]/60 max-w-xs leading-relaxed">
              Serving the finest coffee and moments in Abraka since 2024. Your comfort is our priority.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="font-bold text-[#2D241E]">Quick Contact</p>
            <a href={`tel:${CAFE_INFO.phone}`} className="text-[#5C4033]/70 hover:text-[#8B5E3C]">{CAFE_INFO.phone}</a>
            <p className="text-[#5C4033]/70">{CAFE_INFO.location}</p>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-[#F5E6D3] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[#5C4033]/40">
            &copy; 2024 Lola's Café. All Rights Reserved. Designed for Abraka.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs uppercase tracking-widest font-bold text-[#5C4033]/40 hover:text-[#8B5E3C] transition-colors">Privacy</a>
            <a href="#" className="text-xs uppercase tracking-widest font-bold text-[#5C4033]/40 hover:text-[#8B5E3C] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
