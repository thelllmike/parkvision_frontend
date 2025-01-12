import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { baseColors } from "@/styles/colors/baseColors";
import profile from "../../assets/images/profile.png"; // Profile image
import editIcon from "../../assets/images/edit.png"; // Edit button icon

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image source={profile} style={styles.profileImage} />
      </View>

      {/* User Details */}
      <Text style={styles.userName}>Jon Doe</Text>
      <Text style={styles.userDetails}>WY65IHK - Honda CRV</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Image source={editIcon} style={styles.editIcon} />
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColors.blue,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  profileImageContainer: {
    borderWidth: 3,
    borderColor: baseColors.primaryGreen,
    borderRadius: 100, // Makes the container round
    padding: 4, // Adds space around the image
    marginBottom: 16,
    shadowColor: "#111D13",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    elevation: 4, // For Android shadow
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: "cover",
  },
  userName: {
    fontSize: 20,
    color: baseColors.white,
    fontWeight: "bold",
    marginBottom: 8,
  },
  userDetails: {
    fontSize: 14,
    color: baseColors.white,
    opacity: 0.7,
    marginBottom: 24,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: baseColors.primaryGreen,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: "#111D13",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    elevation: 4, // For Android shadow
    backgroundColor: "transparent",
  },
  editIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    resizeMode: "contain",
  },
  editButtonText: {
    fontSize: 16,
    color: baseColors.primaryGreen,
    fontWeight: "bold",
  },
});