import React from "react";
import { View, Text, Button } from "react-native";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

// Replace with your deployed contract address
const contractAddress = "0xYourContractAddressHere";

export default function ParkingFeeScreen() {
  const { contract, isLoading } = useContract(contractAddress);
  const { mutate: payFee } = useContractWrite(contract, "payFee");

  if (isLoading) return <Text>Loading contract...</Text>;

  const handlePayFee = async () => {
    try {
      await payFee({ args: ["L0205"] }); // pass the required parameters
      alert("Fee paid successfully!");
    } catch (error) {
      console.error(error);
      alert("Error paying fee");
    }
  };

  return (
    <View>
      <Text>Parking Fee Payment</Text>
      <Button title="Pay Fee" onPress={handlePayFee} />
    </View>
  );
}
