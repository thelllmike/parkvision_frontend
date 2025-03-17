import React from "react";
import LoginScreen from "../../screens/login"; // Adjust path based on your folder structure

export default function HomeScreen() {
  return <LoginScreen />;
}

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { baseColors } from "@/styles/colors/baseColors";
// import carpark from "../../assets/images/carpark.png";
// import notification from "../../assets/images/notification.png";
// import background from "../../assets/images/background.png";
// import historyIcon from "../../assets/images/viewhistory.png";
// import violationIcon from "../../assets/images/violation.png";
// import noviolation from "../../assets/images/noviolation.png";

// export default function HomeScreen() {
//   const [hasNotification, setHasNotification] = useState(true); // Manage notifications
//   const [violations, setViolations] = useState(3); // Manage violations (set to 0 for no violations)

//   const handleNotificationClick = () => {
//     console.log("Notification clicked");
//     setHasNotification(false); // Mark notifications as cleared
//   };

//   const handleViewHistory = () => {
//     console.log("View History clicked");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Fixed Header */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>Welcome Back, Jon!</Text>
//         <TouchableOpacity
//           style={[
//             styles.notificationIcon,
//             hasNotification && styles.notificationIconActive,
//           ]}
//           onPress={handleNotificationClick}
//         >
//           <Image source={notification} style={styles.icon} />
//         </TouchableOpacity>
//       </View>

//       {/* Scrollable Content */}
//       <ScrollView
//         style={styles.scrollContainer}
//         contentContainerStyle={styles.contentContainer}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Current Parking Card */}
//         <View style={styles.currentCard}>
//           <Image source={background} style={styles.background} />
//           <View style={styles.cardContent}>
//             <View style={styles.cardHeader}>
//               <Image source={carpark} style={styles.carparkIcon} />
//               <Text style={styles.cardTitle}>L0205</Text>
//             </View>
//             <Text style={styles.cardText}>Parked Time: 12.10 PM</Text>
//             <Text style={styles.cardText}>Left Time: 03.00 PM</Text>
//             <Text style={styles.cardLocation}>
//               Level 02, Red Desert Avenue In Del Perro, Los Santos.
//             </Text>
//             <View style={styles.cardFooter}>
//               <Text style={styles.cardTotal}>Total: 0.005 ETH</Text>
//               <TouchableOpacity
//                 style={styles.historyButton}
//                 onPress={handleViewHistory}
//               >
//                 <Image source={historyIcon} style={styles.historyIcon} />
//                 <Text style={styles.historyButtonText}>View History</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>

//         {/* Recent Section */}
//         <View style={styles.recentSection}>
//           <View style={styles.recentHeader}>
//             <Text style={styles.recentTitle}>Recent</Text>
//             <TouchableOpacity>
//               <Text style={styles.viewAllText}>View All</Text>
//             </TouchableOpacity>
//           </View>
//           {[...Array(3)].map((_, index) => (
//             <View key={index} style={styles.recentCard}>
//               <View style={styles.cardHeader}>
//                 <Image source={carpark} style={styles.carparkIcon} />
//                 <Text style={styles.cardTitle}>L0205</Text>
//               </View>
//               <Text style={styles.cardText}>Parked Time: 1h 2min</Text>
//               <Text style={styles.cardLocation}>
//                 Level 02, Red Desert Avenue In Del Perro, Los Santos.
//               </Text>
//               <Text style={styles.cardTotal}>Total: 0.001 ETH</Text>
//             </View>
//           ))}
//         </View>

