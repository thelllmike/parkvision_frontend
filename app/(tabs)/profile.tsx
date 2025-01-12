import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import { baseColors } from "@/styles/colors/baseColors";
import profile from "../../assets/images/profile.png"; // Profile image
import editIcon from "../../assets/images/edit.png"; // Edit button icon

export default function ProfileScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleEditPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View
      style={[
        styles.container,
        isModalVisible && { backgroundColor: "#111D1380" }, // Dark overlay when modal is open
      ]}
    >
      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image source={profile} style={styles.profileImage} />
      </View>

      {/* User Details */}
      <Text style={styles.userName}>Jon Doe</Text>
      <Text style={styles.userDetails}>WY65IHK - Honda CRV</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
        <Image source={editIcon} style={styles.editIcon} />
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Modal for Editing Profile */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Update Profile</Text>
            <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            {/* Input Fields */}
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor={baseColors.white}
              defaultValue="Jon Doe"
            />
            <TextInput
              style={styles.input}
              placeholder="Vehicle"
              placeholderTextColor={baseColors.white}
              defaultValue="Honda CRV"
            />
            <TextInput
              style={styles.input}
              placeholder="License"
              placeholderTextColor={baseColors.white}
              defaultValue="WY65IHK"
            />

            {/* Update Button */}
            <TouchableOpacity style={styles.updateButton} onPress={handleCloseModal}>
              <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    borderRadius: 100,
    padding: 4,
    marginBottom: 16,
    shadowColor: "#111D13",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    elevation: 4,
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
    elevation: 4,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "#111D1380", // Dark overlay background
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#141421", // Solid BG Blue
    padding: 20,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    position: "relative",
  },
  modalTitle: {
    fontSize: 18,
    color: baseColors.primaryGreen,
    fontWeight: "bold",
    marginBottom: 16,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: baseColors.white,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: baseColors.primaryGreen,
    borderRadius: 8,
    width: "100%",
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: baseColors.white,
  },
  updateButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: baseColors.primaryGreen, // Green border
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: "#111D13",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    elevation: 4,
    backgroundColor: "transparent", // Transparent background for consistency
  },
  updateButtonText: {
    fontSize: 16,
    color: baseColors.primaryGreen,
    fontWeight: "bold",
  },
});