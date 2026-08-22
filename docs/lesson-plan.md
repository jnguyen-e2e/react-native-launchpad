# React Native Launchpad — Workshop Plan


> **Goal:** You'll leave with a working app on your phone and the confidence to keep building.

---

## 1 · What You'll Build: **MoodBoard** 🎭

A personal mood-tracking app where you can:

| Feature | What You'll Learn |
|---|---|
| Pick an emoji mood from a grid | Tappable components, event handlers |
| See your selected mood displayed large with a motivational quote | State (`useState`), conditional rendering |
| Toggle between a light & dark color theme | Props, styling, more state |
| View a scrollable history of your past mood picks | `FlatList`, arrays in state |

---

## 2 · Session Timeline (3 h)

| Block | Duration | Topic | Details |
|---|---|---|---|
| **Module 1 — Setup & Building Blocks** | 45 min | Environment, Components, JSX, Props, Styling | Get Expo Go installed and run `npx create-expo-app@latest --template default@sdk-54`. Live-code "Hello World" to confirm setup. Then learn about components, JSX, and props by building a `<MoodCard>`. Style it with `StyleSheet.create` and Flexbox basics. |
| **Break 1** | 15 min | — | — |
| **Module 2 — State & Interactivity** | 40 min | `useState`, `Pressable` / `TouchableOpacity`, event handlers | Build the emoji mood grid. Make each card tappable — when a mood is selected, update state and display it prominently with a motivational quote. Learn the re-rendering model: call the setter → component re-draws. |
| **Break 2** | 15 min | — | — |
| **Module 3 — Lists, Themes & Polish** | 35 min | `FlatList`, arrays in state, conditional rendering, theme toggle | Build the mood history list — each pick pushes onto an array and renders via `FlatList`. Then add a light/dark mode toggle. Remaining time: customize colors, emojis, or quotes to make the app your own. |
| **🏆 Mini Demo Showdown** | 25 min | Show off your app! | Show your app to the group — what you customized, a feature you're proud of, or something that surprised you. Optional awards: "Most Creative," "Best Style," "Funniest Mood," etc. |
| **Wrap-Up & Next Steps** | 5 min | Recap, resources, Q\&A | Quick recap of what was built. Resources for continuing your journey. |

---

## 3 · Core Concepts Covered

These are the foundational topics you'll learn during the session:

### 3.1 — What is React Native?

- JavaScript framework for building native mobile apps
- One codebase → iOS + Android
- Expo simplifies the toolchain (no Xcode / Android Studio needed to start)

### 3.2 — Components & JSX

- Components are reusable building blocks (functions that return UI)
- JSX = HTML-like syntax inside JavaScript
- Built-in components: `View`, `Text`, `Image`, `ScrollView`

### 3.3 — Props

- How parent components pass data down to children
- Read-only — a child never modifies its own props
- Think of props like settings on a LEGO brick's instruction card

### 3.4 — State (`useState`)

- How a component remembers things that can change
- Calling the setter triggers a re-render
- State is local to the component that declares it

### 3.5 — Styling with `StyleSheet`

- `StyleSheet.create({})` for defining styles
- Flexbox layout model (`flex`, `flexDirection`, `justifyContent`, `alignItems`)
- Inline styles vs. stylesheet (and why stylesheets are preferred)

### 3.6 — Handling User Input

- `Pressable` (modern) and `TouchableOpacity` (classic) for tappable elements
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
| **Navigation** | Add multiple screens using `expo-router` or `@react-navigation/native`. e.g., a Home screen and a History screen. | Stack navigator, tab navigator, route params |
| **Persistent Storage** | Save mood history so it survives app restarts using `@react-native-async-storage/async-storage`. | `AsyncStorage.setItem` / `getItem`, `useEffect` for loading data on mount |
| **Custom Components** | Refactor the app into a proper component tree — `<MoodGrid>`, `<MoodDisplay>`, `<HistoryList>`, `<ThemeToggle>`. | Component composition, separation of concerns |
| **Animations** | Animate the mood selection with `react-native-reanimated` or the built-in `Animated` API. | Spring animations, layout transitions, `Animated.Value` |
| **Forms & Validation** | Add a "journal entry" text field when logging a mood. Validate that it's not empty. | `TextInput`, controlled components, basic validation logic |

### Advanced

| Topic | Description | Key Concepts |
|---|---|---|
| **API Integration** | Fetch motivational quotes from a public API instead of hardcoding them. | `fetch`, `useEffect`, loading/error states, async/await |
| **Context & Global State** | Use React Context to share the theme across the entire app without prop drilling. | `createContext`, `useContext`, provider pattern |
| **TypeScript** | Convert the app to TypeScript for type-safe props and state. | Interfaces, type annotations, generics basics |
| **Testing** | Write unit tests for components with Jest and React Testing Library. | `render`, `fireEvent`, snapshot testing |
| **Deployment** | Build and publish to the Expo Store or generate an APK/IPA with EAS Build. | `eas build`, app.json configuration, OTA updates |
| **Backend & Auth** | Connect to Firebase or Supabase for user accounts and cloud storage of mood data. | Auth flow, Firestore/Postgres, environment variables |

---

## 5 · Prerequisites & Setup Checklist

Make sure you have the following ready **before** the session:

- [ ] **Node.js v20.19.4 installed — [https://nodejs.org](https://nodejs.org)
- [ ] **Expo Go** app installed on your phone (iOS App Store / Google Play)
- [ ] A code editor — **VS Code** recommended ([https://code.visualstudio.com](https://code.visualstudio.com))
- [ ] A terminal / command line you're comfortable opening
- [ ] (Optional) Git installed for cloning the starter repo

---

## 6 · Repository Structure

```
react-native-launchpad/
├── app/                    # Expo Router app directory (or App.js for simple setup)
│   ├── index.js            # Main entry — the MoodBoard screen
│   └── components/
│       ├── MoodCard.js     # Single mood emoji card
│       ├── MoodGrid.js     # Grid of MoodCards
│       ├── MoodDisplay.js  # Large display of selected mood + quote
│       └── HistoryList.js  # FlatList of past mood selections
├── assets/                 # Images, fonts, etc.
├── docs/
│   └── lesson-plan.md      # ← You are here
├── app.json                # Expo configuration
├── package.json
└── README.md
```
