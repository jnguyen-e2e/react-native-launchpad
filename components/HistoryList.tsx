import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MoodEntry } from '@/context/mood-context';

type Props = {
  history: MoodEntry[];
  isDarkMode: boolean;
};

/**
 * HistoryList — FlatList of past mood picks (Module 3).
 * Each row shows emoji, label, and timestamp (code-plan §3.4).
 * Renders an empty-state message when history is empty.
 */
export default function HistoryList({ history, isDarkMode }: Props) {
  const textColor = isDarkMode ? '#F9FAFB' : '#1F2937';
  const cardBg = isDarkMode ? '#1F2937' : '#FFFFFF';
  const border = isDarkMode ? '#374151' : '#E5E7EB';
  const subText = isDarkMode ? '#9BA1A6' : '#687076';

  if (history.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={[styles.emptyText, { color: textColor }]}>
          No moods logged yet. Go pick one! 😊
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={history}
      keyExtractor={(item, index) => `${item.timestamp}-${index}`}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={[styles.row, { backgroundColor: cardBg, borderColor: border }]}>
          <Text style={styles.rowEmoji}>{item.emoji}</Text>
          <View style={styles.rowInfo}>
            <Text style={[styles.rowLabel, { color: textColor }]}>{item.label}</Text>
            <Text style={[styles.rowTime, { color: subText }]}>{item.timestamp}</Text>
          </View>
        </View>
      )}
    />
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
