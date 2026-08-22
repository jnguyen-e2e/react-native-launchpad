import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import type { Theme } from '@react-navigation/native';

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
        tabBarIcon: ({ color }: { color: string }) => (
          <IconSymbol size={28} name="face.smiling" color={color} />
        ),
      },
    },
    History: {
      screen: HistoryScreen,
      options: {
        title: 'History',
        headerShown: false,
        tabBarIcon: ({ color }: { color: string }) => (
          <IconSymbol size={28} name="clock.fill" color={color} />
        ),
      },
    },
  },
});

const Navigation = createStaticNavigation(RootTabs);

export default function App() {
  const colorScheme = useColorScheme();
  const scheme: 'light' | 'dark' = colorScheme === 'dark' ? 'dark' : 'light';

  const theme: Theme = {
    dark: scheme === 'dark',
    colors: {
      primary: Colors[scheme].tint,
      background: Colors[scheme].background,
      card: Colors[scheme].background,
      text: Colors[scheme].text,
      border: Colors[scheme].background,
      notification: Colors[scheme].tint,
    },
    fonts: {
      regular: { fontFamily: 'System', fontWeight: '400' },
      medium: { fontFamily: 'System', fontWeight: '500' },
      bold: { fontFamily: 'System', fontWeight: '700' },
      heavy: { fontFamily: 'System', fontWeight: '800' },
    },
  };

  return (
    <SafeAreaProvider>
      <MoodProvider>
        <Navigation theme={theme} />
        <StatusBar style="auto" />
      </MoodProvider>
    </SafeAreaProvider>
  );
}
