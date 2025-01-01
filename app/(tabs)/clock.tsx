import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to History Screen</Text>
    </View>
  );
};

export default HistoryScreen;

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