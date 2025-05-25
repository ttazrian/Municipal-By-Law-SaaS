// components/ConfirmModal.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ModalCard from "./ModalCard";

export default function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <ModalCard title="Confirm Deletion" onClose={onCancel}>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.deleteBtn} onPress={onConfirm}>
          <Text style={styles.btnText}>Yes, Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ModalCard>
  );
}

const styles = StyleSheet.create({
  message: {
    fontSize: 16,
    color: "#3d3f3d",
    textAlign: "center",
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
  },
  deleteBtn: {
    backgroundColor: "#d32f2f",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    flex: 1,
    alignItems: "center",
  },
  cancelBtn: {
    backgroundColor: "#999",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    flex: 1,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
