import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import GlobalStyles from "../../helpers/GlobalStyles";
import { Surface } from "react-native-paper";

const TaskDetailsScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Surface style={styles.card}>
          <Text style={styles.title}>{task.title}</Text>
          <Text style={styles.subtitle}>Status: {task.status}</Text>
          <Text style={styles.subtitle}>Priority: {task.priority}</Text>
          <Text style={styles.subtitle}>
            Due Date:{" "}
            {task.due_date
              ? new Date(task.due_date).toLocaleDateString()
              : "N/A"}
          </Text>
          <Text style={styles.subtitle}>
            Category: {task.category || "N/A"}
          </Text>

          {/* Description */}
          {task.description ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Description</Text>
              <Text style={styles.sectionText}>{task.description}</Text>
            </View>
          ) : null}

          {/* Checklist Items */}
          {task.checklist_items && task.checklist_items.length > 0 ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Checklist</Text>
              {task.checklist_items.map((item, index) => (
                <Text key={index} style={styles.checklistItem}>
                  • {item}
                </Text>
              ))}
            </View>
          ) : null}
        </Surface>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskDetailsScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 6,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  sectionText: {
    fontSize: 16,
    color: "#555",
  },
  checklistItem: {
    fontSize: 16,
    color: "#555",
    marginLeft: 10,
    marginVertical: 2,
  },
});
