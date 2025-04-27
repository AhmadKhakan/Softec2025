import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Alert, Text } from "react-native";
import { TextInput, IconButton, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import GlobalStyles from "../../helpers/GlobalStyles";

const SERVER_URL = "http://192.168.0.100:3000"; // change if IP changes

const CreateTaskScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCameraInput = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestCameraPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert("Permission Denied", "Camera permission is required!");
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        base64: false, // 🚫 not needed now
      });

      if (!result.canceled && result.assets?.length > 0) {
        const pickedImage = result.assets[0];
        if (pickedImage?.uri) {
          await sendImageToServer(pickedImage.uri);
        } else {
          Alert.alert("Error", "Could not read image URI.");
        }
      }
    } catch (error) {
      console.error("Camera error:", error);
      Alert.alert("Error", "Something went wrong while picking the image.");
    }
  };

  const sendImageToServer = async (imageUri) => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", {
        uri: imageUri,
        type: "image/jpeg", // You can dynamically detect if needed
        name: "upload.jpg",
      });

      const response = await fetch(`${SERVER_URL}/upload`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      const data = await response.json();
      console.log("OCR Server Response:", data);

      if (response.ok) {
        setText(data.text || "No text found.");
      } else {
        Alert.alert("OCR Error", data.error || "Failed to recognize text.");
      }
    } catch (error) {
      console.error("OCR Server Error:", error);
      Alert.alert("Error", "Failed to communicate with OCR server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView
      style={[GlobalStyles.Bodycontainer, { backgroundColor: "pink" }]}
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Extracted text will appear here..."
            style={styles.input}
            multiline
            numberOfLines={8}
          />
          <IconButton
            icon="camera"
            size={24}
            onPress={handleCameraInput}
            style={styles.cameraButton}
          />
        </View>

        {loading && (
          <Text style={styles.loadingText}>
            Extracting text, please wait...
          </Text>
        )}
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
    alignItems: "center", // ✅ center properly
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    elevation: 2,
  },

  input: {
    flex: 1, // ✅ TAKE FULL SPACE
    minHeight: 150, // ✅ enough height to type
    backgroundColor: "#fff",
    borderWidth: 0,
    textAlignVertical: "top",
    padding: 8, // ✅ give inner padding
    fontSize: 16,
  },
  cameraButton: {
    marginLeft: 8,
    backgroundColor: "#f0f0f0",
    justifyContent: "center", // ✅ center icon
    alignItems: "center", // ✅ center icon
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
});

export default CreateTaskScreen;
