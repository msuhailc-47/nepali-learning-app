import React from 'react';
import { SURVIVAL_KIT } from '../data/nepaliData';
import { playAudio } from '../utils/tts';
import { Volume2, Compass, ShieldAlert, HeartHandshake, PhoneCall } from 'lucide-react';

export const SurvivalKit = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-16">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-crimson-600 to-amber-600 p-6 md:p-8 text-white shadow-2xl">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-amber-200" />
            <span>Nepal Tourist Survival Kit</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black">Essential Survival Phrases</h2>
          <p className="text-xs md:text-sm text-amber-100 leading-relaxed">
            Keep these quick audio phrases handy while traveling in Kathmandu, Pokhara, and trekking trails!
          </p>
        </div>
      </div>

      {/* Emergency Numbers Card */}
      <div className="glass-card rounded-2xl p-4 border border-crimson-500/30 bg-crimson-950/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-crimson-600/30 text-crimson-300 flex items-center justify-center font-bold">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Nepal Tourist Emergency Numbers</h4>
            <p className="text-[11px] text-slate-300">Police: 100 | Tourist Police: +977-1-4247041</p>
          </div>
        </div>
        <a 
          href="tel:100" 
          className="px-3 py-1.5 rounded-xl bg-crimson-600 text-white text-xs font-bold flex items-center gap-1 hover:bg-crimson-500 transition-all"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Call 100</span>
        </a>
      </div>

      {/* Phrase Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SURVIVAL_KIT.map((item, idx) => (
          <div 
            key={idx}
            className="glass-card p-4 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold text-amber-400">Survival Phrase #{idx + 1}</span>
                <button
                  onClick={() => playAudio(item.nepali, 'ne')}
                  className="p-2 rounded-xl bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-darkBg transition-all flex items-center gap-1"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <p className="text-2xl font-bold text-amber-300 font-nepali">{item.nepali}</p>
              <p className="text-xs font-mono font-semibold text-slate-300">{item.roman}</p>
            </div>

            <div className="mt-3 pt-2 border-t border-white/5 space-y-1">
              <p className="text-xs text-slate-200 font-medium">🇬🇧 {item.english}</p>
              <p className="text-xs text-emerald-300 font-malayalam font-semibold">🇮🇳 {item.malayalam}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
