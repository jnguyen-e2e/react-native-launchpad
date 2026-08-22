# MoodBoard — Code Plan 🛠️

> **Source:** Derived from [`lesson-plan.md`](file:///Users/jnguyen/Documents/GitHub/react-native-launchpad/docs/lesson-plan.md)
>
> This document maps every workshop module to concrete code — files, components, state shape, styling, and data flow — so you can scaffold the project with confidence.

---

## 1 · Project Scaffolding

### 1.1 — Initialize

```bash
npx create-expo-app@latest react-native-launchpad --template default@sdk-54
```

### 1.2 — Target File Tree

```
react-native-launchpad/
├── app/
│   ├── index.js                # Root screen — assembles all components
│   └── components/
│       ├── MoodCard.js          # Single emoji card (Module 1)
│       ├── MoodGrid.js          # Grid of MoodCards (Module 2)
│       ├── MoodDisplay.js       # Selected mood + motivational quote (Module 2)
│       ├── HistoryList.js       # FlatList of past picks (Module 3)
│       └── ThemeToggle.js       # Light / dark mode switch (Module 3)
├── assets/                      # Images, fonts, etc.
├── constants/
│   ├── moods.js                 # Emoji + label data
│   └── quotes.js                # Motivational quotes pool
├── docs/
│   ├── lesson-plan.md
│   └── code-plan.md             # ← You are here
├── app.json
├── package.json
└── README.md
```

> [!NOTE]
> The `constants/` directory is introduced to keep data (emojis, quotes) separate from component logic, making it easy for attendees to customize.

---

## 2 · Data Models & Constants

### 2.1 — `constants/moods.js`

An array of mood objects used as the data source for the grid and history.

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

A map (or array) of motivational quotes, optionally keyed by mood label.

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

### 2.3 — State Shape (in `app/index.js`)

| State Variable | Type | Initial Value | Purpose |
|---|---|---|---|
| `selectedMood` | `object \| null` | `null` | Currently selected mood `{ emoji, label }` |
| `history` | `array` | `[]` | List of `{ emoji, label, timestamp }` entries |
| `isDarkMode` | `boolean` | `false` | Controls light/dark theme |

```js
const [selectedMood, setSelectedMood] = useState(null);
const [history, setHistory] = useState([]);
const [isDarkMode, setIsDarkMode] = useState(false);
```

---

## 3 · Component Specifications

### 3.1 — `MoodCard` (Module 1)

| Aspect | Detail |
|---|---|
| **File** | `app/components/MoodCard.js` |
| **Props** | `emoji` (string), `label` (string), `onPress` (function), `isSelected` (boolean) |
| **Renders** | `Pressable` → `View` → `Text` (emoji) + `Text` (label) |
| **Styling** | Rounded card, centered content, highlight border when `isSelected` |

```jsx
// Simplified API
<MoodCard
  emoji="😊"
  label="Happy"
  isSelected={selectedMood?.label === "Happy"}
  onPress={() => handleSelectMood({ emoji: "😊", label: "Happy" })}
/>
```

---

### 3.2 — `MoodGrid` (Module 2)

| Aspect | Detail |
|---|---|
| **File** | `app/components/MoodGrid.js` |
| **Props** | `moods` (array), `selectedMood` (object), `onSelectMood` (function) |
| **Renders** | `View` with `flexDirection: 'row'`, `flexWrap: 'wrap'` containing `MoodCard` for each item |
| **Logic** | Maps over `moods` array, passes `onPress` and `isSelected` to each `MoodCard` |

```jsx
<MoodGrid
  moods={MOODS}
  selectedMood={selectedMood}
  onSelectMood={handleSelectMood}
/>
```

---

### 3.3 — `MoodDisplay` (Module 2)

| Aspect | Detail |
|---|---|
| **File** | `app/components/MoodDisplay.js` |
| **Props** | `mood` (object \| null) |
| **Renders** | Large emoji `Text`, label `Text`, quote `Text` (from `QUOTES` map) |
| **Conditional** | If `mood` is `null`, render a placeholder message: *"Tap a mood to get started!"* |

```jsx
<MoodDisplay mood={selectedMood} />
```

---

### 3.4 — `HistoryList` (Module 3)

| Aspect | Detail |
|---|---|
| **File** | `app/components/HistoryList.js` |
| **Props** | `history` (array of `{ emoji, label, timestamp }`) |
| **Renders** | `FlatList` with each row showing emoji, label, and formatted time |
| **Key extractor** | `(item, index) => index.toString()` (or use `timestamp` for uniqueness) |
| **Empty state** | Render a message when `history` is empty |

```jsx
<HistoryList history={history} />
```

---

### 3.5 — `ThemeToggle` (Module 3)

| Aspect | Detail |
|---|---|
| **File** | `app/components/ThemeToggle.js` |
| **Props** | `isDarkMode` (boolean), `onToggle` (function) |
| **Renders** | `Pressable` (or `Switch`) with a sun/moon emoji and label |
| **Behavior** | Calls `onToggle` to flip `isDarkMode` state in parent |

```jsx
<ThemeToggle isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
```

---

## 4 · Core Event Handlers (in `app/index.js`)

```js
// Select a mood → update display + push to history
const handleSelectMood = (mood) => {
  setSelectedMood(mood);
  setHistory((prev) => [
    { ...mood, timestamp: new Date().toLocaleTimeString() },
    ...prev,
  ]);
};
```

> [!TIP]
> Prepending to the array (`[newItem, ...prev]`) keeps the most recent mood at the top of the history list.

---

## 5 · Styling Strategy

### 5.1 — Theme Colors

```js
const THEMES = {
  light: {
    background: "#F9FAFB",
    card:       "#FFFFFF",
    text:       "#1F2937",
    accent:     "#6366F1",  // indigo-500
    border:     "#E5E7EB",
  },
  dark: {
    background: "#111827",
    card:       "#1F2937",
    text:       "#F9FAFB",
    accent:     "#818CF8",  // indigo-400
    border:     "#374151",
  },
};
```

### 5.2 — StyleSheet Pattern

Each component owns a `StyleSheet.create({})` block. Theme-dependent values are passed via props or computed inline:

```js
const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
    width: 90,
    // backgroundColor applied inline based on theme
  },
});
```

### 5.3 — Layout Guidelines

| Layout Need | Approach |
|---|---|
| Centering content | `justifyContent: 'center'`, `alignItems: 'center'` |
| Mood grid wrapping | `flexDirection: 'row'`, `flexWrap: 'wrap'`, `justifyContent: 'center'` |
| Full-screen layout | `flex: 1` on root `View` |
| Spacing between sections | `marginVertical` on section containers |
| Safe area handling | Wrap root in `SafeAreaView` |

---

## 6 · Build Order (Aligned with Workshop Modules)

### Phase 1 — Module 1: Setup & Building Blocks (45 min)

- [ ] Scaffold the Expo project
- [ ] Create `constants/moods.js` and `constants/quotes.js`
- [ ] Build `MoodCard` component with props and static styling
- [ ] Render a few hardcoded `MoodCard`s in `app/index.js` to verify

### Phase 2 — Module 2: State & Interactivity (40 min)

- [ ] Add `useState` for `selectedMood` and `history`
- [ ] Build `MoodGrid` to render all moods from the array
- [ ] Wire `onPress` → `handleSelectMood`
- [ ] Build `MoodDisplay` with conditional rendering (null vs. selected)
- [ ] Verify: tapping a mood updates the display and pushes to history

### Phase 3 — Module 3: Lists, Themes & Polish (35 min)

- [ ] Build `HistoryList` with `FlatList`
- [ ] Build `ThemeToggle` component
- [ ] Add `isDarkMode` state and theme color logic
- [ ] Apply theme colors across all components
- [ ] Polish: selected-card highlight, empty-state messages, spacing

---

## 7 · Starter vs. Solution Code Strategy

| Variant | Contents | Purpose |
|---|---|---|
| **Starter** | Scaffolded files with `// TODO` comments and empty function bodies | Attendees fill in the blanks during the workshop |
| **Solution** | Fully working implementation | Reference for instructors; attendees can compare after each module |

> [!IMPORTANT]
> The starter code should compile and run at every stage — even if components render placeholder text — so attendees always have a working app on their phone.

---

## 8 · Key React Native APIs Referenced

| API | Import From | Used In |
|---|---|---|
| `View` | `react-native` | All components |
| `Text` | `react-native` | All components |
| `Pressable` | `react-native` | `MoodCard`, `ThemeToggle` |
| `FlatList` | `react-native` | `HistoryList` |
| `StyleSheet` | `react-native` | All components |
| `SafeAreaView` | `react-native` | `app/index.js` |
| `useState` | `react` | `app/index.js` |

---

## 9 · Extension Points (Post-Workshop)

These map to the **Intermediate & Advanced** sections in the lesson plan. No code is provided for these during the core workshop, but the architecture above is designed to accommodate them:

| Extension | Where It Plugs In |
|---|---|
| **Navigation** (`expo-router`) | Split `index.js` into Home + History screens |
| **Persistent Storage** (`AsyncStorage`) | Load/save `history` array in `useEffect` |
| **Animations** (`react-native-reanimated`) | Animate `MoodDisplay` on mood change |
| **API Integration** (`fetch`) | Replace `QUOTES` constant with live API call |
| **Context / Global State** | Lift theme into a `ThemeContext` provider |
| **TypeScript** | Rename `.js` → `.tsx`, add interfaces for props |
