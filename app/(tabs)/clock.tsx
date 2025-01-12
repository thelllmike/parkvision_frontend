import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { baseColors } from "@/styles/colors/baseColors";
import carpark from "../../assets/images/carpark.png";
import location from "../../assets/images/location.png";

export default function ParkingHistory() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Text style={styles.headerTitle}>Your Parking History</Text>

      {/* Parking History Cards */}
      {[...Array(5)].map((_, index) => (
        <View key={index} style={styles.historyCard}>
          <View style={styles.cardHeader}>
            <Image source={carpark} style={styles.carparkIcon} />
            <Text style={styles.cardTitle}>L0205</Text>
          </View>
          <Text style={styles.cardText}>Parked Time: 1h 2min</Text>
          <View style={styles.cardLocationContainer}>
            <Image source={location} style={styles.locationIcon} />
            <Text style={styles.cardLocation}>
              Level 02, Red Desert Avenue In Del Perro, Los Santos.
            </Text>
          </View>
          <Text style={styles.cardTotal}>Total: 0.001 ETH</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColors.blue,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    color: baseColors.white,
    fontWeight: "bold",
    marginBottom: 16,
  },
  historyCard: {
    backgroundColor: "#F3F3F31A", // Transparent white with alpha
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)", // Subtle border
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  carparkIcon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 16,
    color: baseColors.white,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 14,
    color: baseColors.white,
    marginBottom: 8,
  },
  cardLocationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  cardLocation: {
    fontSize: 12,
    color: baseColors.white,
    opacity: 0.7,
  },
  cardTotal: {
    fontSize: 16,
    color: baseColors.white,
    fontWeight: "bold",
    textAlign: "right",
  },
});