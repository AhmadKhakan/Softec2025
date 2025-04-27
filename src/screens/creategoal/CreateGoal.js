import React, { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, View } from "react-native";
import GlobalStyles from "../../helpers/GlobalStyles";

const CreateGoal = ({ navigation }) => {
  const [goal, setGoal] = useState("");

  return (
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <View style={styles.container}>
        <TextInput
          value={goal}
          onChangeText={setGoal}
          placeholder="Write your goal here..."
          multiline
          numberOfLines={6}
          style={styles.input}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateGoal;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    fontSize: 16,
    minHeight: 150,
    textAlignVertical: "top", // So text starts from top when multiline
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
