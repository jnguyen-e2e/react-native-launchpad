import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

/**
 * ThemeToggle — sun/moon Pressable to flip dark mode (Module 3).
 *
 * Props:
 *   isDarkMode — boolean, true when dark theme is active
 *   onToggle   — function, called when the button is pressed
 */
export default function ThemeToggle({ isDarkMode, onToggle }) {
  // Color variables (feel free to use these in your solution):
  const textColor = isDarkMode ? '#F9FAFB' : '#1F2937';
  const cardBg = isDarkMode ? '#1F2937' : '#FFFFFF';
  const border = isDarkMode ? '#374151' : '#E5E7EB';

  // TODO (Module 3): Build the theme toggle button
  //
  // Return a <Pressable> that toggles between light and dark mode:
  //
  //   <Pressable
  //     onPress={onToggle}                         // call onToggle when pressed
  //     style={({ pressed }) => [                  // dynamic style using pressed state
  //       styles.button,
  //       { backgroundColor: cardBg, borderColor: border, opacity: pressed ? 0.7 : 1 },
  //     ]}
  //   >
  //     <Text style={styles.icon}>
  //       {isDarkMode ? '🌙' : '☀️'}              // show moon in dark mode, sun in light mode
  //     </Text>
  //     <Text style={[styles.label, { color: textColor }]}>
  //       {isDarkMode ? 'Dark Mode' : 'Light Mode'} // label changes with the mode
  //     </Text>
  //   </Pressable>
  //
  // Key concepts:
  //   - Pressable is the modern replacement for TouchableOpacity
  //   - The style prop can be a function that receives { pressed } for press feedback
  //   - Use isDarkMode to conditionally render different icons and text

  return (
    <View style={[styles.button, { backgroundColor: cardBg, borderColor: border }]}>
      <Text style={styles.icon}>🔲</Text>
      <Text style={[styles.label, { color: textColor }]}>ThemeToggle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: 16,
    marginTop: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    gap: 6,
  },
  icon: {
    fontSize: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
  },
});
