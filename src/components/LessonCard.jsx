import React from 'react';
import { Volume2, CheckCircle, Circle, Star, Lightbulb } from 'lucide-react';
import { playAudio } from '../utils/tts';
import { useProgress } from '../context/ProgressContext';

export const LessonCard = ({ item }) => {
  const { completedItems, starredItems, toggleComplete, toggleStar } = useProgress();

  const isCompleted = completedItems.includes(item.id);
  const isStarred = starredItems.includes(item.id);

  const handleSpeak = (e) => {
    e.stopPropagation();
    // Play Nepali Devanagari phrase
    playAudio(item.nepali, 'ne');
  };

  return (
    <div 
      className={`relative p-4 md:p-5 rounded-2xl transition-all duration-200 glass-card-interactive ${
        isCompleted 
          ? 'bg-emerald-950/20 border-emerald-500/30' 
          : 'bg-darkCard/90 border-white/10'
      }`}
    >
      {/* Top Header: Checkbox + Action Buttons */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <button
          onClick={() => toggleComplete(item.id)}
          className={`flex items-center gap-2 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
            isCompleted 
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
              : 'bg-white/5 text-slate-400 hover:text-slate-200 border border-white/5'
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
              <span>Learned</span>
            </>
          ) : (
            <>
              <Circle className="w-4 h-4 text-slate-500" />
              <span>To-Do</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-1.5">
          {/* Audio Button */}
          <button
            onClick={handleSpeak}
            className="p-2 rounded-xl bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-darkBg border border-amber-500/20 transition-all flex items-center gap-1"
            title="Listen to Nepali Audio"
          >
            <Volume2 className="w-4 h-4" />
            <span className="text-[11px] font-bold hidden sm:inline">Listen</span>
          </button>

          {/* Bookmark Button */}
          <button
            onClick={() => toggleStar(item.id)}
            className={`p-2 rounded-xl border transition-all ${
              isStarred 
                ? 'bg-amber-400/20 text-amber-300 border-amber-400/40' 
                : 'bg-white/5 text-slate-500 hover:text-slate-300 border-white/5'
            }`}
            title="Bookmark phrase"
          >
            <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400 text-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Trilingual Content Grid */}
      <div className="space-y-3">
        {/* 1. Nepali Section */}
        <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
          <div className="flex items-baseline justify-between">
            <span className="text-[10px] uppercase font-bold tracking-wider text-crimson-400">Nepali (नेपाली)</span>
            <span className="text-xs font-semibold text-amber-400 tracking-wide font-mono">{item.roman}</span>
          </div>
          <p className="text-2xl font-bold text-amber-300 font-nepali mt-1 tracking-wide">
            {item.nepali}
          </p>
        </div>

        {/* 2. English & Malayalam Side-by-Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* English */}
          <div className="bg-slate-900/40 p-2.5 rounded-xl border border-white/5">
            <span className="text-[10px] uppercase font-bold text-slate-400">English</span>
            <p className="text-xs font-medium text-slate-200 mt-0.5">{item.english}</p>
          </div>

          {/* Malayalam */}
          <div className="bg-slate-900/40 p-2.5 rounded-xl border border-emerald-500/20">
            <div className="flex items-baseline justify-between">
              <span className="text-[10px] uppercase font-bold text-emerald-400">Malayalam (മലയാളം)</span>
              <span className="text-[11px] text-slate-400 font-mono">{item.malayalamRoman}</span>
            </div>
            <p className="text-sm font-semibold text-emerald-300 font-malayalam mt-0.5">{item.malayalam}</p>
          </div>
        </div>

        {/* 3. Cultural & Linguistic Tip (SOV Match) */}
        {item.tip && (
          <div className="flex items-start gap-2 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 text-amber-200/90 text-[11px]">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{item.tip}</p>
          </div>
        )}
      </div>
    </div>
  );
};
