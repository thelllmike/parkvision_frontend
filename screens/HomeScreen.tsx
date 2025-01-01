import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import alertColors from "@/styles/colors/alertColors";
import { baseColors } from "@/styles/colors/baseColors";
import carpark from "../../assets/images/carpark.png";
import notification from "../../assets/images/notification.png";
import clock from "../../assets/images/clock.png";
import background from "../../assets/images/background.png";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome Back, Jon!</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Image source={notification} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Current Parking Card */}
      <View style={styles.currentCard}>
        <Image source={background} style={styles.background} />
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Image source={carpark} style={styles.carparkIcon} />
            <Text style={styles.cardTitle}>L0205</Text>
          </View>
          <Text style={styles.cardText}>Parked Time: 12.10 PM</Text>
          <Text style={styles.cardText}>Left Time: 03.00 PM</Text>
          <Text style={styles.cardLocation}>Level 02, Red Desert Avenue In Del Perro, Los Santos.</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.cardTotal}>Total: 0.005 ETH</Text>
            <TouchableOpacity style={styles.historyButton}>
              <Text style={styles.historyButtonText}>View History</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Recent Section */}
      <View style={styles.recentSection}>
        <View style={styles.recentHeader}>
          <Text style={styles.recentTitle}>Recent</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        {[...Array(3)].map((_, index) => (
          <View key={index} style={styles.recentCard}>
            <View style={styles.cardHeader}>
              <Image source={carpark} style={styles.carparkIcon} />
              <Text style={styles.cardTitle}>L0205</Text>
            </View>
            <Text style={styles.cardText}>Parked Time: 1h 2min</Text>
            <Text style={styles.cardLocation}>Level 02, Red Desert Avenue In Del Perro, Los Santos.</Text>
            <Text style={styles.cardTotal}>Total: 0.001 ETH</Text>
          </View>
        ))}
      </View>

      {/* Violation Fees */}
      <View style={styles.violationCard}>
        <Text style={styles.violationTitle}>Violation Fees</Text>
        <Text style={styles.violationDescription}>
          You got 3 violations and deducted it by your wallet.
        </Text>
        <Text style={styles.violationTotal}>Total: 0.003 ETH</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1B22",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  greeting: {
    fontSize: 20,
    color: baseColors.white,
    fontWeight: "bold",
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 23,
    backgroundColor: baseColors.primaryGreen,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  currentCard: {
    backgroundColor: "#111D13",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
  cardContent: {
    padding: 16,
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
  },
  cardLocation: {
    fontSize: 12,
    color: baseColors.white,
    opacity: 0.7,
    marginTop: 4,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  cardTotal: {
    fontSize: 16,
    color: baseColors.primaryGreen,
    fontWeight: "bold",
  },
  historyButton: {
    backgroundColor: baseColors.primaryGreen,
    padding: 8,
    borderRadius: 4,
  },
  historyButtonText: {
    color: baseColors.white,
    fontSize: 12,
  },
  recentSection: {
    marginBottom: 16,
  },
  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  recentTitle: {
    fontSize: 18,
    color: baseColors.white,
    fontWeight: "bold",
  },
  viewAllText: {
    fontSize: 14,
    color: baseColors.primaryGreen,
  },
  recentCard: {
    backgroundColor: "#111D13",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  violationCard: {
    backgroundColor: "#D8315B1A",
    borderRadius: 8,
    padding: 12,
    borderColor: alertColors.error,
    borderWidth: 1,
  },
  violationTitle: {
    fontSize: 18,
    color: alertColors.error,
    fontWeight: "bold",
  },
  violationDescription: {
    fontSize: 14,
    color: baseColors.white,
    marginVertical: 4,
  },
  violationTotal: {
    fontSize: 16,
    color: alertColors.error,
    fontWeight: "bold",
  },
});