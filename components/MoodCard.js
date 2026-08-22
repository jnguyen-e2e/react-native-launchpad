import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// TODO (Module 1): Build a tappable mood card that displays an emoji and label
// Props: emoji, label, isSelected, isDarkMode, onPress
export default function MoodCard({ emoji, label, isSelected, isDarkMode, onPress }) {
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
