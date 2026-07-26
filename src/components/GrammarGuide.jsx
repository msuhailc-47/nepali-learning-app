import React from 'react';
import { GRAMMAR_RULES } from '../data/grammarRules';
import { BookOpen, Lightbulb, ArrowRightLeft, Sparkles } from 'lucide-react';

export const GrammarGuide = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-16">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Nepali - Malayalam Grammar Bridge</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Why Malayalam Speakers Learn Nepali Faster</h2>
        <p className="text-xs text-slate-400">
          Compare SOV word order, honorific levels, and postposition suffixes side-by-side.
        </p>
      </div>

      {/* Grammar Cards */}
      <div className="space-y-5">
        {GRAMMAR_RULES.map((rule) => (
          <div 
            key={rule.id}
            className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl"
          >
            <h3 className="text-lg font-extrabold text-amber-300 flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-amber-400" />
              <span>{rule.title}</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">{rule.summary}</p>

            {/* Examples Comparison Grid */}
            <div className="space-y-2 text-xs">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
                <span className="font-bold text-slate-400">English Structure:</span>
                <p className="text-slate-200 mt-0.5">{rule.englishExample}</p>
              </div>

              <div className="bg-amber-950/20 p-3 rounded-xl border border-amber-500/30">
                <span className="font-bold text-amber-400">Nepali (SOV):</span>
                <p className="text-amber-200 font-nepali text-sm font-semibold mt-0.5">{rule.nepaliExample}</p>
              </div>

              <div className="bg-emerald-950/20 p-3 rounded-xl border border-emerald-500/30">
                <span className="font-bold text-emerald-400">Malayalam (SOV):</span>
                <p className="text-emerald-200 font-malayalam text-sm font-semibold mt-0.5">{rule.malayalamExample}</p>
              </div>
            </div>

            {/* Insight */}
            <div className="bg-blue-500/10 p-3 rounded-xl border border-blue-500/20 text-blue-200 text-xs flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">{rule.insight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
