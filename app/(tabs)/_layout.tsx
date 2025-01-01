import React, { useEffect } from 'react';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '@/hooks/useColorScheme'; // Custom hook for light/dark theme
import { Colors } from '@/constants/Colors'; // Color constants
import { TabBarIcon } from '@/components/navigation/TabBarIcon'; // Tab icons component

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme(); // Get current color scheme (light/dark)

  useEffect(() => {
    // Simulate loading and hide the splash screen after resources are loaded
    async function prepare() {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second loading
      await SplashScreen.hideAsync(); // Hide the splash screen
    }
    prepare();
  }, []);

  return (
    <View style={styles.container}>
      {/* Define Tab Navigation */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerShown: false, // Hide header for all screens
        }}
      >
        {/* Tab 1: Connect */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Connect',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'wallet' : 'wallet-outline'} color={color} />
            ),
          }}
        />

        {/* Tab 2: Read */}
        <Tabs.Screen
          name="read"
          options={{
            title: 'Read',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'reader' : 'reader-outline'} color={color} />
            ),
          }}
        />

        {/* Tab 3: Write */}
        <Tabs.Screen
          name="write"
          options={{
            title: 'Write',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

// Styles for the layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});