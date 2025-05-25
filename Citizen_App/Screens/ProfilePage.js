// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function ProfilePage() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>My Profile</Text>
//             <Text style={styles.subtitle}>Manage your profile and account settings here.</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#eff1ef',
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#3d3f3d',
//         marginBottom: 10,
//     },
//     subtitle: {
//         fontSize: 14,
//         color: '#808580',
//         textAlign: 'center',
//     },
// });
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, Modal } from 'react-native';
import { auth } from '../firebase';
import { updateEmail } from 'firebase/auth';

export default function ProfilePage({ navigation }) {
  const user = auth.currentUser;
  const [showModal, setShowModal] = useState(false);
  const [newEmail, setNewEmail] = useState('');

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.replace("AuthStack");
    } catch (error) {
      Alert.alert("Logout Error", error.message);
    }
  };

  const handleUpdateEmail = async () => {
    if (!newEmail) {
      Alert.alert("Input Required", "Please enter a valid email address.");
      return;
    }

    try {
      await updateEmail(user, newEmail);
      Alert.alert("Success", "Your email has been updated.");
      setShowModal(false);
    } catch (error) {
      console.error("Email update error:", error.code);
      if (error.code === 'auth/requires-recent-login') {
        Alert.alert("Security Alert", "Please log in again to update your email.");
      } else {
        Alert.alert("Error", error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.subtitle}>Manage your profile and account settings here.</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user?.email || "Not available"}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
      >
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
        <Text style={styles.buttonText}>Update Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      {/* Modal for Updating Email */}
      <Modal visible={showModal} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Update Email</Text>
            <TextInput
              placeholder="Enter new email"
              value={newEmail}
              onChangeText={setNewEmail}
              style={styles.modalInput}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalBtn} onPress={handleUpdateEmail}>
                <Text style={styles.modalBtnText}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalBtnCancel} onPress={() => setShowModal(false)}>
                <Text style={styles.modalBtnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff1ef',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2F4236',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#5d615d',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 14,
    color: '#5d615d',
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: '#2F4236',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#4A7C59',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#eff1ef',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#9b2226',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2F4236',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: '#f7f9f8',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalBtn: {
    backgroundColor: '#4A7C59',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  modalBtnCancel: {
    backgroundColor: '#9b2226',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  modalBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
