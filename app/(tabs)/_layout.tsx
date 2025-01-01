import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet, Image, ImageSourcePropType, View } from "react-native";
import home from "../../assets/images/home.png"; // Fixed variable name
import clock from "../../assets/images/clock.png"; // Fixed variable name
import parking from "../../assets/images/parkinglogo.png"; // Fixed variable name
import wallet from "../../assets/images/wallet.png"; // Fixed variable name
import user from "../../assets/images/user.png"; // Fixed variable name
import { baseColors } from "@/styles/colors/baseColors";

export default function TabLayout() {
  // Define the tab icons with route names as keys
  const tabIcons: Record<string, ImageSourcePropType> = {
    index: home,
    clock: clock,
    parking: parking,
    wallet: wallet,
    profile: user,
  };

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBar,
        headerShown: false, // Hide app bar globally
        tabBarIcon: ({ focused }) => {
          const icon = tabIcons[route.name]; // Safely access the icon
          return (
            <View
              style={[
                styles.iconContainer,
                focused && styles.iconContainerFocused, // Apply focus styles
              ]}
            >
              <Image
                source={icon}
                style={[
                  styles.icon,
                  { tintColor: focused ? baseColors.black : baseColors.white },
                ]}
              />
            </View>
          );
        },
        tabBarShowLabel: false, // Hide labels
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="clock" options={{ title: "History" }} />
      <Tabs.Screen name="parking" options={{ title: "Parking" }} />
      <Tabs.Screen name="wallet" options={{ title: "Wallet" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#111D13", // Semi-transparent green background
    borderTopWidth: 0, // Remove top border
    height: 70, // Height of the tab bar
    paddingVertical: 10, // Add vertical padding
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconContainer: {
    width: 40, // Default width
    height: 40, // Default height
    padding: 8, // Default padding
    gap: 10,
    borderRadius: 8, // Default border radius
    opacity: 1, // Default opacity
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainerFocused: {
    backgroundColor: baseColors.primaryGreen, // Focused background color
    opacity: 1, // Ensure the focused icon is fully visible
  },
  icon: {
    width: 24, // Icon width
    height: 24, // Icon height
    resizeMode: "contain", // Keep aspect ratio
  },
});