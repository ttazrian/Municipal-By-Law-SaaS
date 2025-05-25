// components/AdminDashboardLayout.js
import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import TopNavbar from "./TopNavbar";

export default function AdminDashboardLayout({ children }) {
  return (
    <ImageBackground
      source={require("../assets/image.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <TopNavbar />
      <View style={styles.overlay}>
        <View style={styles.content}>{children}</View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingTop: 80,
    paddingHorizontal: 20,
    opacity: 0.7,
  },
  content: {
    flex: 1,
  },
});
