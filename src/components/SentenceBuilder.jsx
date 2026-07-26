import React, { useState } from 'react';
import { playAudio } from '../utils/tts';
import { Sparkles, CheckCircle2, RotateCcw, Volume2, ArrowRight } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import confetti from 'canvas-confetti';

const SENTENCES = [
  {
    id: "s1",
    targetEnglish: "I eat rice.",
    targetMalayalam: "ഞാൻ ചോറ് കഴിക്കുന്നു.",
    correctNepaliWords: ["म", "भात", "खान्छु।"],
    romanWords: ["Ma", "Bhat", "Khanchhu."],
    availableWords: ["खान्छु।", "नेपाल", "म", "भात", "जाने"],
    tip: "Subject (म) + Object (भात) + Verb (खान्छु) = SOV structure matching Malayalam!"
  },
  {
    id: "s2",
    targetEnglish: "I am going to Nepal.",
    targetMalayalam: "ഞാൻ നേപ്പാളിലേക്ക് പോകുകയാണ്.",
    correctNepaliWords: ["म", "नेपाल", "जाँदैछु।"],
    romanWords: ["Ma", "Nepal", "Jaandaichhu."],
    availableWords: ["जाँदैछु।", "म", "पिउँछु", "नेपाल", "पानी"],
    tip: "Ma (Subject) + Nepal (Destination) + Jaandaichhu (Going)."
  },
  {
    id: "s3",
    targetEnglish: "I drink water.",
    targetMalayalam: "ഞാൻ വെള്ളം കുടിക്കുന്നു.",
    correctNepaliWords: ["म", "पानी", "पिउँछु।"],
    romanWords: ["Ma", "Paani", "Piunchhu."],
    availableWords: ["पानी", "म", "पिउँछु।", "भात", "खान्छु।"],
    tip: "Paani = Vellam (Water), Piunchhu = Kudikkunnu (Drink)."
  }
];

export const SentenceBuilder = () => {
  const { addScorePoints } = useProgress();
  const [currentSIndex, setCurrentSIndex] = useState(0);
  const [builtWords, setBuiltWords] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const currentSentence = SENTENCES[currentSIndex];

  const handleAddWord = (word) => {
    if (isSuccess) return;
    const updated = [...builtWords, word];
    setBuiltWords(updated);

    // Check if sentence matches
    if (updated.join(" ") === currentSentence.correctNepaliWords.join(" ")) {
      setIsSuccess(true);
      addScorePoints(25);
      playAudio(updated.join(" "), 'ne');
      confetti({ particleCount: 80, spread: 60 });
    }
  };

  const handleRemoveWord = (index) => {
    if (isSuccess) return;
    setBuiltWords(prev => prev.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setBuiltWords([]);
    setIsSuccess(false);
  };

  const handleNextSentence = () => {
    setBuiltWords([]);
    setIsSuccess(false);
    setCurrentSIndex(prev => (prev + 1) % SENTENCES.length);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6 pb-16">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SOV Sentence Constructor</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Nepali & Malayalam SOV Builder</h2>
        <p className="text-xs text-slate-400">
          Tap words to construct the Nepali sentence in Subject-Object-Verb order.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-2xl space-y-6">
        {/* Target Meaning Box */}
        <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/10 space-y-2">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400">English Target</span>
            <p className="text-base font-bold text-white">{currentSentence.targetEnglish}</p>
          </div>
          <div className="pt-2 border-t border-white/5">
            <span className="text-[10px] uppercase font-bold text-emerald-400">Malayalam Match (SOV)</span>
            <p className="text-base font-bold text-emerald-300 font-malayalam">{currentSentence.targetMalayalam}</p>
          </div>
        </div>

        {/* Drop Zone (Built Sentence) */}
        <div className="min-h-[90px] p-4 bg-slate-950/80 rounded-2xl border border-dashed border-amber-500/40 flex flex-wrap items-center gap-2">
          {builtWords.length === 0 ? (
            <span className="text-xs text-slate-500 italic mx-auto">
              Tap the word tiles below to assemble the sentence...
            </span>
          ) : (
            builtWords.map((word, idx) => (
              <button
                key={idx}
                onClick={() => handleRemoveWord(idx)}
                className="px-3.5 py-2 rounded-xl bg-amber-500 text-darkBg font-black font-nepali text-lg shadow-md hover:bg-amber-400 transition-all"
              >
                {word}
              </button>
            ))
          )}
        </div>

        {/* Available Words Pool */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Available Nepali Words:
          </span>
          <div className="flex flex-wrap gap-2">
            {currentSentence.availableWords.map((word, idx) => (
              <button
                key={idx}
                onClick={() => handleAddWord(word)}
                className="px-4 py-2.5 rounded-xl bg-darkCard border border-white/15 text-amber-300 font-nepali text-lg font-bold hover:border-amber-400 transition-all shadow-sm"
              >
                {word}
              </button>
            ))}
          </div>
        </div>

        {/* Success Alert & Tip */}
        {isSuccess && (
          <div className="bg-emerald-950/50 p-4 rounded-2xl border border-emerald-500/50 space-y-3">
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Perfect! Sentence Completed! (+25 XP)</span>
            </div>
            <p className="text-xs text-amber-200 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
              💡 {currentSentence.tip}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => playAudio(builtWords.join(" "), 'ne')}
                className="flex-1 py-2.5 rounded-xl bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 border border-amber-500/30"
              >
                <Volume2 className="w-4 h-4" />
                <span>Replay Audio</span>
              </button>
              <button
                onClick={handleNextSentence}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-darkBg font-extrabold text-xs flex items-center justify-center gap-1 shadow-md shadow-amber-500/20"
              >
                <span>Next Sentence</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Reset Button */}
        {!isSuccess && (
          <button
            onClick={handleReset}
            className="w-full py-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear Sentence</span>
          </button>
        )}
      </div>
    </div>
  );
};
