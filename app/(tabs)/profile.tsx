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

// Import Thirdweb hooks from the official package
import { useContract, useContractWrite } from "@thirdweb-dev/react";

// Replace with your deployed contract address
const contractAddress = "0xYourContractAddressHere";

export default function ProfileScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState("Jon Doe");
  const [vehicleNumber, setVehicleNumber] = useState("WY65IHK");

  // Get the contract instance using Thirdweb hook
  const { contract } = useContract(contractAddress);
  // Prepare the write function for calling registerUserAndVehicle
  const { mutate: registerUserAndVehicle } = useContractWrite(
    contract,
    "registerUserAndVehicle"
  );

  const handleEditPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleUpdate = () => {
    // Pass an object with an args property containing the parameters.
    registerUserAndVehicle(
      { args: [userName, vehicleNumber] },
      {
        onSuccess: () => {
          alert("Profile updated successfully!");
          setModalVisible(false);
        },
        onError: (error) => {
          console.error(error);
          alert("Error updating profile");
        },
      }
    );
  };

  return (
    <View
      style={[
        styles.container,
        isModalVisible && { backgroundColor: "#111D1380" },
      ]}
    >
      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image source={profile} style={styles.profileImage} />
      </View>

      {/* User Details */}
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.userDetails}>
        {vehicleNumber} - Honda CRV
      </Text>

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
            <TouchableOpacity
              onPress={handleCloseModal}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            {/* Input Fields */}
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor={baseColors.white}
              value={userName}
              onChangeText={setUserName}
            />
            <TextInput
              style={styles.input}
              placeholder="Vehicle Number"
              placeholderTextColor={baseColors.white}
              value={vehicleNumber}
              onChangeText={setVehicleNumber}
            />

            {/* Update Button */}
            <TouchableOpacity
              style={styles.updateButton}
              onPress={handleUpdate}
            >
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
    backgroundColor: "#111D1380",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#141421",
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
  updateButtonText: {
    fontSize: 16,
    color: baseColors.primaryGreen,
    fontWeight: "bold",
  },
});
