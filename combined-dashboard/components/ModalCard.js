// components/ModalCard.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ModalCard({ title, children, onClose }) {
  return (
    <View style={styles.overlay}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.body}>{children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: "rgba(255,255,255,0.96)",
    borderRadius: 20,
    padding: 24,
    position: "relative",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 12,
    zIndex: 1,
  },
  closeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#555",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f201f",
    textAlign: "center",
    marginBottom: 20,
  },
  body: {
    gap: 16,
  },
});
