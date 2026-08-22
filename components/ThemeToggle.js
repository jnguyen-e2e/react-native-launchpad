import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

/**
 * ThemeToggle — sun/moon Pressable to flip dark mode (Module 3, code-plan §3.5).
 */
export default function ThemeToggle({ isDarkMode, onToggle }) {
  const textColor = isDarkMode ? '#F9FAFB' : '#1F2937';
  const cardBg = isDarkMode ? '#1F2937' : '#FFFFFF';
  const border = isDarkMode ? '#374151' : '#E5E7EB';

  return (
    <Pressable
      onPress={onToggle}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: cardBg, borderColor: border, opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <Text style={styles.icon}>{isDarkMode ? '🌙' : '☀️'}</Text>
      <Text style={[styles.label, { color: textColor }]}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>
    </Pressable>
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
