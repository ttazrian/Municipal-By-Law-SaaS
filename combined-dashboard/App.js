import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator, View } from "react-native";
import { AuthProvider, useAuth } from "./context/AuthContext";

import {
  registerForPushNotificationsAsync,
  setupNotificationListeners,
} from "./services/notificationService";

// 🔓 Public Screens
import HomeScreen from "./screens/common/HomeScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import ApplyScreen from "./screens/auth/ApplyScreen";

// 👮 Officer Screens
import OfficerDashboard from "./screens/officer/OfficerDashboard";
import OfficerReportsScreen from "./screens/officer/OfficerReportsScreen";
import ReportDetailsScreen from "./screens/officer/ReportDetailsScreen";
import OfficerProfile from "./screens/officer/OfficerProfile";
import OfficerSystemSettings from "./screens/officer/OfficerSystemSettings";

// 👤 Admin Screens
import AdminDashboard from "./screens/admin/AdminDashboard";
import ManageUsers from "./screens/admin/ManageUsers";
import ManageReports from "./screens/admin/ManageReports";
import ManageApplications from "./screens/admin/ManageApplications";
import SystemSettings from "./screens/admin/SystemSettings";

const Stack = createStackNavigator();

const InlineRedirectScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (user?.role?.toLowerCase() === "admin") {
      navigation.replace("AdminDashboard");
    } else if (user?.role?.toLowerCase() === "officer") {
      navigation.replace("OfficerDashboard");
    } else {
      navigation.replace("Home");
    }
  }, [user]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#2A5D94" />
    </View>
  );
};

const AppNavigator = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (user) {
      registerForPushNotificationsAsync(user.uid);
      setupNotificationListeners();
    }
  }, [user]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#2A5D94" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Always accessible */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Apply" component={ApplyScreen} />

      {user ? (
        <>
          <Stack.Screen name="Redirect" component={InlineRedirectScreen} />

          {/* Admin */}
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
          <Stack.Screen name="ManageUsers" component={ManageUsers} />
          <Stack.Screen name="ManageReports" component={ManageReports} />
          <Stack.Screen name="ManageApplications" component={ManageApplications} />
          <Stack.Screen name="SystemSettings" component={SystemSettings} />

          {/* Officer */}
          <Stack.Screen name="OfficerDashboard" component={OfficerDashboard} />
          <Stack.Screen name="OfficerReportsScreen" component={OfficerReportsScreen} />
          <Stack.Screen name="ReportDetails" component={ReportDetailsScreen} />
          <Stack.Screen name="OfficerProfile" component={OfficerProfile} />
          <Stack.Screen name="OfficerSystemSettings" component={OfficerSystemSettings} />
        </>
      ) : (
        // Fallback route to ensure login screen is reachable after logout
        <Stack.Screen name="LoginFallback" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
