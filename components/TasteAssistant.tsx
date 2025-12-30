
import React, { useState } from 'react';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { getTasteRecommendation } from '../services/geminiService';

const TasteAssistant: React.FC = () => {
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState<{
    recommendation: string;
    reasoning: string;
    pairing: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;
    setLoading(true);
    const result = await getTasteRecommendation(mood);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5E6D3]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-[#FFFDF9] rounded-[3rem] border border-[#F5E6D3] p-8 md:p-16 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="bg-[#8B5E3C] p-3 rounded-2xl text-white mb-6 animate-pulse">
              <Sparkles size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2D241E] mb-4">
              Lola's AI Taste Assistant
            </h2>
            <p className="text-[#5C4033]/60 max-w-lg">
              Not sure what to order? Tell us how you're feeling today, and our AI will curate the perfect treat for you.
            </p>
          </div>

          <form onSubmit={handleAsk} className="flex flex-col sm:flex-row gap-4 mb-10">
            <input 
              type="text" 
              placeholder="e.g., I'm feeling stressed and need a pick-me-up" 
              className="flex-grow px-6 py-4 rounded-2xl bg-white border border-[#E8DCCF] focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] text-[#2D241E]"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              disabled={loading}
            />
            <button 
              type="submit"
              disabled={loading || !mood.trim()}
              className="bg-[#5C4033] text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#3D2B22] transition-all shadow-md disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
              Recommend
            </button>
          </form>

          {recommendation && !loading && (
            <div className="bg-white p-8 rounded-3xl border border-[#F5E6D3] animate-in zoom-in duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-grow">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#8B5E3C]">Lola Suggests</span>
                  <h4 className="text-2xl font-bold text-[#2D241E] mt-1 mb-3">{recommendation.recommendation}</h4>
                  <p className="text-[#5C4033]/80 leading-relaxed mb-4">{recommendation.reasoning}</p>
                  <div className="p-4 rounded-xl bg-[#F5E6D3]/30 border-l-4 border-[#8B5E3C]">
                    <p className="text-sm font-bold text-[#5C4033]">Perfect Pairing:</p>
                    <p className="text-[#5C4033]/70 italic">{recommendation.pairing}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TasteAssistant;
