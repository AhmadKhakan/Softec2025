import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import WelcomeScreen from "../screens/welcome/WelcomeScreen";
// import LoginScreen from "../screens/login/LoginScreen";
import DashboardScreen from "../screens/dashboard/DashboardScreen";
import CreateTaskScreen from "../screens/createtask/CreateTaskScreen";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";
import LoginScreen from "../screens/login/LoginScreen";
import SignUpScreen from "../screens/signup/SignUpScreen";
import ProfileScreen from "../screens/userprofile/UserProfile";
import CreateGoal from "../screens/creategoal/CreateGoal";
import AllTasksScreen from "../screens/alltasks/AllTasksScreen";
import TaskDetailsScreen from "../screens/taskdetailsscreen/TaskDetailsScreen";
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="createtask" component={CreateTaskScreen} /> */}
      {/* <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignUpScreen} /> */}
      <Stack.Screen name="dashboard" component={DashboardScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="creategoal" component={CreateGoal} />
      <Stack.Screen name="alltasks" component={AllTasksScreen} />
      <Stack.Screen name="taskdetails" component={TaskDetailsScreen} />
      {/* <Stack.Screen name="profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigation;
