import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [completedItems, setCompletedItems] = useState(() => {
    const saved = localStorage.getItem('nepali_completed_items');
    return saved ? JSON.parse(saved) : [];
  });

  const [starredItems, setStarredItems] = useState(() => {
    const saved = localStorage.getItem('nepali_starred_items');
    return saved ? JSON.parse(saved) : [];
  });

  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem('nepali_score');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [currentView, setCurrentView] = useState('roadmap'); // 'roadmap' | 'flashcards' | 'quiz' | 'sentence' | 'survival' | 'grammar' | 'hosting'
  const [activeModuleId, setActiveModuleId] = useState('mod1');

  useEffect(() => {
    localStorage.setItem('nepali_completed_items', JSON.stringify(completedItems));
  }, [completedItems]);

  useEffect(() => {
    localStorage.setItem('nepali_starred_items', JSON.stringify(starredItems));
  }, [starredItems]);

  useEffect(() => {
    localStorage.setItem('nepali_score', score.toString());
  }, [score]);

  const toggleComplete = (id) => {
    setCompletedItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        setScore(s => s + 10);
        return [...prev, id];
      }
    });
  };

  const toggleStar = (id) => {
    setStarredItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const addScorePoints = (pts) => {
    setScore(s => s + pts);
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all your learning progress?")) {
      setCompletedItems([]);
      setStarredItems([]);
      setScore(0);
    }
  };

  return (
    <ProgressContext.Provider value={{
      completedItems,
      starredItems,
      score,
      currentView,
      setCurrentView,
      activeModuleId,
      setActiveModuleId,
      toggleComplete,
      toggleStar,
      addScorePoints,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
