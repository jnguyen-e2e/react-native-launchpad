import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

/**
 * MoodCard — single emoji card in the mood grid (Module 1).
 * Displays a highlighted border when isSelected is true.
 */
export default function MoodCard({ emoji, label, isSelected, isDarkMode, onPress }) {
  const bg = isDarkMode ? '#1F2937' : '#FFFFFF';
  const textColor = isDarkMode ? '#F9FAFB' : '#1F2937';
  const accent = isDarkMode ? '#818CF8' : '#6366F1';
  const border = isSelected ? accent : (isDarkMode ? '#374151' : '#E5E7EB');

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: bg,
          borderColor: border,
          borderWidth: isSelected ? 2 : 1,
          opacity: pressed ? 0.75 : 1,
        },
      ]}
    >
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    width: 90,
  },
  emoji: {
    fontSize: 32,
  },
  label: {
    fontSize: 11,
    marginTop: 4,
    fontWeight: '500',
  },
});
