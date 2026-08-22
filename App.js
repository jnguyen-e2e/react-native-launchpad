import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import { MoodProvider } from '@/context/mood-context';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import HomeScreen from '@/screens/HomeScreen';
import HistoryScreen from '@/screens/HistoryScreen';

/**
 * Root navigation — Bottom Tab navigator using the static API.
 * @see https://reactnavigation.org/docs/hello-react-navigation?config=static
 */
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
  );
}
