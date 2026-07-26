import React from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { Navbar } from './components/Navbar';
import { LevelRoadmap } from './components/LevelRoadmap';
import { FlashcardDeck } from './components/FlashcardDeck';
import { QuizModal } from './components/QuizModal';
import { SentenceBuilder } from './components/SentenceBuilder';
import { SurvivalKit } from './components/SurvivalKit';
import { GrammarGuide } from './components/GrammarGuide';
import { HostingGuideModal } from './components/HostingGuideModal';
import { Compass, RotateCcw } from 'lucide-react';

const AppContent = () => {
  const { currentView, setCurrentView, resetProgress } = useProgress();

  const renderView = () => {
    switch (currentView) {
      case 'roadmap':
        return <LevelRoadmap />;
      case 'survival':
        return <SurvivalKit />;
      case 'flashcards':
        return <FlashcardDeck />;
      case 'quiz':
        return <QuizModal />;
      case 'sentence':
        return <SentenceBuilder />;
      case 'grammar':
        return <GrammarGuide />;
      case 'hosting':
        return <HostingGuideModal />;
      default:
        return <LevelRoadmap />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 font-sans selection:bg-crimson-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 pt-6">
        {renderView()}
      </main>

      {/* Quick Floating Survival Button for Mobile Travelers */}
      {currentView !== 'survival' && (
        <button
          onClick={() => setCurrentView('survival')}
          className="fixed bottom-5 right-5 z-40 p-3.5 rounded-full bg-gradient-to-r from-crimson-600 to-amber-500 text-white font-bold shadow-2xl shadow-crimson-600/40 hover:scale-110 active:scale-95 transition-all flex items-center gap-2 border border-white/20"
          title="Tourist Survival Kit"
        >
          <Compass className="w-5 h-5 animate-spin-slow" />
          <span className="text-xs hidden sm:inline">Tourist Survival Kit</span>
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 bg-slate-950/80 text-center text-xs text-slate-400 space-y-2">
        <div className="flex items-center justify-center gap-2">
          <span>🇳🇵 MeroNepali Trilingual Learning App</span>
          <span>•</span>
          <span>Nepali - English - Malayalam</span>
        </div>
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={resetProgress}
            className="text-slate-500 hover:text-crimson-400 flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Progress</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
}
