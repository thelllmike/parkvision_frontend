import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Wallet Screen</Text>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});