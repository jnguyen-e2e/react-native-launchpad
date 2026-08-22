import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Mood } from '@/constants/moods';

/**
 * MoodContext — shares mood state across tabs without prop-drilling.
 * Extension point: lift theme into this context (see code-plan §9).
 */

export interface MoodEntry extends Mood {
  timestamp: string;
}

interface MoodContextValue {
  selectedMood: MoodEntry | null;
  history: MoodEntry[];
  isDarkMode: boolean;
  handleSelectMood: (mood: Mood) => void;
  toggleDarkMode: () => void;
}

const MoodContext = createContext<MoodContextValue | undefined>(undefined);

export function MoodProvider({ children }: { children: ReactNode }) {
  const [selectedMood, setSelectedMood] = useState<MoodEntry | null>(null);
  const [history, setHistory] = useState<MoodEntry[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSelectMood = (mood: Mood) => {
    const entry: MoodEntry = { ...mood, timestamp: new Date().toLocaleTimeString() };
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

export function useMood(): MoodContextValue {
  const ctx = useContext(MoodContext);
  if (!ctx) throw new Error('useMood must be used inside MoodProvider');
  return ctx;
}
