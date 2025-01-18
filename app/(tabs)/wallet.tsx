import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { baseColors } from "@/styles/colors/baseColors";
import metamaskLogo from "../../assets/images/METAMASKwithlogo.png";
import disconnectIcon from "../../assets/images/disconnect.png";

export default function MetaMaskScreen() {
  const walletAddress = "0x7e5f45b76F13bD48c3565e3E487fDD4151d8cA58";

  const handleCopy = () => {
    console.log("Address copied:", walletAddress);
  };

  const handleDisconnect = () => {
    console.log("Wallet disconnected.");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={metamaskLogo} style={styles.metamaskLogo} />
        <Text style={styles.balanceText}>0.08 ETH</Text>
      </View>

      {/* Center Content */}
      <View style={styles.centerContent}>
        {/* Wallet Address */}
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>{walletAddress}</Text>
          <TouchableOpacity style={styles.copyButton} onPress={handleCopy}>
            <Text style={styles.copyButtonText}>Copy</Text>
          </TouchableOpacity>
        </View>

        {/* Disconnect Button */}
        <TouchableOpacity style={styles.disconnectButton} onPress={handleDisconnect}>
          <Image source={disconnectIcon} style={styles.disconnectIcon} />
          <Text style={styles.disconnectText}>Disconnect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1B22",
    alignItems: "center",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 40, // Keeps the header at the top
    marginBottom: 16,
  },
  metamaskLogo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  balanceText: {
    fontSize: 20,
    color: baseColors.white,
    fontWeight: "bold",
  },
  centerContent: {
    flex: 1, // Fills the remaining space to center content vertically
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00CB6B33", // Updated background color
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 24,
    width: "90%",
    justifyContent: "space-between",
  },
  addressText: {
    fontSize: 14,
    color: baseColors.white,
    flex: 1,
    marginRight: 10,
  },
  copyButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: baseColors.white,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  copyButtonText: {
    fontSize: 14,
    color: baseColors.white,
    fontWeight: "bold",
  },
  disconnectButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D8315B26", // Button background color
    borderWidth: 1,
    borderColor: "#D8315B", // Border color
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: "90%",
  },
  disconnectIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 8,
  },
  disconnectText: {
    fontSize: 16,
    color: "#D8315B",
    fontWeight: "bold",
  },
});