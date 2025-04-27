import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from "../../helpers/GlobalStyles";

const ProfileScreen = () => {
  const [theme, setTheme] = useState("Light");
  const [fontSize, setFontSize] = useState("Medium");

  const userName = "John Doe"; // example
  const userEmail = "john.doe@example.com"; // example

  return (
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Icon */}
        <View style={styles.profileIconContainer}>
          <Ionicons name="person-circle-outline" size={100} color="#007BFF" />
        </View>

        {/* Name */}
        <TextInput
          value={userName}
          editable={false}
          style={styles.disabledInput}
        />

        {/* Email */}
        <TextInput
          value={userEmail}
          editable={false}
          style={styles.disabledInput}
        />

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          {/* Theme Selection */}
          <View style={styles.preferenceRow}>
            <Text style={styles.preferenceLabel}>Theme</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={[
                  styles.preferenceButton,
                  theme === "Light" && styles.preferenceButtonActive,
                ]}
                onPress={() => setTheme("Light")}
              >
                <Text
                  style={[
                    styles.preferenceButtonText,
                    theme === "Light" && styles.preferenceButtonTextActive,
                  ]}
                >
                  Light
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.preferenceButton,
                  theme === "Dark" && styles.preferenceButtonActive,
                ]}
                onPress={() => setTheme("Dark")}
              >
                <Text
                  style={[
                    styles.preferenceButtonText,
                    theme === "Dark" && styles.preferenceButtonTextActive,
                  ]}
                >
                  Dark
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Font Size Selection */}
          <View style={styles.preferenceRow}>
            <Text style={styles.preferenceLabel}>Font Size</Text>
            <View style={styles.buttonGroup}>
              {["Small", "Medium", "Large"].map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.preferenceButton,
                    fontSize === size && styles.preferenceButtonActive,
                  ]}
                  onPress={() => setFontSize(size)}
                >
                  <Text
                    style={[
                      styles.preferenceButtonText,
                      fontSize === size && styles.preferenceButtonTextActive,
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileIconContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  disabledInput: {
    backgroundColor: "#F1F5F9",
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
  },
  section: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    color: "#333",
  },
  preferenceRow: {
    marginBottom: 24,
  },
  preferenceLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#555",
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  preferenceButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  preferenceButtonActive: {
    backgroundColor: "#007BFF",
  },
  preferenceButtonText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
  preferenceButtonTextActive: {
    color: "#fff",
  },
});
