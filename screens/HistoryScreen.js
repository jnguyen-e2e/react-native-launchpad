import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { useMood } from '@/context/mood-context';
import HistoryList from '@/components/HistoryList';
import { THEMES } from '@/constants/theme';

/**
 * History screen (Module 3).
 * Shows a FlatList of all past mood picks sourced from MoodContext.
 */
export default function HistoryScreen() {
  const { history, isDarkMode } = useMood();
  const theme = THEMES[isDarkMode ? 'dark' : 'light'];

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>History</Text>
      <HistoryList history={history} isDarkMode={isDarkMode} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 8,
    letterSpacing: -0.5,
  },
});
