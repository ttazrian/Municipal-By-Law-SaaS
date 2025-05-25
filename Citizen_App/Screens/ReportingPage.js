// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import { auth } from "../firebase";

// const ReportingPage = ({ navigation }) => {
//   const [imageUri, setImageUri] = useState(null);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const fetchUser = () => {
//       const user = auth.currentUser;
//       if (user) {
//         setUserId(user.uid);
//         console.log("Logged-in user:", user.uid);
//       } else {
//         Alert.alert("Not Logged In", "Please log in first.");
//         navigation.navigate("LoginPage");
//       }
//     };

//     fetchUser();
//   }, [navigation]); // ✅ Ensures user authentication before proceeding

//   // 📷 Capture Image with Camera
//   const captureImage = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== "granted") {
//       Alert.alert("Permission Denied", "Camera permission is required.");
//       return;
//     }

//     let result = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled && result.assets?.length > 0) {
//       setImageUri(result.assets[0].uri);
//     }
//   };

//   // ➡️ Proceed to Next Step with Image
//   const goToNextStep = () => {
//     if (!imageUri) {
//       Alert.alert("No Image Captured", "Please take a photo before proceeding.");
//       return;
//     }

//     navigation.navigate("SearchViolation", { imageUri }); // ✅ Passes image to next step
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Step 1: Capture a Violation</Text>

//       {/* 📷 Take Photo Button */}
//       <TouchableOpacity style={styles.button} onPress={captureImage}>
//         <Text style={styles.buttonText}>📷 Take a Photo</Text>
//       </TouchableOpacity>

//       {/* 🖼️ Display Selected Image */}
//       {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

//       {/* ➡️ Proceed to Next Step */}
//       <TouchableOpacity
//         style={[styles.button, styles.nextButton]}
//         onPress={goToNextStep}
//       >
//         <Text style={styles.buttonText}>➡️ Next Step</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // ✅ Ensure ONLY ONE `export default` statement exists
// export default ReportingPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#eff1ef",
//     padding: 20,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#2F4236",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   button: {
//     width: "90%",
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     backgroundColor: "#5A6E5B",
//     marginVertical: 10,
//   },
//   nextButton: {
//     backgroundColor: "#4A7C59",
//   },
//   buttonText: {
//     color: "#eff1ef",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: "cover",
//     borderRadius: 10,
//     marginVertical: 20,
//   },
// });
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import { auth } from "../firebase";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { getFirestore, doc, updateDoc } from "firebase/firestore";

// const ReportingPage = ({ navigation }) => {
//   const [imageUri, setImageUri] = useState(null);
//   const [userId, setUserId] = useState(null);

//   const storage = getStorage();
//   const firestore = getFirestore();

//   useEffect(() => {
//     const fetchUser = () => {
//       const user = auth.currentUser;
//       if (user) {
//         setUserId(user.uid);
//         console.log("Logged-in user:", user.uid);
//       } else {
//         Alert.alert("Not Logged In", "Please log in first.");
//         navigation.navigate("LoginPage");
//       }
//     };

//     fetchUser();
//   }, [navigation]);

//   const captureImage = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== "granted") {
//       Alert.alert("Permission Denied", "Camera permission is required.");
//       return;
//     }

//     let result = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled && result.assets?.length > 0) {
//       setImageUri(result.assets[0].uri);
//     }
//   };

//   const goToNextStep = async () => {
//     if (!imageUri) {
//       Alert.alert("No Image Captured", "Please take a photo before proceeding.");
//       return;
//     }

//     try {
//       const response = await fetch(imageUri);
//       const blob = await response.blob();

//       const imageRef = ref(storage, `evidence/${userId}_${Date.now()}.jpg`);
//       await uploadBytes(imageRef, blob);
//       const downloadURL = await getDownloadURL(imageRef);

//       // Store image URL in user document
//       const userDocRef = doc(firestore, "users", userId);
//       await updateDoc(userDocRef, { lastUploadedImage: downloadURL });

//       // Pass image URL to next step
//       navigation.navigate("SearchViolation", { imageUrl: downloadURL });
//     } catch (error) {
//       console.error("Image upload error:", error);
//       Alert.alert("Upload Failed", "Could not upload image. Please try again.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Step 1: Capture a Violation</Text>

//       <TouchableOpacity style={styles.button} onPress={captureImage}>
//         <Text style={styles.buttonText}>📷 Take a Photo</Text>
//       </TouchableOpacity>

//       {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

//       <TouchableOpacity
//         style={[styles.button, styles.nextButton]}
//         onPress={goToNextStep}
//       >
//         <Text style={styles.buttonText}>➡️ Next Step</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ReportingPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#eff1ef",
//     padding: 20,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#2F4236",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   button: {
//     width: "90%",
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     backgroundColor: "#5A6E5B",
//     marginVertical: 10,
//   },
//   nextButton: {
//     backgroundColor: "#4A7C59",
//   },
//   buttonText: {
//     color: "#eff1ef",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: "cover",
//     borderRadius: 10,
//     marginVertical: 20,
//   },
// });
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function ReportingPage() {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.6,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  const goToNext = () => {
    navigation.navigate('SearchViolation', { imageUrl: image });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.stepCount}>Step 1 of 3</Text>
        <Text style={styles.stepTitle}>Capture a Violation</Text>

        {image ? (
          <Image source={{ uri: image }} style={styles.imagePreview} />
        ) : (
          <View style={styles.placeholder}>
            <Ionicons name="camera-outline" size={40} color="#888" />
            <Text style={styles.placeholderText}>No photo taken yet</Text>
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <MaterialIcons name="photo-camera" size={20} color="#fff" />
          <Text style={styles.buttonText}>Take a Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4a8759' }]}
          onPress={goToNext}
          disabled={!image}
        >
          <Ionicons name="arrow-forward" size={20} color="#fff" />
          <Text style={styles.buttonText}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef3ee',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  stepCount: {
    color: '#6b756f',
    fontSize: 14,
    marginBottom: 5,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2f4236',
    marginBottom: 15,
  },
  placeholder: {
    height: 180,
    borderRadius: 12,
    backgroundColor: '#dfe8df',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  placeholderText: {
    marginTop: 8,
    color: '#666',
  },
  imagePreview: {
    height: 180,
    borderRadius: 12,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#5a6e5b',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});
