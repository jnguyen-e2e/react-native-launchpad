import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

/**
 * HistoryList — FlatList of past mood picks (Module 3).
 * Each row shows emoji, label, and timestamp.
 * Renders an empty-state message when history is empty.
 *
 * Props:
 *   history    — array of { emoji, label, timestamp } objects
 *   isDarkMode — boolean, true when dark theme is active
 */
export default function HistoryList({ history, isDarkMode }) {
  // Color variables (feel free to use these in your solution):
  const textColor = isDarkMode ? '#F9FAFB' : '#1F2937';
  const cardBg = isDarkMode ? '#1F2937' : '#FFFFFF';
  const border = isDarkMode ? '#374151' : '#E5E7EB';
  const subText = isDarkMode ? '#9BA1A6' : '#687076';

  // TODO (Module 3): Build the history list with FlatList
  //
  // STEP 1 — Handle the empty state:
  //   If history.length === 0, return a friendly message instead of the list:
  //
  //   if (history.length === 0) {
  //     return (
  //       <View style={styles.empty}>
  //         <Text style={[styles.emptyText, { color: textColor }]}>
  //           No moods logged yet. Go pick one! 😊
  //         </Text>
  //       </View>
  //     );
  //   }
  //
  // STEP 2 — Render a <FlatList> with these props:
  //
  //   <FlatList
  //     data={history}                                              // the array of mood entries
  //     keyExtractor={(item, index) => `${item.timestamp}-${index}`} // unique key per row
  //     contentContainerStyle={styles.list}                         // padding around the list
  //     renderItem={({ item }) => (                                 // how to render each row:
  //       <View style={[styles.row, { backgroundColor: cardBg, borderColor: border }]}>
  //         <Text style={styles.rowEmoji}>{item.emoji}</Text>
  //         <View style={styles.rowInfo}>
  //           <Text style={[styles.rowLabel, { color: textColor }]}>{item.label}</Text>
  //           <Text style={[styles.rowTime, { color: subText }]}>{item.timestamp}</Text>
  //         </View>
  //       </View>
  //     )}
  //   />
  //
  // FlatList key concepts:
  //   - data: the array to render
  //   - renderItem: a function that receives { item } and returns JSX for one row
  //   - keyExtractor: returns a unique string for each item (helps React track changes)

  return (
    <View style={styles.empty}>
      <Text style={[styles.emptyText, { color: textColor }]}>
        HistoryList will appear here
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
  },
  rowEmoji: {
    fontSize: 32,
    marginRight: 14,
  },
  rowInfo: {
    flex: 1,
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  rowTime: {
    fontSize: 12,
    marginTop: 2,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 16,
    opacity: 0.6,
    textAlign: 'center',
  },
});
