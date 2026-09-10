# React Native Launchpad — Workshop Guide

> **Goal:** You'll leave with a working app on your phone and the confidence to keep building.

---

## 1 · What You'll Build: **MoodBoard** 🎭

A personal mood-tracking app where you can:

| Feature | What You'll Learn |
|---|---|
| Pick an emoji mood from a grid | Tappable components, event handlers |
| See your selected mood displayed large with a motivational quote | State (`useState`, Context), conditional rendering |
| Toggle between a light & dark color theme | Dynamic styling, color tokens, theme state |
| View a scrollable history of your past mood picks | `FlatList`, array state, lists |

---

## 2 · What We'll Cover

| Module | What You'll Do |
|---|---|
| **Module 1 — Setup & Building Blocks** | Get Expo Go installed, clone the repo, and run `npx expo start` to confirm your setup works. Learn about components, JSX, and props by building `<MoodCard>` (`components/MoodCard.js`). Style it with `StyleSheet.create` and Flexbox basics. |
| **Module 2 — State & Interactivity** | Build the emoji mood grid (`components/MoodGrid.js`) and mood display (`components/MoodDisplay.js`). Make cards tappable — when a mood is selected, update state via `context/mood-context.js` and display it prominently with a motivational quote. Learn the re-rendering model: call setter → component re-draws. |
| **Module 3 — Lists, Themes & Polish** | Build the mood history list (`components/HistoryList.js`) with `FlatList` on the History tab. Build the theme switch (`components/ThemeToggle.js`) to toggle light/dark mode across the app using theme tokens. |
| **🏆 Mini Demo Showdown** | Show your app to the group — what you customized, a feature you're proud of, or something that surprised you. |
| **Wrap-Up & Next Steps** | Quick recap of what was built. Resources for continuing your journey. Q&A. |

---

## 3 · Core Concepts Covered

These are the foundational topics you'll learn during the session:

### 3.1 — What is React Native?

- JavaScript framework for building native mobile apps
- One codebase → iOS + Android + Web
- Expo simplifies the toolchain (no Xcode / Android Studio needed to start)

### 3.2 — Components & JSX

- Components are reusable building blocks (functions that return UI)
- JSX = HTML-like syntax inside JavaScript
- Built-in components: `View`, `Text`, `Image`, `ScrollView`

### 3.3 — Props

- How parent components pass data down to children
- Read-only — a child never modifies its own props
- Think of props like settings on a LEGO brick's instruction card

### 3.4 — State (`useState` & Context)

- How a component remembers things that can change
- Calling the setter triggers a re-render
- State can be local (`useState`) or shared across screens (`createContext` + `useContext`)

### 3.5 — Styling with `StyleSheet`

- `StyleSheet.create({})` for defining styles
- Flexbox layout model (`flex`, `flexDirection`, `justifyContent`, `alignItems`)
- Dynamic styling based on theme tokens and active state

### 3.6 — Handling User Input

- `Pressable` for modern tappable elements with interactive state styling (`pressed`)
- `onPress` event handler
- `TextInput` for typed input

### 3.7 — Lists

- `FlatList` for performant scrollable lists
- `data`, `renderItem`, and `keyExtractor` props
- When to use `FlatList` vs. `ScrollView`

---

## 4 · Keep Going: Intermediate & Advanced Extensions

Finished the workshop and want to keep building? Here's what to explore next:

### Intermediate

| Topic | Description | Key Concepts |
|---|---|---|
| **Stack / Detail Navigation** | Add a detailed view or modal screen for inspecting past mood entries using React Navigation Stack navigator. | Stack navigator, modal presentation, route params |
| **Persistent Storage** | Save mood history so it survives app restarts using `@react-native-async-storage/async-storage`. | `AsyncStorage.setItem` / `getItem`, `useEffect` for loading data on mount |
| **Haptics & Sound** | Add tactile feedback when tapping mood cards and toggling themes using `expo-haptics`. | `Haptics.impactAsync`, sensory UX |
| **Animations** | Animate mood selection and quote transitions with `react-native-reanimated`. | Spring animations, layout transitions, shared values |
| **Mood Journaling & Notes** | Add a "journal entry" text field when logging a mood. Validate that it's not empty. | `TextInput`, controlled components, form validation |

### Advanced

| Topic | Description | Key Concepts |
|---|---|---|
| **API Integration** | Fetch motivational quotes or daily affirmations from a public API instead of static constants. | `fetch`, `useEffect`, loading/error states, async/await |
| **Global State Management** | Scale state management from React Context to libraries like Zustand or Redux Toolkit. | Store slices, selectors, action dispatches |
| **TypeScript** | Convert the app to TypeScript for compile-time type safety. | Interfaces, type annotations, generics basics |
| **Testing** | Write unit tests for components with Jest and React Native Testing Library. | `render`, `fireEvent`, snapshot testing |
| **Deployment** | Build and publish to the Expo Store or generate an APK/IPA with EAS Build. | `eas build`, app.json configuration, OTA updates |
| **Backend & Auth** | Connect to Firebase or Supabase for user accounts and cloud storage of mood data. | Auth flow, Firestore/Postgres, environment variables |

---

## 5 · Prerequisites & Setup Checklist

Make sure you have the following ready **before** the session:

- [ ] **Node.js (v20.19.4)** installed — [https://nodejs.org](https://nodejs.org)
- [ ] **Expo Go** app installed on your phone (iOS App Store / Google Play)
- [ ] A code editor — **VS Code** recommended ([https://code.visualstudio.com](https://code.visualstudio.com))
- [ ] A terminal / command line you're comfortable opening
- [ ] (Optional) Git installed for cloning the starter repo

---

## 6 · Repository Structure

```text
react-native-launchpad/
├── App.js                     # Entry point — tab navigation & theme provider (pre-built)
├── screens/
│   ├── HomeScreen.js          # Main screen layout (pre-built)
│   └── HistoryScreen.js       # History screen layout (pre-built)
├── components/
│   ├── MoodCard.js            # ✏️ TODO Module 1 — build the emoji card
│   ├── MoodGrid.js            # ✏️ TODO Module 2 — render the card grid
│   ├── MoodDisplay.js         # ✏️ TODO Module 2 — show selected mood + quote
│   ├── HistoryList.js         # ✏️ TODO Module 3 — build the FlatList
│   ├── ThemeToggle.js         # ✏️ TODO Module 3 — build the toggle button
│   └── ui/
│       ├── icon-symbol.js     # Tab icon component (pre-built)
│       └── icon-symbol.ios.js # iOS SF Symbols icon variant (pre-built)
├── context/
│   └── mood-context.js        # ✏️ TODO Module 2 & 3 — write state logic
├── constants/
│   ├── moods.js               # Emoji + label data (pre-built)
│   ├── quotes.js              # Motivational quotes (pre-built)
│   └── theme.js               # Color tokens (pre-built)
├── hooks/
│   └── use-color-scheme.js    # Color scheme hook (pre-built)
├── assets/                    # Images, fonts, etc.
├── docs/
│   ├── code-plan.md           # Technical implementation guide
│   ├── lesson-plan.md         # ← You are here
│   └── setup-guide.md         # Beginner setup guide
├── app.json                   # Expo configuration
├── jsconfig.json              # Path alias configuration (@/*)
├── package.json
└── README.md
```
