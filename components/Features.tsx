
import React from 'react';
import { Wifi, Users, Star, Camera } from 'lucide-react';

const Features: React.FC = () => {
  const items = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Remote-Work Ready",
      desc: "High-speed fiber internet and plenty of power outlets for your productive hours."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Hangout Hub",
      desc: "Comfortable seating designed for meaningful conversations with friends and family."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Quality",
      desc: "We source our beans from the finest harvests, roasted to perfection."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Aesthetic Vibe",
      desc: "Every corner is designed to be the perfect backdrop for your social media."
    }
  ];

  return (
    <section className="py-24 bg-[#5C4033]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="text-white text-center flex flex-col items-center group">
              <div className="mb-6 p-4 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-all group-hover:scale-110">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
