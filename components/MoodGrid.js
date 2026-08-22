import React from 'react';
import { StyleSheet, View } from 'react-native';
import MoodCard from './MoodCard';

/**
 * MoodGrid — wrapping grid of MoodCards (Module 2).
 * Uses flexWrap row layout as specified in code-plan §5.3.
 */
export default function MoodGrid({ moods, selectedMood, isDarkMode, onSelectMood }) {
  return (
    <View style={styles.grid}>
      {moods.map((mood) => (
        <MoodCard
          key={mood.label}
          emoji={mood.emoji}
          label={mood.label}
          isSelected={selectedMood?.label === mood.label}
          isDarkMode={isDarkMode}
          onPress={() => onSelectMood(mood)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 12,
  },
});
