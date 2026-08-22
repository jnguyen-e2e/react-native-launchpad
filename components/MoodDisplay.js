import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QUOTES from '@/constants/quotes';

/**
 * MoodDisplay — shows the selected emoji, label, and motivational quote (Module 2).
 * Renders a placeholder when no mood is selected (code-plan §3.3).
 */
export default function MoodDisplay({ mood, isDarkMode }) {
  const textColor = isDarkMode ? '#F9FAFB' : '#1F2937';
  const accent = isDarkMode ? '#818CF8' : '#6366F1';
  const cardBg = isDarkMode ? '#1F2937' : '#FFFFFF';
  const border = isDarkMode ? '#374151' : '#E5E7EB';

  if (!mood) {
    return (
      <View style={[styles.container, { backgroundColor: cardBg, borderColor: border }]}>
        <Text style={[styles.placeholder, { color: textColor }]}>
          Tap a mood to get started! 👆
        </Text>
      </View>
    );
  }

  const quote = QUOTES[mood.label] ?? '';

  return (
    <View style={[styles.container, { backgroundColor: cardBg, borderColor: border }]}>
      <Text style={styles.bigEmoji}>{mood.emoji}</Text>
      <Text style={[styles.label, { color: accent }]}>{mood.label}</Text>
      <Text style={[styles.quote, { color: textColor }]}>{quote}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
  },
  placeholder: {
    fontSize: 16,
    opacity: 0.6,
  },
  bigEmoji: {
    fontSize: 64,
    marginBottom: 8,
  },
  label: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  quote: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.85,
  },
});
