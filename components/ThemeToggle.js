import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// TODO (Module 3): Build a Pressable button that toggles light/dark mode
// Props: isDarkMode, onToggle
export default function ThemeToggle({ isDarkMode, onToggle }) {
  return (
    <View style={styles.button}>
      <Text style={styles.icon}>🔲</Text>
      <Text style={styles.label}>ThemeToggle</Text>
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
    borderColor: '#E5E7EB',
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
