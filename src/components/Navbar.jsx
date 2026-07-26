import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { 
  Map, 
  Sparkles, 
  HelpCircle, 
  Layers, 
  Compass, 
  BookOpen, 
  Download, 
  Trophy,
  Menu,
  X,
  CheckCircle2
} from 'lucide-react';
import { MODULES } from '../data/nepaliData';

export const Navbar = () => {
  const { currentView, setCurrentView, score, completedItems } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Calculate total items across all modules
  const totalItems = MODULES.reduce((acc, m) => acc + m.items.length, 0);
  const progressPercent = Math.round((completedItems.length / (totalItems || 1)) * 100);

  const navItems = [
    { id: 'roadmap', label: 'To-Do Path', icon: Map },
    { id: 'survival', label: 'Tourist Kit', icon: Compass },
    { id: 'flashcards', label: 'Flashcards', icon: Layers },
    { id: 'quiz', label: 'Speed Quiz', icon: HelpCircle },
    { id: 'sentence', label: 'Sentence SOV', icon: Sparkles },
    { id: 'grammar', label: 'Grammar', icon: BookOpen },
    { id: 'hosting', label: 'Install / Host', icon: Download },
  ];

  return (
    <header className="sticky top-0 z-40 glass-nav">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setCurrentView('roadmap')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-crimson-600 via-amber-500 to-prayerBlue-500 p-0.5 shadow-lg shadow-crimson-600/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-black text-amber-400 text-xl font-nepali">
              ने
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-amber-400 via-rose-400 to-teal-400 bg-clip-text text-transparent font-sans">
                MeroNepali
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-crimson-600/30 text-crimson-300 border border-crimson-500/30">
                🇳🇵 Trilingual
              </span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1">
              <span>Nepali</span> • <span>English</span> • <span className="text-emerald-400 font-medium">മലയാളം</span>
            </p>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-darkCard/80 p-1.5 rounded-2xl border border-white/5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  active 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-darkBg shadow-md shadow-amber-500/20' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-darkBg' : 'text-amber-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Score & Progress Badge */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
              <Trophy className="w-3.5 h-3.5" />
              <span>{score} XP</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>{completedItems.length}/{totalItems} ({progressPercent}%)</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-darkCard border border-white/10 text-slate-200 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Progress Bar under Navbar */}
      <div className="w-full bg-slate-900/60 h-1 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-crimson-500 via-amber-400 to-emerald-400 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0d1322] px-4 py-3 space-y-2">
          <div className="flex items-center justify-between px-2 py-1 mb-2 bg-darkCard rounded-xl border border-white/5 text-xs">
            <span className="text-slate-400">Total Progress:</span>
            <span className="font-bold text-amber-400">{completedItems.length} / {totalItems} completed ({score} XP)</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    active 
                      ? 'bg-amber-500 text-darkBg font-bold shadow-sm' 
                      : 'bg-darkCard text-slate-200 border border-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-darkBg' : 'text-amber-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
