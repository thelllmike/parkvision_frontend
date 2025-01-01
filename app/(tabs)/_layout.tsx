import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet, Image, ImageSourcePropType } from "react-native";
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
            <Image
              source={icon}
              style={[
                styles.icon,
                { tintColor: focused ? baseColors.primaryGreen : baseColors.white },
              ]}
            />
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
    backgroundColor: "#00CB6B33", // Semi-transparent green background
    borderTopWidth: 0, // Remove top border
    height: 70, // Height of the tab bar
    paddingVertical: 10, // Add vertical padding
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    width: 24, // Icon width
    height: 24, // Icon height
    resizeMode: "contain", // Keep aspect ratio
  },
});