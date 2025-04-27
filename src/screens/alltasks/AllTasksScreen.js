import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GlobalStyles from "../../helpers/GlobalStyles";
import { Surface } from "react-native-paper";

const AllTasksScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const [tasks, setTasks] = useState([
    // Dummy example tasks; you will fetch from API later
    {
      _id: "1",
      title: "Complete Assignment",
      due_date: "2025-04-29",
      priority: "high",
      status: "pending",
    },
    {
      _id: "2",
      title: "Grocery Shopping",
      due_date: "2025-04-28",
      priority: "medium",
      status: "completed",
    },
  ]);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "All" ||
      task.status.toLowerCase() === selectedFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const renderTask = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("taskdetails", { task: item })}
    >
      <Surface style={styles.taskCard}>
        <View style={styles.taskRow}>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <Text style={styles.taskStatus(item.status)}>{item.status}</Text>
        </View>
        <Text style={styles.taskDueDate}>
          Due: {new Date(item.due_date).toLocaleDateString()}
        </Text>
      </Surface>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={GlobalStyles.Bodycontainer}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>All Tasks</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#888"
          style={{ marginRight: 8 }}
        />
        <TextInput
          placeholder="Search tasks..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterRow}>
        {["All", "Pending", "Completed", "Missed"].map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.filterButton,
              selectedFilter === status && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedFilter(status)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedFilter === status && styles.filterButtonTextActive,
              ]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Task List */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item._id}
        renderItem={renderTask}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default AllTasksScreen;

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    flexWrap: "wrap",
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#E5E7EB",
    margin: 5,
  },
  filterButtonActive: {
    backgroundColor: "#007BFF",
  },
  filterButtonText: {
    color: "#555",
    fontWeight: "500",
  },
  filterButtonTextActive: {
    color: "#fff",
  },
  taskCard: {
    backgroundColor: "#fff",
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  taskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  taskDueDate: {
    fontSize: 14,
    color: "#777",
  },
  taskStatus: (status) => ({
    fontSize: 14,
    color:
      status === "completed"
        ? "green"
        : status === "missed"
        ? "red"
        : "#FFA500",
    fontWeight: "500",
    textTransform: "capitalize",
  }),
});
