import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { globalStyles } from "@/styles/globalStyles";

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

      {/* Title */}
      <Text style={styles.title}>Login With Your Wallet To Start Using App</Text>

      {/* Parking Illustration */}
      <Image
        source={require("../assets/images/Parking.png")} // Parking illustration
        style={styles.illustration}
        resizeMode="contain"
      />

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
    backgroundColor: globalStyles.backgroundDark,
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  logo: {
    width: 150, // Adjust width
    height: 150, // Adjust height
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: globalStyles.textPrimary,
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
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  metamaskButton: {
    backgroundColor: globalStyles.buttonPrimary,
    borderColor: globalStyles.buttonPrimary,
  },
  binanceButton: {
    backgroundColor: globalStyles.textSecondary,
    borderColor: globalStyles.textSecondary,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: "contain",
  },
  buttonText: {
    color: globalStyles.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },
});