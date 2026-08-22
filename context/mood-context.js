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
    // TODO (Module 2): Handle mood selection
    // 1. Create an entry object that includes the mood's emoji and label,
    //    plus a timestamp. You can get the current time with:
    //      new Date().toLocaleTimeString()
    //    Example shape: { emoji: mood.emoji, label: mood.label, timestamp: '...' }
    //    Hint: use the spread operator to copy mood's properties: { ...mood, timestamp: ... }
    //
    // 2. Update the selected mood using setSelectedMood(entry)
    //
    // 3. Add the entry to the history array using setHistory().
    //    Use the callback form: setHistory((prev) => [entry, ...prev])
    //    Putting entry first means the newest mood appears at the top.
  };

  const toggleDarkMode = () => {
    // TODO (Module 3): Toggle dark mode on/off
    // Flip the isDarkMode boolean using setIsDarkMode.
    // Use the callback form to toggle based on the previous value:
    //   setIsDarkMode((prev) => !prev)
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
