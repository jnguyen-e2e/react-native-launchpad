import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QUOTES from '@/constants/quotes';

// TODO (Module 2): Show the selected mood's emoji, label, and a quote from QUOTES
//   - If no mood is selected, show a placeholder message
//   - If a mood is selected, look up the quote with QUOTES[mood.label]
// Props: mood, isDarkMode
export default function MoodDisplay({ mood, isDarkMode }) {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>MoodDisplay will appear here</Text>
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
    borderColor: '#E5E7EB',
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
