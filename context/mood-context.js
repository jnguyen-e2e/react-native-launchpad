import React, { createContext, useContext, useState } from 'react';

const MoodContext = createContext(undefined);

export function MoodProvider({ children }) {
  const [selectedMood, setSelectedMood] = useState(null);
  const [history, setHistory] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSelectMood = (mood) => {
    // TODO (Module 2): Update selectedMood and add to history
  };

  const toggleDarkMode = () => {
    // TODO (Module 3): Toggle isDarkMode
  };

  return (
    <MoodContext.Provider value={{ selectedMood, history, isDarkMode, handleSelectMood, toggleDarkMode }}>
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  const ctx = useContext(MoodContext);
  if (!ctx) throw new Error('useMood must be used inside MoodProvider');
  return ctx;
}
