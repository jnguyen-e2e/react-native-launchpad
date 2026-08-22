import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// TODO (Module 3): Build a scrollable history list using FlatList
//   - If history is empty, show a friendly empty-state message
//   - Otherwise, render a FlatList with data, renderItem, and keyExtractor
// Props: history, isDarkMode
export default function HistoryList({ history, isDarkMode }) {
  return (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>HistoryList will appear here</Text>
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
