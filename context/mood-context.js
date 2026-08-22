import React, { createContext, useContext, useState } from 'react';

/**
 * MoodContext — shares mood state across tabs without prop-drilling.
 * Extension point: lift theme into this context (see code-plan §9).
 */

const MoodContext = createContext(undefined);

export function MoodProvider({ children }) {
  const [selectedMood, setSelectedMood] = useState(null);
  const [history, setHistory] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSelectMood = (mood) => {
    const entry = { ...mood, timestamp: new Date().toLocaleTimeString() };
    setSelectedMood(entry);
    // Prepend so most recent is at the top (see code-plan §4)
    setHistory((prev) => [entry, ...prev]);
  };

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

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
