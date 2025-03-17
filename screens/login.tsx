import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createThirdwebClient } from "thirdweb";
import { createWallet, injectedProvider } from "thirdweb/wallets";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App"; // Adjust path as needed

// Replace with your actual Thirdweb client ID
const clientId = "YOUR_CLIENT_ID";
// Create Thirdweb client instance
const client = createThirdwebClient({ clientId });
// Create wallet instance (using MetaMask's wallet id as an example)
const wallet = createWallet("io.metamask");

// Define a type for your navigation prop
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async () => {
    try {
      // Check if an injected wallet (like MetaMask) is available
      if (injectedProvider("io.metamask")) {
        await wallet.connect({ client });
      } else {
        // Otherwise, open WalletConnect modal
        await wallet.connect({
          client,
          walletConnect: { showQrModal: true },
        });
      }
      // Navigate to HomeScreen by passing a string, not an array
      navigation.navigate("Home");
    } catch (error) {
      console.error("Wallet connection error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login with Wallet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1B22",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00CB6B",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
