import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MoodCard from './MoodCard';

/**
 * MoodGrid — wrapping grid of MoodCards (Module 2).
 * Uses flexWrap row layout to display cards in a grid.
 *
 * Props:
 *   moods        — array of { emoji, label } objects (from constants/moods.js)
 *   selectedMood — the currently selected mood object (or null)
 *   isDarkMode   — boolean, true when dark theme is active
 *   onSelectMood — function, called with a mood object when a card is tapped
 */
export default function MoodGrid({ moods, selectedMood, isDarkMode, onSelectMood }) {
  return (
    <View style={styles.grid}>
      {/* TODO (Module 2): Render a MoodCard for each mood in the moods array
        *
        * Use moods.map() to loop over the array. For each mood, return a <MoodCard>:
        *
        *   {moods.map((mood) => (
        *     <MoodCard
        *       key={mood.label}                                  // unique key for React lists
        *       emoji={mood.emoji}                                // the emoji character
        *       label={mood.label}                                // the mood name
        *       isSelected={selectedMood?.label === mood.label}   // highlight if this is the selected mood
        *       isDarkMode={isDarkMode}                           // pass the theme flag through
        *       onPress={() => onSelectMood(mood)}                // call onSelectMood when tapped
        *     />
        *   ))}
        *
        * The ?. in selectedMood?.label is "optional chaining" — it safely returns
        * undefined instead of crashing when selectedMood is null.
        */}
      <Text style={{ textAlign: 'center', opacity: 0.5, padding: 20 }}>
        Mood grid will appear here
      </Text>
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
