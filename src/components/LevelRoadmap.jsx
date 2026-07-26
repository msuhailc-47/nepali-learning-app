import React, { useState } from 'react';
import { LEVELS, MODULES } from '../data/nepaliData';
import { LessonCard } from './LessonCard';
import { useProgress } from '../context/ProgressContext';
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Search, 
  Filter, 
  Sparkles,
  BookOpen,
  Trophy
} from 'lucide-react';

export const LevelRoadmap = () => {
  const { completedItems, starredItems, activeModuleId, setActiveModuleId } = useProgress();
  const [selectedLevelId, setSelectedLevelId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'todo' | 'completed' | 'starred'
  const [expandedModules, setExpandedModules] = useState({ mod1: true, mod2: true });

  const toggleModuleExpand = (modId) => {
    setExpandedModules(prev => ({
      ...prev,
      [modId]: !prev[modId]
    }));
  };

  // Filter modules based on level selection
  const filteredModules = MODULES.filter(mod => {
    if (selectedLevelId !== 'all' && mod.levelId !== selectedLevelId) return false;
    return true;
  });

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-crimson-700 via-darkCard to-darkCard p-6 md:p-8 border border-white/10 shadow-2xl">
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bit-by-Bit Micro-Learning Path</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Learn Nepali for Nepal Travel
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Structured step-by-step to-do list model. Nepali Devanagari + Romanized phonetics paired directly with English & Malayalam meanings.
          </p>

          {/* Quick Level Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-5">
            <button
              onClick={() => setSelectedLevelId('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedLevelId === 'all'
                  ? 'bg-amber-500 text-darkBg shadow-md shadow-amber-500/20 font-bold'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              All Levels
            </button>
            {LEVELS.map(lvl => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevelId(lvl.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedLevelId === lvl.id
                    ? 'bg-amber-500 text-darkBg shadow-md shadow-amber-500/20 font-bold'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                <span>{lvl.badge}</span>
                <span>L{lvl.number}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Controls Bar: Search & Filter Tabs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-darkCard p-3 rounded-2xl border border-white/5">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Nepali, English or Malayalam words..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/80 border border-white/10 text-xs rounded-xl pl-9 pr-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
          />
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-white/5">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              filterMode === 'all' ? 'bg-amber-500 text-darkBg' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterMode('todo')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              filterMode === 'todo' ? 'bg-amber-500 text-darkBg' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            To-Do
          </button>
          <button
            onClick={() => setFilterMode('completed')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              filterMode === 'completed' ? 'bg-amber-500 text-darkBg' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Learned
          </button>
          <button
            onClick={() => setFilterMode('starred')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              filterMode === 'starred' ? 'bg-amber-500 text-darkBg' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Starred ({starredItems.length})
          </button>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-5">
        {filteredModules.map((module) => {
          // Filter items inside module by search & status
          const filteredItems = module.items.filter(item => {
            if (filterMode === 'todo' && completedItems.includes(item.id)) return false;
            if (filterMode === 'completed' && !completedItems.includes(item.id)) return false;
            if (filterMode === 'starred' && !starredItems.includes(item.id)) return false;

            if (searchQuery.trim() !== '') {
              const q = searchQuery.toLowerCase();
              return (
                item.nepali.toLowerCase().includes(q) ||
                item.roman.toLowerCase().includes(q) ||
                item.english.toLowerCase().includes(q) ||
                item.malayalam.toLowerCase().includes(q) ||
                item.malayalamRoman.toLowerCase().includes(q)
              );
            }
            return true;
          });

          const completedCount = module.items.filter(i => completedItems.includes(i.id)).length;
          const isFullyCompleted = completedCount === module.items.length && module.items.length > 0;
          const isExpanded = expandedModules[module.id] ?? true;

          if (filteredItems.length === 0 && searchQuery.trim() !== '') return null;

          return (
            <div 
              key={module.id} 
              className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-lg"
            >
              {/* Module Header Bar */}
              <div 
                onClick={() => toggleModuleExpand(module.id)}
                className="flex items-center justify-between p-4 md:p-5 bg-gradient-to-r from-darkCard via-darkCard to-slate-900/90 cursor-pointer hover:bg-slate-800/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                    isFullyCompleted ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {isFullyCompleted ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <BookOpen className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-100 flex items-center gap-2">
                      <span>{module.title}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{module.summary}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <span className="text-xs font-bold text-amber-400">{completedCount}/{module.items.length}</span>
                    <p className="text-[10px] text-slate-400">completed</p>
                  </div>
                  <button className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Module Phrase Cards Grid */}
              {isExpanded && (
                <div className="p-4 bg-slate-950/40 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredItems.map(item => (
                    <LessonCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
