import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { TextInput, IconButton } from "react-native-paper";
import GlobalStyles from "../../helpers/GlobalStyles";

const CreateTaskScreen = ({ navigation }) => {
  const [text, setText] = useState("");

  const handleVoiceInput = () => {
    // Implement voice input functionality
    console.log("Voice input pressed");
  };

  const handleCameraInput = () => {
    // Implement camera input functionality
    console.log("Camera input pressed");
  };

  return (
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <View style={styles.container}>
        <View style={[styles.inputContainer]}>
          <TextInput
            mode="outlined"
            value={text}
            onChangeText={setText}
            placeholder="Enter your task..."
            style={styles.input}
            right={
              <TextInput.Icon icon="microphone" onPress={handleVoiceInput} />
            }
          />
          <IconButton
            icon="camera"
            size={24}
            onPress={handleCameraInput}
            style={styles.cameraButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cameraButton: {
    marginLeft: 8,
    backgroundColor: "#f0f0f0",
  },
});

export default CreateTaskScreen;
