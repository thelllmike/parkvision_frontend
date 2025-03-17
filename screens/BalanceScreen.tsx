import React from "react";
import { View, Text } from "react-native";
import { useContract, useContractRead } from "@thirdweb-dev/react";

const contractAddress = "0xYourContractAddressHere";

export default function BalanceScreen() {
  const { contract, isLoading } = useContract(contractAddress);
  const { data: balance } = useContractRead(contract, "balances", ["0xUserAddressHere"]);

  if (isLoading) return <Text>Loading balance...</Text>;

  return (
    <View>
      <Text>Your Balance: {balance ? balance.toString() : "0"} Wei</Text>
    </View>
  );
}
