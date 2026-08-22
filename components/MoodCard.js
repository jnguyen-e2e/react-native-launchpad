import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

/**
 * MoodCard — single emoji card in the mood grid (Module 1).
 * Displays a highlighted border when isSelected is true.
 *
 * Props:
 *   emoji      — string, the emoji character (e.g. '😊')
 *   label      — string, the mood name (e.g. 'Happy')
 *   isSelected — boolean, true when this card is the currently selected mood
 *   isDarkMode — boolean, true when dark theme is active
 *   onPress    — function, called when the card is tapped
 */
export default function MoodCard({ emoji, label, isSelected, isDarkMode, onPress }) {
  // TODO (Module 1): Build the mood card UI
  //
  // Step 1 — Set up your color variables using isDarkMode:
  //   const bg        = isDarkMode ? '#1F2937' : '#FFFFFF';       // card background
  //   const textColor = isDarkMode ? '#F9FAFB' : '#1F2937';       // label text color
  //   const accent    = isDarkMode ? '#818CF8' : '#6366F1';       // selected border color
  //   const border    = isSelected ? accent : (isDarkMode ? '#374151' : '#E5E7EB');
  //
  // Step 2 — Return a <Pressable> component:
  //   - Set its onPress prop to the onPress function passed in
  //   - For the style prop, use the function form to get a "pressed" state:
  //       style={({ pressed }) => [
  //         styles.card,
  //         {
  //           backgroundColor: bg,
  //           borderColor: border,
  //           borderWidth: isSelected ? 2 : 1,
  //           opacity: pressed ? 0.75 : 1,
  //         },
  //       ]}
  //
  // Step 3 — Inside the <Pressable>, render two <Text> elements:
  //   - One for the emoji: <Text style={styles.emoji}>{emoji}</Text>
  //   - One for the label: <Text style={[styles.label, { color: textColor }]}>{label}</Text>

  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>🔲</Text>
      <Text style={styles.label}>MoodCard</Text>
    </View>
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
