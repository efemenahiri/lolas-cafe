
import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';
import { CAFE_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#FFFDF9]">
      <div className="container mx-auto px-6">
        <div className="bg-[#2D241E] rounded-[3rem] overflow-hidden text-white">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20">
              <h2 className="text-4xl font-serif font-bold mb-8">Visit Us in Abraka</h2>
              <p className="text-white/60 mb-12 max-w-md">
                We're located in the heart of Abraka, a perfect oasis for students and locals alike. Come by for the coffee, stay for the vibes.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl"><MapPin className="text-[#8B5E3C]" /></div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-white/60">{CAFE_INFO.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl"><Clock className="text-[#8B5E3C]" /></div>
                  <div>
                    <h4 className="font-bold">Opening Hours</h4>
                    <p className="text-white/60">{CAFE_INFO.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl"><Phone className="text-[#8B5E3C]" /></div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <a href={`tel:${CAFE_INFO.phone}`} className="text-white/60 hover:text-white transition-colors">{CAFE_INFO.phone}</a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10 flex gap-6">
                <a href="#" className="p-4 rounded-full bg-white/5 hover:bg-[#8B5E3C] transition-all"><Instagram /></a>
                <a href="#" className="p-4 rounded-full bg-white/5 hover:bg-[#8B5E3C] transition-all"><Mail /></a>
              </div>
            </div>

            <div className="lg:w-1/2 relative h-96 lg:h-auto min-h-[400px]">
              {/* Styled Mock Map */}
              <div className="absolute inset-0 bg-[#3D2B22] flex items-center justify-center">
                 <div className="text-center p-12">
                   <div className="inline-block p-6 bg-[#8B5E3C] rounded-full shadow-2xl animate-bounce mb-6">
                     <MapPin size={48} className="text-white" />
                   </div>
                   <h3 className="text-2xl font-serif font-bold">Lola's Café — Abraka</h3>
                   <p className="text-white/40 mt-2">Find us near the campus main gate</p>
                   <button className="mt-8 px-10 py-4 bg-white text-[#2D241E] rounded-xl font-bold hover:bg-[#F5E6D3] transition-all">
                      Get Directions
                   </button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