//         {/* Violation Fees */}
//         {violations > 0 ? (
//           <View style={styles.violationCard}>
//             <View style={styles.violationHeader}>
//               <Image source={violationIcon} style={styles.violationIcon} />
//               <Text style={styles.violationTitle}>Violation Fees</Text>
//               <Text style={styles.violationTotal}>Total: 0.003 ETH</Text>
//             </View>
//             <Text style={styles.violationDescription}>
//               You got {violations} violations and deducted it by your wallet.
//             </Text>
//           </View>
//         ) : (
//           <View style={styles.noViolationCard}>
//             <View style={styles.noViolationHeader}>
//               <Image source={noviolation} style={styles.violationIcon} />
//               <Text style={styles.noViolationTitle}>Violation Fees</Text>
//             </View>
//             <Text style={styles.noViolationDescription}>
//               You don’t have any violations. If you get any, you will be
//               notified.
//             </Text>
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#1A1B22",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//     backgroundColor: "#1A1B22",
//     zIndex: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#333333",
//   },
//   scrollContainer: {
//     flex: 1,
//   },
//   contentContainer: {
//     paddingHorizontal: 16,
//     paddingTop: 24,
//     paddingBottom: 16,
//   },
//   greeting: {
//     fontSize: 20,
//     color: baseColors.white,
//     fontWeight: "bold",
//   },
//   notificationIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 23,
//     backgroundColor: "#F3F3F326",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   notificationIconActive: {
//     backgroundColor: "#111D13",
//     borderWidth: 1,
//     borderColor: baseColors.primaryGreen,
//     shadowColor: baseColors.primaryGreen,
//     shadowOpacity: 0.3,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 10.4,
//     elevation: 4,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     resizeMode: "contain",
//   },
//   currentCard: {
//     backgroundColor: "#111D13",
//     borderRadius: 8,
//     overflow: "hidden",
//     marginBottom: 16,
//   },
//   background: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     opacity: 0.3,
//   },
//   cardContent: {
//     padding: 16,
//   },
//   cardHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   carparkIcon: {
//     width: 40,
//     height: 40,
//     marginRight: 8,
//   },
//   cardTitle: {
//     fontSize: 16,
//     color: baseColors.white,
//     fontWeight: "bold",
//   },
//   cardText: {
//     fontSize: 14,
//     color: baseColors.white,
//   },
//   cardLocation: {
//     fontSize: 12,
//     color: baseColors.white,
//     opacity: 0.7,
//     marginTop: 4,
//   },
//   cardFooter: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 8,
//   },
//   cardTotal: {
//     fontSize: 16,
//     color: baseColors.primaryGreen,
//     fontWeight: "bold",
//   },
//   historyButton: {
//     backgroundColor: "#111D13",
//     borderWidth: 1,
//     borderColor: baseColors.primaryGreen,
//     padding: 8,
//     borderRadius: 8,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   historyIcon: {
//     width: 16,
//     height: 16,
//     marginRight: 8,
//     resizeMode: "contain",
//   },
//   historyButtonText: {
//     color: baseColors.white,
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   recentSection: {
//     marginBottom: 16,
//   },
//   recentHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   recentTitle: {
//     fontSize: 18,
//     color: baseColors.white,
//     fontWeight: "bold",
//   },
//   viewAllText: {
//     fontSize: 14,
//     color: baseColors.primaryGreen,
//   },
//   recentCard: {
//     backgroundColor: "#111D13",
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 8,
//   },
//   violationCard: {
//     backgroundColor: "#D8315B1A",
//     borderRadius: 8,
//     padding: 12,
//     borderColor: "#D8315B",
//     borderWidth: 1,
//     marginBottom: 16,
//   },
//   violationHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   violationIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 8,
//   },
//   violationTitle: {
//     fontSize: 18,
//     color: "#D8315B",
//     fontWeight: "bold",
//   },
//   violationDescription: {
//     fontSize: 14,
//     color: baseColors.white,
//     marginVertical: 4,
//   },
//   violationTotal: {
//     fontSize: 16,
//     color: "#D8315B",
//     fontWeight: "bold",
//   },
//   noViolationCard: {
//     backgroundColor: "#FFE3471A",
//     borderRadius: 8,
//     padding: 12,
//     borderColor: "#FFE347",
//     borderWidth: 1,
//     marginBottom: 16,
//   },
//   noViolationHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   noViolationTitle: {
//     fontSize: 18,
//     color: "#FFE347",
//     fontWeight: "bold",
//   },
//   noViolationDescription: {
//     fontSize: 14,
//     color: baseColors.white,
//   },
// });