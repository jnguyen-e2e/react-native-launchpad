import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QUOTES from '@/constants/quotes';

/**
 * MoodDisplay — shows the selected emoji, label, and motivational quote (Module 2).
 * Renders a placeholder when no mood is selected.
 *
 * Props:
 *   mood       — the selected mood object { emoji, label, timestamp } or null
 *   isDarkMode — boolean, true when dark theme is active
 */
export default function MoodDisplay({ mood, isDarkMode }) {
  // Color variables (feel free to use these in your solution):
  const textColor = isDarkMode ? '#F9FAFB' : '#1F2937';
  const accent = isDarkMode ? '#818CF8' : '#6366F1';
  const cardBg = isDarkMode ? '#1F2937' : '#FFFFFF';
  const border = isDarkMode ? '#374151' : '#E5E7EB';

  // TODO (Module 2): Implement conditional rendering
  //
  // This component should display TWO different things depending on whether
  // a mood has been selected or not.
  //
  // CASE 1 — No mood selected (mood is null/undefined):
  //   Return early with a placeholder message:
  //
  //   if (!mood) {
  //     return (
  //       <View style={[styles.container, { backgroundColor: cardBg, borderColor: border }]}>
  //         <Text style={[styles.placeholder, { color: textColor }]}>
  //           Tap a mood to get started! 👆
  //         </Text>
  //       </View>
  //     );
  //   }
  //
  // CASE 2 — A mood is selected:
  //   1. Look up the motivational quote:
  //        const quote = QUOTES[mood.label] ?? '';
  //      (QUOTES is imported at the top — it maps mood labels like 'Happy' to quote strings)
  //
  //   2. Return a card showing:
  //      - The emoji in large text:   <Text style={styles.bigEmoji}>{mood.emoji}</Text>
  //      - The mood label in accent:  <Text style={[styles.label, { color: accent }]}>{mood.label}</Text>
  //      - The quote:                 <Text style={[styles.quote, { color: textColor }]}>{quote}</Text>
  //
  //      All wrapped in:
  //      <View style={[styles.container, { backgroundColor: cardBg, borderColor: border }]}>
  //        ...
  //      </View>

  return (
    <View style={[styles.container, { backgroundColor: cardBg, borderColor: border }]}>
      <Text style={[styles.placeholder, { color: textColor }]}>
        MoodDisplay will appear here
      </Text>
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
