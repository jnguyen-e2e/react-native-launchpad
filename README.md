# 🚀 React Native Launchpad — MoodBoard

A beginner-friendly, modern React Native & Expo starter app and workshop project. Build a polished **MoodBoard** personal mood tracker with tabs, theming, interactive emoji grids, motivational quotes, and mood history.

Built with **Expo SDK 54**, **React 19**, **React Native 0.81** (New Architecture enabled), and **React Navigation v7 (Static API)**.

---

## ✨ Features

- 🎭 **Mood Picker Grid** — Interactive emoji grid to select your current mood.
- 💬 **Motivational Quotes** — Displays your active mood prominently paired with contextual motivational quotes.
- 📜 **Mood History** — Scrollable timeline of past mood entries using `FlatList`.
- 🌓 **Light & Dark Theme** — Built-in dynamic theming with support for system preferences and manual toggling.
- 🧭 **React Navigation v7** — Tab navigation configured with React Navigation's modern Static API.
- 📱 **Cross-Platform** — Runs seamlessly on iOS, Android, and Web.

---

## 🛠️ Tech Stack

- **Framework:** [Expo SDK 54](https://docs.expo.dev/versions/v54.0.0/)
- **Core:** React 19 / React Native 0.81 (New Architecture enabled)
- **Navigation:** `@react-navigation/native` & `@react-navigation/bottom-tabs` (Static API)
- **Language:** TypeScript
- **Icons & Haptics:** `expo-symbols`, `@expo/vector-icons`, `expo-haptics`

---

## 📁 Project Structure

```text
react-native-launchpad/
├── App.js                     # Root navigation & theme provider
├── app.json                   # Expo configuration
├── jsconfig.json              # Path alias mapping
├── screens/
│   ├── HomeScreen.js          # MoodBoard screen (picker & quote display)
│   └── HistoryScreen.js       # Mood history timeline
├── components/
│   ├── MoodCard.js            # Individual emoji mood card
│   ├── MoodGrid.js            # Grid layout for mood cards
│   ├── MoodDisplay.js         # Selected mood banner & quote display
│   ├── HistoryList.js         # FlatList displaying past mood entries
│   ├── ThemeToggle.js         # Dark / light mode toggle switch
│   └── ui/                    # Reusable UI primitives (icons, tabs)
├── context/
│   └── mood-context.js        # Mood state, history list, and theme context
├── constants/
│   ├── moods.js               # Mood definitions (emojis & labels)
│   ├── quotes.js              # Motivational quotes collection
│   └── theme.js               # Light & dark color tokens
└── docs/
    ├── lesson-plan.md         # 3-hour workshop timeline & core concepts
    └── code-plan.md           # Step-by-step module implementation guide
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo Go](https://expo.dev/go) app installed on your physical iOS or Android device, or a configured simulator/emulator.

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/your-username/react-native-launchpad.git
cd react-native-launchpad
npm install
```

### 2. Start the Development Server

```bash
npx expo start
```

### 3. Open the App

- **iOS / Android Device:** Scan the QR code in your terminal using the Camera app (iOS) or the Expo Go app (Android).
- **iOS Simulator:** Press `i` in the terminal.
- **Android Emulator:** Press `a` in the terminal.
- **Web Browser:** Press `w` in the terminal.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm start` / `npx expo start` | Start the Expo development server |
| `npm run ios` | Launch app in iOS Simulator |
| `npm run android` | Launch app in Android Emulator |
| `npm run web` | Start web development server |
| `npm run lint` | Run ESLint with Expo configuration |

---

## 📚 Workshop & Learning Path

This repository serves as a hands-on workshop project with complete curriculum docs located in `docs/`:

- **[Lesson Plan](docs/lesson-plan.md)**: Workshop outline covering React Native fundamentals, JSX, Props, State, Lists, and Themes.
- **[Code Plan](docs/code-plan.md)**: Step-by-step technical guide breaking down the app into 3 core modules:
  1. **Module 1 — Setup & Building Blocks:** Components, JSX, Props, and `<MoodCard>` styling.
  2. **Module 2 — State & Interactivity:** `useState`, press events, `<MoodGrid>`, and `<MoodDisplay>`.
  3. **Module 3 — Lists, Themes & Polish:** `FlatList`, `<HistoryList>`, `<ThemeToggle>`, and Context state sharing.

---

## 📝 Commit Message Format

This project follows the conventional commit message format:

```text
<type>(<scope>): <description>
```

### Types
- `feat`: for feature changes
- `fix`: for code fixes
- `docs`: for documentation
- `chore`: for non-code/config/dependency changes
- `test`: for test cases
- `refactor`: for refactoring code

---

## 📄 License

This project is licensed under the MIT License.