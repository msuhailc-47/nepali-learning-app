import React, { useState, useEffect } from 'react';
import { MODULES } from '../data/nepaliData';
import { playAudio } from '../utils/tts';
import { useProgress } from '../context/ProgressContext';
import confetti from 'canvas-confetti';
import { Volume2, Trophy, RotateCcw, CheckCircle, XCircle, ArrowRight, HelpCircle } from 'lucide-react';

export const QuizModal = () => {
  const { addScorePoints } = useProgress();
  const allItems = MODULES.flatMap(m => m.items);

  const [questions, setQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Generate 5 random quiz questions
  const generateQuiz = () => {
    const shuffled = [...allItems].sort(() => Math.random() - 0.5).slice(0, 5);
    const generatedQs = shuffled.map(correctItem => {
      // Pick 3 wrong options
      const wrongOptions = allItems
        .filter(i => i.id !== correctItem.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      
      const allOptions = [...wrongOptions, correctItem].sort(() => Math.random() - 0.5);

      return {
        item: correctItem,
        options: allOptions
      };
    });

    setQuestions(generatedQs);
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setQuizScore(0);
    setQuizFinished(false);
  };

  useEffect(() => {
    generateQuiz();
  }, []);

  if (questions.length === 0) return null;

  const currentQ = questions[currentQIndex];

  const handleSelectOption = (opt) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);

    if (opt.id === currentQ.item.id) {
      setQuizScore(prev => prev + 1);
      addScorePoints(20);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      if (quizScore >= 3) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6 pb-16">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-500/20 text-crimson-300 text-xs font-bold border border-crimson-500/30">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Nepali Speed Quiz</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Test Your Nepali Mastery</h2>
        <p className="text-xs text-slate-400">
          Listen to audio and select the correct English / Malayalam meaning.
        </p>
      </div>

      {!quizFinished ? (
        <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-2xl space-y-6">
          {/* Question Header */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">
              Question {currentQIndex + 1} of {questions.length}
            </span>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
              <Trophy className="w-3.5 h-3.5" />
              <span>Score: {quizScore}</span>
            </div>
          </div>

          {/* Prompt Card */}
          <div className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl md:text-4xl font-extrabold text-amber-300 font-nepali">
                {currentQ.item.nepali}
              </span>
              <button
                onClick={() => playAudio(currentQ.item.nepali, 'ne')}
                className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-darkBg transition-all"
                title="Play Audio"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm font-mono text-slate-300">{currentQ.item.roman}</p>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Select correct meaning:
            </p>
            {currentQ.options.map((opt) => {
              const isCorrect = opt.id === currentQ.item.id;
              const isSelected = selectedOption?.id === opt.id;

              let btnStyle = "bg-darkCard hover:bg-slate-800 border-white/10 text-slate-200";
              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = "bg-emerald-950/60 border-emerald-500/80 text-emerald-200 font-bold";
                } else if (isSelected) {
                  btnStyle = "bg-crimson-950/60 border-crimson-500/80 text-crimson-200 font-bold";
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <div>
                    <p className="text-sm font-bold">{opt.english}</p>
                    <p className="text-xs font-malayalam text-emerald-400 mt-0.5">{opt.malayalam}</p>
                  </div>
                  {isAnswered && (
                    <div>
                      {isCorrect && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                      {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-crimson-400" />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          {isAnswered && (
            <button
              onClick={handleNextQuestion}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-darkBg font-extrabold shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
            >
              <span>{currentQIndex + 1 === questions.length ? 'See Final Score' : 'Next Question'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      ) : (
        /* Quiz Results Card */
        <div className="glass-card rounded-3xl p-8 border border-white/10 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
            <Trophy className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-white">Quiz Completed!</h3>
            <p className="text-sm text-slate-300 mt-1">
              You scored <span className="text-amber-400 font-bold">{quizScore} / {questions.length}</span> correct answers.
            </p>
          </div>

          <button
            onClick={generateQuiz}
            className="py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-darkBg font-extrabold flex items-center justify-center gap-2 mx-auto shadow-lg shadow-amber-500/20"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Again</span>
          </button>
        </div>
      )}
    </div>
  );
};
