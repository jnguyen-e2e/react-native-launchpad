/**
 * Theme tokens for the MoodBoard app.
 *
 * - THEMES: MoodBoard light/dark palette (background, card, text, accent, border)
 * - Colors: Tab-bar tints
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const THEMES = {
  light: {
    background: '#F9FAFB',
    card:       '#FFFFFF',
    text:       '#1F2937',
    accent:     '#6366F1', // indigo-500
    border:     '#E5E7EB',
  },
  dark: {
    background: '#111827',
    card:       '#1F2937',
    text:       '#F9FAFB',
    accent:     '#818CF8', // indigo-400
    border:     '#374151',
  },
};

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

