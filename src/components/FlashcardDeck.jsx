import React, { useState } from 'react';
import { MODULES } from '../data/nepaliData';
import { playAudio } from '../utils/tts';
import { Volume2, RotateCw, ChevronLeft, ChevronRight, Shuffle, Sparkles, CheckCircle2 } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

export const FlashcardDeck = () => {
  // Collect all items into a single deck
  const allItems = MODULES.flatMap(m => m.items);
  const [deck, setDeck] = useState(allItems);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { toggleComplete, completedItems, addScorePoints } = useProgress();

  const currentCard = deck[currentIndex] || allItems[0];
  const isLearned = completedItems.includes(currentCard.id);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + deck.length) % deck.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      playAudio(currentCard.nepali, 'ne');
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6 pb-16">
      {/* Top Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Trilingual Flashcards</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Flip & Master Nepali Words</h2>
        <p className="text-xs text-slate-400">
          Tap the card to reveal English & Malayalam meanings with audio.
        </p>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-between px-2">
        <span className="text-xs font-bold text-amber-400 bg-darkCard px-3 py-1.5 rounded-xl border border-white/10">
          Card {currentIndex + 1} of {deck.length}
        </span>
        <button
          onClick={handleShuffle}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-300 hover:text-white transition-all"
        >
          <Shuffle className="w-3.5 h-3.5 text-amber-400" />
          <span>Shuffle Deck</span>
        </button>
      </div>

      {/* Flip Card Container */}
      <div 
        onClick={handleFlip}
        className="w-full min-h-[340px] cursor-pointer relative group perspective"
      >
        <div 
          className={`w-full min-h-[340px] rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 border glass-card shadow-2xl relative ${
            isFlipped 
              ? 'bg-gradient-to-br from-darkCard via-slate-900 to-slate-950 border-amber-500/40 shadow-amber-500/10' 
              : 'bg-gradient-to-br from-darkCard via-slate-900 to-crimson-950/30 border-white/15'
          }`}
        >
          {/* Card Top Row */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
              {isFlipped ? 'Answer (Trilingual Meaning)' : 'Nepali Phrase'}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                playAudio(currentCard.nepali, 'ne');
              }}
              className="p-2 rounded-xl bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-darkBg transition-all flex items-center gap-1"
            >
              <Volume2 className="w-4 h-4" />
              <span className="text-[10px] font-bold">Audio</span>
            </button>
          </div>

          {/* Card Center Content */}
          <div className="my-auto py-6 text-center space-y-4">
            {!isFlipped ? (
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-amber-300 font-nepali tracking-wide leading-relaxed">
                  {currentCard.nepali}
                </p>
                <p className="text-lg font-mono font-semibold text-slate-300 mt-2">
                  {currentCard.roman}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full">
                  <RotateCw className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                  <span>Tap card to flip</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-left">
                {/* English */}
                <div className="bg-slate-900/80 p-3 rounded-2xl border border-white/5">
                  <span className="text-[10px] font-bold uppercase text-slate-400">English Meaning</span>
                  <p className="text-lg font-bold text-white mt-0.5">{currentCard.english}</p>
                </div>

                {/* Malayalam */}
                <div className="bg-emerald-950/30 p-3 rounded-2xl border border-emerald-500/30">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] font-bold uppercase text-emerald-400">Malayalam Meaning</span>
                    <span className="text-xs font-mono text-slate-400">{currentCard.malayalamRoman}</span>
                  </div>
                  <p className="text-xl font-bold text-emerald-300 font-malayalam mt-0.5">
                    {currentCard.malayalam}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Card Bottom Row */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            <span className="text-[11px] text-slate-500">
              Module: {currentCard.id}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleComplete(currentCard.id);
                addScorePoints(5);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isLearned 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isLearned ? 'Marked Learned' : 'Mark Learned'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          className="flex-1 py-3 px-4 rounded-2xl bg-darkCard border border-white/10 text-slate-200 hover:bg-slate-800 font-semibold flex items-center justify-center gap-2 transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-amber-400" />
          <span>Previous</span>
        </button>

        <button
          onClick={handleNext}
          className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-darkBg font-extrabold shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
        >
          <span>Next Card</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
