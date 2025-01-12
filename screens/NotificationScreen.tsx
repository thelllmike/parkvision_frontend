import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler"; // Import swipeable
import { baseColors } from "@/styles/colors/baseColors";
import completedIcon from "../../assets/images/completed.png";
import violationIcon from "../../assets/images/violation.png";
import markReadIcon from "../../assets/images/markread.png";
import backIcon from "../../assets/images/back.png";
import deleteIcon from "../../assets/images/delete.png";

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "violation",
      title: "Violation",
      message: "You received a violation for incorrect parked slot.",
      amount: "Charged 0.001 ETH",
      time: "3.23 PM",
      backgroundColor: "#D8315B1A",
      borderColor: "#D8315B",
      titleColor: "#D8315B",
    },
    {
      id: 2,
      type: "completed",
      title: "Completed",
      message:
        "Your payment received for L0205 parking at Level 02, Red Desert Avenue in Del Perro, Los Santos.",
      amount: "Paid 0.008 ETH",
      time: "12.10.2024",
      backgroundColor: "#454ADE1A",
      borderColor: "#454ADE",
      titleColor: "#454ADE",
    },
    {
      id: 3,
      type: "completed",
      title: "Completed",
      message:
        "Your payment received for L0205 parking at Level 02, Red Desert Avenue in Del Perro, Los Santos.",
      amount: "Paid 0.008 ETH",
      time: "12.10.2024",
      backgroundColor: "#454ADE1A",
      borderColor: "#454ADE",
      titleColor: "#454ADE",
    },
  ]);

  const handleDelete = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const renderRightActions = (id: number) => (
    <TouchableOpacity
      style={styles.clearButton}
      onPress={() => handleDelete(id)}
    >
      <Image source={deleteIcon} style={styles.deleteIcon} />
      <Text style={styles.clearText}>Clear</Text>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
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
        {notifications.map((notification) => (
          <Swipeable
            key={notification.id}
            renderRightActions={() => renderRightActions(notification.id)}
          >
            <View
              style={[
                styles.notificationCard,
                {
                  backgroundColor: notification.backgroundColor,
                  borderColor: notification.borderColor,
                },
              ]}
            >
              <View style={styles.notificationHeader}>
                <Image
                  source={
                    notification.type === "violation"
                      ? violationIcon
                      : completedIcon
                  }
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.notificationTitle,
                    { color: notification.titleColor },
                  ]}
                >
                  {notification.title}
                </Text>
                <Text style={styles.notificationAmount}>
                  {notification.amount}
                </Text>
              </View>
              <Text style={styles.notificationMessage}>
                {notification.message}
              </Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
          </Swipeable>
        ))}
      </ScrollView>
    </GestureHandlerRootView>
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
    borderWidth: 1,
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
  notificationTitle: {
    fontSize: 16,
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
  notificationTime: {
    fontSize: 12,
    color: baseColors.white,
    opacity: 0.7,
  },
  clearButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D8315B1A",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#D8315B",
  },
  deleteIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
    resizeMode: "contain",
  },
  clearText: {
    fontSize: 14,
    color: "#D8315B",
    fontWeight: "bold",
  },
});