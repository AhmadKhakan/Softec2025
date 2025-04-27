import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { Surface } from "react-native-paper";
import MoodModal from "../../components/moodmodal/MoodModal";
import GlobalStyles from "../../helpers/GlobalStyles";
import { Ionicons } from "@expo/vector-icons"; // <-- Added for profile icon (uses Expo vector icons)
import LineChartComponent from "../../components/linechartcomponent/LineChartComponent";

const DashboardScreen = ({ navigation }) => {
  const [showMoodModal, setShowMoodModal] = useState(true);
  const [selectedMood, setSelectedMood] = useState(null);

  const name = "User";

  const handleSelectMood = (mood) => {
    setSelectedMood(mood);
    setShowMoodModal(false);
  };

  const handleCloseModal = () => {
    setShowMoodModal(false);
  };

  const handleProfilePress = () => {
    navigation.navigate("profile"); // <-- This should match your ProfileScreen route
  };

  return (
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Section with Profile Icon */}
        <View style={styles.topRow}>
          <View>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.userName}>{name}</Text>
            {selectedMood && (
              <Text style={styles.moodText}>Today's Mood: {selectedMood}</Text>
            )}
          </View>

          {/* Profile Icon */}
          <TouchableOpacity
            style={styles.profileIconContainer}
            onPress={handleProfilePress}
          >
            <Ionicons name="person-circle-outline" size={40} color="#007BFF" />
          </TouchableOpacity>
        </View>

        {/* Mood Modal */}
        <MoodModal
          visible={showMoodModal}
          onClose={handleCloseModal}
          onSelectMood={handleSelectMood}
        />

        {/* Tasks Section */}
        <Surface style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Due Tasks</Text>
            <TouchableOpacity onPress={() => navigation.navigate("alltasks")}>
              <Text style={styles.showAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          {/* Single Task Preview */}
          <View style={styles.taskCard}>
            <View style={styles.taskRow}>
              <Text style={styles.taskName}>Task Name</Text>
              <Text style={styles.taskTime}>10:00 AM</Text>
            </View>
          </View>

          {/* Create Task Button */}
          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>+ Create New Task</Text>
          </TouchableOpacity>
        </Surface>

        {/* Moods Chart Section (placeholder) */}
        <View>
          <LineChartComponent />
        </View>

        {/* Quick Actions Section */}
        <View style={styles.quickActionsRow}>
          <TouchableOpacity style={styles.quickActionButton}>
            <Text style={styles.quickActionText}>Show Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Text style={styles.quickActionText}>Reminders</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.quickActionButtonFull}>
          <Text style={styles.quickActionText}>Create a Goal</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "400",
    color: "#555",
  },
  userName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginTop: 4,
  },
  moodText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  profileIconContainer: {
    padding: 4,
    borderRadius: 50,
  },
  sectionCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  showAllText: {
    fontSize: 14,
    color: "#007BFF",
  },
  taskCard: {
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  taskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#444",
  },
  taskTime: {
    fontSize: 14,
    color: "#777",
  },
  createButton: {
    backgroundColor: "#007BFF",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  createButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  placeholderText: {
    fontSize: 14,
    color: "#888",
    marginTop: 10,
  },
  quickActionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  quickActionButton: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: "center",
    marginHorizontal: 5,
  },
  quickActionButtonFull: {
    backgroundColor: "#F1F5F9",
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 8,
  },
  quickActionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});
