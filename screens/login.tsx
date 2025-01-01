import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { baseColors } from "@/styles/colors/baseColors"; // Import baseColors

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/icon.png")} // App logo
          style={styles.logo}
        />
      </View>

      {/* Parking Illustration */}
      <Image
        source={require("../assets/images/Parking.png")} // Parking illustration
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Login With Your Wallet To Start Using App</Text>

      {/* Wallet Buttons */}
      <View style={styles.buttonsContainer}>
        {/* Metamask Button */}
        <TouchableOpacity style={[styles.button, styles.metamaskButton]}>
          <Image
            source={require("../assets/images/metamask.png")} // Metamask PNG
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Metamask</Text>
        </TouchableOpacity>

        {/* Binance Button */}
        <TouchableOpacity style={[styles.button, styles.binanceButton]}>
          <Image
            source={require("../assets/images/binance.png")} // Binance PNG
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Binance</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColors.blue, // Use the blue color from baseColors
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  logo: {
    width: 250, // Adjust width
    height: 150, // Adjust height
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: baseColors.white, // Use white color for text
    textAlign: "center",
    marginVertical: 20,
  },
  illustration: {
    width: "90%", // Full width with some padding
    height: 250, // Adjust height for visibility
    marginVertical: 20, // Space around the illustration
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    gap: 10,
    width: 380, // Fixed width for the button
    height: 53, // Fixed height for the button
    borderRadius: 8, // Rounded corners
    borderWidth: 1, // Border width
    shadowColor: baseColors.green, // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.5, // Shadow transparency
    shadowRadius: 16, // Shadow spread
    elevation: 5, // Shadow for Android
    marginBottom: 35, // Add space between buttons
  },
  metamaskButton: {
    backgroundColor: baseColors.green, // Button background color
    borderColor: baseColors.primaryGreen, // Border color for Metamask button
  },
  binanceButton: {
    backgroundColor: baseColors.green, // Button background color
    borderColor: baseColors.primaryGreen, // Border color for Binance button
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: "contain",
  },
  buttonText: {
    color: baseColors.primaryGreen, // Text color
    fontSize: 16,
    fontWeight: "bold",
  },
});