# MoodBoard — Code Plan 🛠️

> **Source:** Derived from [`lesson-plan.md`](file:///Users/jnguyen/Documents/GitHub/react-native-launchpad/docs/lesson-plan.md)
>
> This document maps every workshop module to concrete code — files, components, state shape, styling, and data flow — based on the [`demo-js`](https://github.com/your-username/react-native-launchpad/tree/demo-js) implementation.

---

## 1 · Project Scaffolding

### 1.1 — Initialize

```bash
npx create-expo-app@latest react-native-launchpad --template default@sdk-57
```

### 1.2 — Target File Tree

```text
react-native-launchpad/
├── App.js                     # Root navigation & theme provider
├── screens/
│   ├── HomeScreen.js          # MoodBoard screen (picker & quote display)
│   └── HistoryScreen.js       # Mood history timeline
├── components/
│   ├── MoodCard.js            # Single emoji card (Module 1)
│   ├── MoodGrid.js            # Grid of MoodCards (Module 2)
│   ├── MoodDisplay.js         # Selected mood banner & quote display (Module 2)
│   ├── HistoryList.js         # FlatList displaying past mood entries (Module 3)
│   ├── ThemeToggle.js         # Light / dark mode switch (Module 3)
│   └── ui/
│       ├── icon-symbol.js     # Cross-platform icon component
│       └── icon-symbol.ios.js # iOS SF Symbols implementation
├── context/
│   └── mood-context.js        # Mood state, history list, and theme context (Module 2 & 3)
├── constants/
│   ├── moods.js               # Emoji + label data
│   ├── quotes.js              # Motivational quotes pool
│   └── theme.js               # Light & dark color tokens
├── hooks/
│   └── use-color-scheme.js    # Color scheme hook
├── assets/                    # Images, fonts, etc.
├── docs/
│   ├── code-plan.md           # ← You are here
│   ├── lesson-plan.md         # 3-hour workshop timeline & core concepts
│   └── setup-guide.md         # Beginner step-by-step setup guide
├── app.json                   # Expo configuration
├── jsconfig.json              # Path alias mapping (@/*)
├── package.json
└── README.md
```

> [!NOTE]
> - `constants/` keeps static data (emojis, quotes, theme tokens) separated from component logic.
> - `context/mood-context.js` shares mood state and history across tabs without prop drilling.
> - `jsconfig.json` configures the `@/*` path alias pointing to the project root.

---

## 2 · Data Models & State Management

### 2.1 — `constants/moods.js`

An array of mood objects used as the data source for the grid and history:

```js
// constants/moods.js
const MOODS = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😴", label: "Sleepy" },
  { emoji: "🤩", label: "Excited" },
  { emoji: "😰", label: "Anxious" },
  { emoji: "🥰", label: "Loved" },
  { emoji: "😎", label: "Cool" },
  { emoji: "🤔", label: "Thoughtful" },
];

export default MOODS;
```

### 2.2 — `constants/quotes.js`

A map of motivational quotes keyed by mood label:

```js
// constants/quotes.js
const QUOTES = {
  Happy:     "Keep shining — the world needs your light!",
  Sad:       "It's okay to feel this way. Better days are coming.",
  Angry:     "Take a breath. You've got the power to let it go.",
  Sleepy:    "Rest is productive too. Recharge!",
  Excited:   "Channel that energy — great things are ahead!",
  Anxious:   "You've survived 100% of your worst days so far.",
  Loved:     "You are worthy of every bit of love you receive.",
  Cool:      "Stay smooth — you've got this.",
  Thoughtful:"Reflection is the beginning of wisdom.",
};

export default QUOTES;
```

### 2.3 — `constants/theme.js`

Theme tokens for light/dark mode and tab bar colors:

```js
// constants/theme.js
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
    tint: '#0a7ea4',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: '#0a7ea4',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#fff',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#fff',
  },
};
```

### 2.4 — State Management (`context/mood-context.js`)

Shares mood state, history list, and theme toggle across the app:

| State Variable | Type | Initial Value | Purpose |
|---|---|---|---|
| `selectedMood` | `object \| null` | `null` | Currently selected mood `{ emoji, label, timestamp }` |
| `history` | `array` | `[]` | List of `{ emoji, label, timestamp }` entries |
| `isDarkMode` | `boolean` | `false` | Controls light / dark theme |

```js
// context/mood-context.js
import React, { createContext, useContext, useState } from 'react';

const MoodContext = createContext(undefined);

export function MoodProvider({ children }) {
  const [selectedMood, setSelectedMood] = useState(null);
  const [history, setHistory] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSelectMood = (mood) => {
    const entry = { ...mood, timestamp: new Date().toLocaleTimeString() };
    setSelectedMood(entry);
    // Prepend so the most recent entry is at the top of history
    setHistory((prev) => [entry, ...prev]);
  };

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <MoodContext.Provider value={{ selectedMood, history, isDarkMode, handleSelectMood, toggleDarkMode }}>
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  const ctx = useContext(MoodContext);
  if (!ctx) throw new Error('useMood must be used inside MoodProvider');
  return ctx;
}
```

---

## 3 · Component Specifications

### 3.1 — `MoodCard` (Module 1)

| Aspect | Detail |
|---|---|
| **File** | `components/MoodCard.js` |
| **Props** | `emoji` (string), `label` (string), `isSelected` (boolean), `isDarkMode` (boolean), `onPress` (function) |
| **Renders** | `Pressable` → `Text` (emoji) + `Text` (label) |
| **Styling** | Rounded card, centered content, accent border when `isSelected`, theme-aware background/text |

```jsx
// components/MoodCard.js
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function MoodCard({ emoji, label, isSelected, isDarkMode, onPress }) {
  const bg = isDarkMode ? '#1F2937' : '#FFFFFF';
  const textColor = isDarkMode ? '#F9FAFB' : '#1F2937';
  const accent = isDarkMode ? '#818CF8' : '#6366F1';
  const border = isSelected ? accent : (isDarkMode ? '#374151' : '#E5E7EB');

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: bg,
          borderColor: border,
          borderWidth: isSelected ? 2 : 1,
          opacity: pressed ? 0.75 : 1,
        },
      ]}
    >
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </Pressable>
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
```

---

### 3.2 — `MoodGrid` (Module 2)

| Aspect | Detail |
|---|---|
| **File** | `components/MoodGrid.js` |
| **Props** | `moods` (array), `selectedMood` (object), `isDarkMode` (boolean), `onSelectMood` (function) |
| **Renders** | `View` with `flexDirection: 'row'`, `flexWrap: 'wrap'`, `justifyContent: 'center'` |
| **Logic** | Maps over `moods` array, passes `isSelected`, `isDarkMode`, and `onPress` to each `MoodCard` |

```jsx
// components/MoodGrid.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MoodCard from './MoodCard';

export default function MoodGrid({ moods, selectedMood, isDarkMode, onSelectMood }) {
  return (
    <View style={styles.grid}>
      {moods.map((mood) => (
        <MoodCard
          key={mood.label}
          emoji={mood.emoji}
          label={mood.label}
          isSelected={selectedMood?.label === mood.label}
          isDarkMode={isDarkMode}
          onPress={() => onSelectMood(mood)}
        />
      ))}
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
```

---

### 3.3 — `MoodDisplay` (Module 2)

| Aspect | Detail |
|---|---|
| **File** | `components/MoodDisplay.js` |
| **Props** | `mood` (object \| null), `isDarkMode` (boolean) |
| **Renders** | Large emoji `Text`, label `Text`, quote `Text` (from `QUOTES` map) |
| **Conditional** | If `mood` is `null`, renders a placeholder: *"Tap a mood to get started! 👆"* |

```jsx
// components/MoodDisplay.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QUOTES from '@/constants/quotes';

export default function MoodDisplay({ mood, isDarkMode }) {
  const textColor = isDarkMode ? '#F9FAFB' : '#1F2937';
  const accent = isDarkMode ? '#818CF8' : '#6366F1';
  const cardBg = isDarkMode ? '#1F2937' : '#FFFFFF';
  const border = isDarkMode ? '#374151' : '#E5E7EB';

  if (!mood) {
    return (
      <View style={[styles.container, { backgroundColor: cardBg, borderColor: border }]}>
        <Text style={[styles.placeholder, { color: textColor }]}>
          Tap a mood to get started! 👆
        </Text>
      </View>
    );
  }

  const quote = QUOTES[mood.label] ?? '';

  return (
    <View style={[styles.container, { backgroundColor: cardBg, borderColor: border }]}>
      <Text style={styles.bigEmoji}>{mood.emoji}</Text>
      <Text style={[styles.label, { color: accent }]}>{mood.label}</Text>
      <Text style={[styles.quote, { color: textColor }]}>{quote}</Text>
    </View>
  );
}
```

---

### 3.4 — `HistoryList` (Module 3)

| Aspect | Detail |
|---|---|
| **File** | `components/HistoryList.js` |
| **Props** | `history` (array of `{ emoji, label, timestamp }`), `isDarkMode` (boolean) |
| **Renders** | `FlatList` with each row displaying emoji, label, and timestamp |
| **Key extractor** | `(item, index) => `${item.timestamp}-${index}`` |
| **Empty state** | Shows *"No moods logged yet. Go pick one! 😊"* when `history` is empty |

```jsx
// components/HistoryList.js
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function HistoryList({ history, isDarkMode }) {
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
```

---

### 3.5 — `ThemeToggle` (Module 3)

| Aspect | Detail |
|---|---|
| **File** | `components/ThemeToggle.js` |
| **Props** | `isDarkMode` (boolean), `onToggle` (function) |
| **Renders** | Pill-shaped `Pressable` showing sun/moon icon and current mode text |
| **Behavior** | Calls `onToggle` to flip `isDarkMode` state in `MoodContext` |

```jsx
// components/ThemeToggle.js
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

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
```

---

## 4 · Screen Architecture & Navigation

### 4.1 — Root Navigation (`App.js`)

Uses **React Navigation v7 Static API** (`createBottomTabNavigator` + `createStaticNavigation`) with two tabs:

```jsx
// App.js
import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { MoodProvider } from '@/context/mood-context';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import HomeScreen from '@/screens/HomeScreen';
import HistoryScreen from '@/screens/HistoryScreen';

const RootTabs = createBottomTabNavigator({
  screens: {
    MoodBoard: {
      screen: HomeScreen,
      options: {
        title: 'MoodBoard',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name="face.smiling" color={color} />
        ),
      },
    },
    History: {
      screen: HistoryScreen,
      options: {
        title: 'History',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name="clock.fill" color={color} />
        ),
      },
    },
  },
});

const Navigation = createStaticNavigation(RootTabs);

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <MoodProvider>
        <Navigation
          theme={{
            dark: colorScheme === 'dark',
            colors: {
              primary: Colors[colorScheme ?? 'light'].tint,
              background: Colors[colorScheme ?? 'light'].background,
              card: Colors[colorScheme ?? 'light'].background,
              text: Colors[colorScheme ?? 'light'].text,
              border: Colors[colorScheme ?? 'light'].background,
              notification: Colors[colorScheme ?? 'light'].tint,
            },
            fonts: {
              regular: { fontFamily: 'System', fontWeight: '400' },
              medium: { fontFamily: 'System', fontWeight: '500' },
              bold: { fontFamily: 'System', fontWeight: '700' },
              heavy: { fontFamily: 'System', fontWeight: '800' },
            },
          }}
        />
        <StatusBar style="auto" />
      </MoodProvider>
    </SafeAreaProvider>
  );
}
```

### 4.2 — `HomeScreen` (`screens/HomeScreen.js`)

Assembles `ThemeToggle`, `MoodGrid`, and `MoodDisplay` inside a `ScrollView`:

```jsx
// screens/HomeScreen.js
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useMood } from '@/context/mood-context';
import MoodDisplay from '@/components/MoodDisplay';
import MoodGrid from '@/components/MoodGrid';
import ThemeToggle from '@/components/ThemeToggle';
import MOODS from '@/constants/moods';
import { THEMES } from '@/constants/theme';

export default function HomeScreen() {
  const { selectedMood, isDarkMode, handleSelectMood, toggleDarkMode } = useMood();
  const theme = THEMES[isDarkMode ? 'dark' : 'light'];

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>MoodBoard</Text>
        <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
        <MoodGrid
          moods={MOODS}
          selectedMood={selectedMood}
          isDarkMode={isDarkMode}
          onSelectMood={handleSelectMood}
        />
        <MoodDisplay mood={selectedMood} isDarkMode={isDarkMode} />
      </ScrollView>
    </SafeAreaView>
  );
}
```

### 4.3 — `HistoryScreen` (`screens/HistoryScreen.js`)

Renders the `HistoryList` using data sourced from `MoodContext`:

```jsx
// screens/HistoryScreen.js
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useMood } from '@/context/mood-context';
import HistoryList from '@/components/HistoryList';
import { THEMES } from '@/constants/theme';

export default function HistoryScreen() {
  const { history, isDarkMode } = useMood();
  const theme = THEMES[isDarkMode ? 'dark' : 'light'];

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>History</Text>
      <HistoryList history={history} isDarkMode={isDarkMode} />
    </SafeAreaView>
  );
}
```

---

## 5 · Styling Strategy

### 5.1 — StyleSheet Pattern

Each component defines static structure in a `StyleSheet.create({})` block. Theme colors (`THEMES[isDarkMode ? 'dark' : 'light']`) are resolved and passed via styles or props:

```js
const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    width: 90,
  },
});
```

### 5.2 — Layout Guidelines

| Layout Need | Approach |
|---|---|
| Centering content | `justifyContent: 'center'`, `alignItems: 'center'` |
| Mood grid wrapping | `flexDirection: 'row'`, `flexWrap: 'wrap'`, `justifyContent: 'center'` |
| Full-screen layout | `flex: 1` on root container |
| Safe area handling | Root `SafeAreaProvider` in `App.js` + `SafeAreaView` from `react-native-safe-area-context` on screens |
| Scroll handling | `ScrollView` for form/card layouts, `FlatList` for dynamic data lists |

---

## 6 · Build Order (Aligned with Workshop Modules)

### Phase 1 — Module 1: Setup & Building Blocks (45 min)

- [ ] Explore the project structure (`App.js`, `screens/`, `constants/`)
- [ ] Understand `constants/moods.js` data structure
- [ ] Build `components/MoodCard.js` with props (`emoji`, `label`, `isSelected`, `isDarkMode`) and static styles
- [ ] Render a static `MoodCard` in `screens/HomeScreen.js` to verify styling and layout

### Phase 2 — Module 2: State & Interactivity (40 min)

- [ ] Implement `handleSelectMood` in `context/mood-context.js` (`useState` for `selectedMood` and `history`)
- [ ] Build `components/MoodGrid.js` to map over `MOODS` and render `MoodCard` items
- [ ] Build `components/MoodDisplay.js` with conditional rendering (placeholder vs. selected mood + motivational quote from `QUOTES`)
- [ ] Connect `MoodGrid` and `MoodDisplay` to `useMood()` inside `screens/HomeScreen.js`
- [ ] Verify: tapping a mood card updates the display and logs to history

### Phase 3 — Module 3: Lists, Themes & Polish (35 min)

- [ ] Build `components/HistoryList.js` with `FlatList`, timestamp formatting, and empty-state messaging
- [ ] Connect `HistoryList` to `screens/HistoryScreen.js` via `useMood()`
- [ ] Build `components/ThemeToggle.js` and implement `toggleDarkMode` in `context/mood-context.js`
- [ ] Apply theme tokens (`THEMES`) across cards, screens, and text
- [ ] Polish: active card border highlight, pressed opacity feedback, safe area insets

---

## 7 · Starter vs. Solution Code Strategy

| Variant | Branch | Purpose |
|---|---|---|
| **Starter** | `sandbox-js` | Scaffolded files with `// TODO` comments and hints for attendees to complete |
| **Solution** | `demo-js` | Fully working reference implementation for instructors and attendees |

> [!IMPORTANT]
> The starter code on `sandbox-js` compiles and runs cleanly from step 1 so attendees always have a working app on their device while completing each module.

---

## 8 · Key React Native & Expo APIs Referenced

| API / Component | Import From | Used In |
|---|---|---|
| `View` | `react-native` | All components & screens |
| `Text` | `react-native` | All components & screens |
| `Pressable` | `react-native` | `MoodCard`, `ThemeToggle` |
| `FlatList` | `react-native` | `HistoryList` |
| `ScrollView` | `react-native` | `HomeScreen` |
| `StyleSheet` | `react-native` | All components & screens |
| `SafeAreaProvider` | `react-native-safe-area-context` | `App.js` |
| `SafeAreaView` | `react-native-safe-area-context` | `screens/HomeScreen.js`, `screens/HistoryScreen.js` |
| `createBottomTabNavigator` | `@react-navigation/bottom-tabs` | `App.js` |
| `createStaticNavigation` | `@react-navigation/native` | `App.js` |
| `StatusBar` | `expo-status-bar` | `App.js` |
| `useState`, `useContext`, `createContext` | `react` | `context/mood-context.js` |

---

## 9 · Extension Points (Post-Workshop)

These map to the **Intermediate & Advanced** sections in [`lesson-plan.md`](file:///Users/jnguyen/Documents/GitHub/react-native-launchpad/docs/lesson-plan.md). The `demo-js` architecture is structured to accommodate them easily:

| Extension | Where It Plugs In |
|---|---|
| **Persistent Storage** (`@react-native-async-storage/async-storage`) | Load & save `history` array in `context/mood-context.js` using `useEffect` |
| **Haptic Feedback** (`expo-haptics`) | Trigger haptic ticks on `MoodCard` press and `ThemeToggle` press |
| **Animations** (`react-native-reanimated`) | Add scale bounce to `MoodCard` press and fade transitions to `MoodDisplay` quotes |
| **API Integration** (`fetch`) | Replace static `QUOTES` with live quotes from a public API |
| **Journaling & Notes** (`TextInput`) | Allow users to attach a personal note to each logged mood |
| **Stack Navigation** (`@react-navigation/native-stack`) | Add a detail modal screen for inspecting past mood entries |
| **TypeScript Migration** | Rename `.js` → `.tsx`, add typed interfaces for moods and context state |
