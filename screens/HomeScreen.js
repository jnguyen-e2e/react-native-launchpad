import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

import { useMood } from '@/context/mood-context';
import MoodDisplay from '@/components/MoodDisplay';
import MoodGrid from '@/components/MoodGrid';
import ThemeToggle from '@/components/ThemeToggle';
import MOODS from '@/constants/moods';
import { THEMES } from '@/constants/theme';

/**
 * Main MoodBoard screen (Module 1 & 2).
 * Hosts the ThemeToggle, MoodGrid, and MoodDisplay.
 * State lives in MoodContext (context/mood-context.js).
 */
export default function HomeScreen() {
  const { selectedMood, isDarkMode, handleSelectMood, toggleDarkMode } = useMood();
  const theme = THEMES[isDarkMode ? 'dark' : 'light'];

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>MoodBoard</Text>

        <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

        <MoodGrid
          moods={MOODS}
          selectedMood={selectedMood}
          isDarkMode={isDarkMode}
          onSelectMood={handleSelectMood}
        />

        <MoodDisplay mood={selectedMood} isDarkMode={isDarkMode} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 4,
    letterSpacing: -0.5,
  },
});
