import React, { useState, useEffect } from "react";
import {
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import GlobalStyles from "../../helpers/GlobalStyles";

const MoodModal = ({ visible, onClose, onSelectMood }) => {
  const moods = [
    { emoji: "😀", label: "Happy" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😠", label: "Angry" },
    { emoji: "😌", label: "Relaxed" },
    { emoji: "😐", label: "Neutral" },
  ];

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>How's your mood?</Text>
          <View style={styles.moodOptions}>
            {moods.map((mood) => (
              <TouchableOpacity
                key={mood.label}
                style={styles.moodButton}
                onPress={() => onSelectMood(mood.label)}
              >
                <Text style={styles.moodEmoji}>{mood.emoji}</Text>
                <Text style={styles.moodLabel}>{mood.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  moodOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  moodButton: {
    alignItems: "center",
    margin: 10,
  },
  moodEmoji: {
    fontSize: 40,
  },
  moodLabel: {
    marginTop: 5,
    fontSize: 14,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default MoodModal;
