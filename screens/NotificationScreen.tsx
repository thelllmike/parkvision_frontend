import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { baseColors } from "@/styles/colors/baseColors";
import completedIcon from "../../assets/images/completed.png";
import violationIcon from "../../assets/images/violation.png";
import markReadIcon from "../../assets/images/markread.png";
import backIcon from "../../assets/images/back.png";

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={styles.markReadButton}>
          <Image source={markReadIcon} style={styles.markReadIcon} />
          <Text style={styles.markReadText}>Mark All Read</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Violation Notification */}
        <View style={[styles.notificationCard, styles.violationCard]}>
          <View style={styles.notificationHeader}>
            <Image source={violationIcon} style={styles.icon} />
            <Text style={styles.violationTitle}>Violation</Text>
            <Text style={styles.notificationAmount}>Charged 0.001 ETH</Text>
          </View>
          <Text style={styles.notificationMessage}>
            You received a violation for incorrect parked slot.
          </Text>
          <Text style={styles.notificationTime}>3.23 PM</Text>
        </View>

        {/* Completed Notifications */}
        {[...Array(4)].map((_, index) => (
          <View key={index} style={[styles.notificationCard, styles.completedCard]}>
            <View style={styles.notificationHeader}>
              <Image source={completedIcon} style={styles.icon} />
              <Text style={styles.completedTitle}>Completed</Text>
              <Text style={styles.notificationAmount}>Paid 0.008 ETH</Text>
            </View>
            <Text style={styles.notificationMessage}>
              Your payment received for <Text style={styles.highlight}>L0205</Text> parking at Level
              02, Red Desert Avenue in Del Perro, Los Santos.
            </Text>
            <Text style={styles.notificationTime}>12.10.2024</Text>
          </View>
        ))}

        {/* Unread Notifications Header */}
        <Text style={styles.unreadHeader}>Unread Notifications</Text>

        {/* Unread Completed Notifications */}
        {[...Array(3)].map((_, index) => (
          <View key={index} style={[styles.notificationCard, styles.completedCard]}>
            <View style={styles.notificationHeader}>
              <Image source={completedIcon} style={styles.icon} />
              <Text style={styles.completedTitle}>Completed</Text>
              <Text style={styles.notificationAmount}>Paid 0.008 ETH</Text>
            </View>
            <Text style={styles.notificationMessage}>
              Your payment received for <Text style={styles.highlight}>L0205</Text> parking at Level
              02, Red Desert Avenue in Del Perro, Los Santos.
            </Text>
            <Text style={styles.notificationTime}>12.10.2024</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColors.blue,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  headerTitle: {
    fontSize: 20,
    color: baseColors.white,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  markReadButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  markReadIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
    resizeMode: "contain",
  },
  markReadText: {
    fontSize: 14,
    color: baseColors.primaryGreen,
    fontWeight: "bold",
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  notificationCard: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  notificationHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: "contain",
  },
  violationCard: {
    backgroundColor: "#D8315B1A",
    borderColor: "#D8315B",
    borderWidth: 1,
  },
  violationTitle: {
    fontSize: 16,
    color: "#D8315B",
    fontWeight: "bold",
  },
  completedCard: {
    backgroundColor: "#454ADE1A",
    borderColor: "#454ADE",
    borderWidth: 1,
  },
  completedTitle: {
    fontSize: 16,
    color: "#454ADE",
    fontWeight: "bold",
  },
  notificationAmount: {
    fontSize: 14,
    color: baseColors.white,
    fontWeight: "bold",
  },
  notificationMessage: {
    fontSize: 14,
    color: baseColors.white,
    marginVertical: 8,
  },
  highlight: {
    color: baseColors.primaryGreen,
    fontWeight: "bold",
  },
  notificationTime: {
    fontSize: 12,
    color: baseColors.white,
    opacity: 0.7,
  },
  unreadHeader: {
    fontSize: 16,
    color: baseColors.white,
    fontWeight: "bold",
    marginVertical: 8,
  },
});