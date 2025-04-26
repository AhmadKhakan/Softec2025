import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as SpeechRecognizer from "expo-speech-recognition"; // (Or an alternative if not available)
import * as MLKitOcr from "expo-mlkit-ocr"; // Expo ML Kit OCR

const AddTask = () => {
  const [taskText, setTaskText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // For manual text input
  const handleTextSubmit = () => {
    console.log("Task Submitted:", taskText);
    // Save task to DB or state here
    setTaskText("");
  };

  // For voice to text
  const handleVoiceInput = async () => {
    try {
      const { status } = await SpeechRecognizer.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to use microphone denied");
        return;
      }

      const result = await SpeechRecognizer.startAsync({
        language: "en-US",
      });

      setTaskText(result.transcript);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  // For OCR (Image to Text)
  const handleOcrInput = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!result.cancelled) {
        const ocrResult = await MLKitOcr.detectFromUri(result.uri);
        const extractedText = ocrResult.map((block) => block.text).join(" ");
        setTaskText(extractedText);
        setModalVisible(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveAfterModal = () => {
    console.log("Task Saved after edit:", taskText);
    // Save task to DB or state here
    setModalVisible(false);
    setTaskText("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Task</Text>

      <TextInput
        value={taskText}
        onChangeText={setTaskText}
        placeholder="Type your task"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button title="Add Text Task" onPress={handleTextSubmit} />
        <Button title="Voice to Text" onPress={handleVoiceInput} />
        <Button title="OCR (Image to Text)" onPress={handleOcrInput} />
      </View>

      {/* Modal for editing after Voice or OCR */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Task</Text>
            <TextInput
              value={taskText}
              onChangeText={setTaskText}
              multiline
              style={styles.modalInput}
            />
            <TouchableOpacity
              onPress={handleSaveAfterModal}
              style={styles.saveButton}
            >
              <Text style={styles.saveButtonText}>Save Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonContainer: {
    gap: 10,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 8,
    minHeight: 100,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
