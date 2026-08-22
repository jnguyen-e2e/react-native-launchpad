// constants/moods.ts
// Data source for the mood grid and history list.

export interface Mood {
  emoji: string;
  label: string;
}

const MOODS: Mood[] = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😢', label: 'Sad' },
  { emoji: '😡', label: 'Angry' },
  { emoji: '😴', label: 'Sleepy' },
  { emoji: '🤩', label: 'Excited' },
  { emoji: '😰', label: 'Anxious' },
  { emoji: '🥰', label: 'Loved' },
  { emoji: '😎', label: 'Cool' },
  { emoji: '🤔', label: 'Thoughtful' },
];

export default MOODS;
