import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";

const pages = [
  { name: "Dashboard", route: "AdminDashboard" },
  { name: "Users", route: "ManageUsers" },
  { name: "Reports", route: "ManageReports" },
  { name: "Applications", route: "ManageApplications" },
  { name: "Settings", route: "SystemSettings" },
];

export default function TopNavbar() {
  const navigation = useNavigation();
  const route = useRoute();
  const { width } = useWindowDimensions();
  const { logout } = useAuth();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          await logout();
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        },
      },
    ]);
  };

  return (
    <View style={[styles.navbar, { flexDirection: width < 600 ? "column" : "row" }]}>
      <View style={styles.tabs}>
        {pages.map((page) => {
          const isActive = route.name === page.route;
          return (
            <TouchableOpacity
              key={page.route}
              style={[styles.tab, isActive && styles.activeTab]}
              onPress={() => navigation.navigate(page.route)}
            >
              <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                {page.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.icons}>
        {/* 🔔 Notifications */}
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => {
            setShowNotifications(!showNotifications);
            setShowProfileMenu(false);
          }}
        >
          <Ionicons name="notifications-outline" size={22} color="#3c4a3d" />
        </TouchableOpacity>

        {/* 👤 Profile */}
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => {
            setShowProfileMenu(!showProfileMenu);
            setShowNotifications(false);
          }}
        >
          <Ionicons name="person-circle-outline" size={24} color="#3c4a3d" />
        </TouchableOpacity>

        {/* 🔽 Dropdown Panels */}
        {showNotifications && (
          <View style={styles.dropdown}>
            <Text style={styles.dropdownItem}>No new notifications</Text>
          </View>
        )}

        {showProfileMenu && (
          <View style={styles.dropdown}>
            <TouchableOpacity onPress={() => {
              setShowProfileMenu(false);
              navigation.navigate("SystemSettings");
            }}>
              <Text style={styles.dropdownItem}>System Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                await handleLogout(); // handles logout logic
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Login" }],
                });
              }}
            >
              <Text style={[styles.dropdownItem, { color: "#D32F2F" }]}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#f6f9f6",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    position: "relative",
    zIndex: 10,
  },
  tabs: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center",
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#5A6E5B",
  },
  tabText: {
    color: "#5A6E5B",
    fontWeight: "600",
    fontSize: 14,
  },
  activeTab: {
    backgroundColor: "#5A6E5B",
  },
  activeTabText: {
    color: "#ffffff",
  },
  icons: {
    position: "relative",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    zIndex: 99,
  },
  iconBtn: {
    padding: 6,
  },
  dropdown: {
    position: "absolute",
    top: 32,
    right: 0,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#CBD2CB",
    borderWidth: 1,
    padding: 8,
    zIndex: 99,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    minWidth: 160,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#1f201f",
  },
});
