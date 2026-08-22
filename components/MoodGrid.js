import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MoodCard from './MoodCard';

// TODO (Module 2): Render a MoodCard for each mood using moods.map()
// Props: moods, selectedMood, isDarkMode, onSelectMood
export default function MoodGrid({ moods, selectedMood, isDarkMode, onSelectMood }) {
  return (
    <View style={styles.grid}>
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
