import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const LineChartComponent = () => {
  const lineData = [
    { value: 50, label: "Mon" },
    { value: 80, label: "Tue" },
    { value: 40, label: "Wed" },
    { value: 95, label: "Thu" },
    { value: 85, label: "Fri" },
    { value: 65, label: "Sat" },
    { value: 70, label: "Sun" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Progress</Text>
      <LineChart
        data={lineData}
        thickness={3}
        color="#007BFF"
        hideDataPoints={false}
        dataPointsColor="#007BFF"
        startFillColor="rgba(0, 123, 255, 0.3)"
        endFillColor="rgba(0, 123, 255, 0.05)"
        initialSpacing={20}
        spacing={40}
        hideRules
        yAxisColor="#d3d3d3"
        xAxisColor="#d3d3d3"
        noOfSections={4}
        animateOnDataChange
        animationDuration={800}
        maxValue={120}
        yAxisTextStyle={{ color: "#555" }}
        xAxisTextStyle={{ color: "#555" }}
      />
    </View>
  );
};

export default LineChartComponent;

const styles = StyleSheet.create({
  container: {
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
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
});
