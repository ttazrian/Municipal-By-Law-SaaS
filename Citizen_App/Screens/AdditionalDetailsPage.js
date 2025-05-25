// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// export default function AdditionalDetailsPage({ route, navigation }) {
//   const [licensePlate, setLicensePlate] = useState('');
//   const [vehicleDetails, setVehicleDetails] = useState('');
//   const [timeOfViolation, setTimeOfViolation] = useState('');

//   // Get violation details from previous page
//   const violation = route.params?.violation || { title: "Unknown Violation" };

//   // ✅ Handle Report Submission
//   const handleSubmit = async () => {
//     if (!licensePlate || !vehicleDetails || !timeOfViolation) {
//       Alert.alert("Missing Details", "Please fill out all fields before submitting.");
//       return;
//     }

//     const auth = getAuth();
//     const user = auth.currentUser;

//     if (!user) {
//       Alert.alert("Error", "You must be logged in to submit a report.");
//       console.error("🚨 User not authenticated.");
//       return;
//     }

//     const newReport = {
//       violationType: violation.title,
//       status: "Pending",
//       licensePlate,
//       vehicleDetails,
//       timeOfViolation,
//       userId: user.uid, // ✅ Store user ID for filtering
//       timestamp: new Date().toISOString()
//     };

//     try {
//       const firestore = getFirestore();
//       await addDoc(collection(firestore, "reports"), newReport);
//       console.log("✅ Report submitted:", newReport);

//       Alert.alert("Success", "Your report has been submitted!");
//       navigation.navigate("MyReportsPage"); // ✅ Navigate to MyReportsPage
//     } catch (error) {
//       console.error("🔥 Error submitting report:", error);
//       Alert.alert("Error", "Failed to submit the report.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* 🔙 Back Button */}
//       <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
//         <Ionicons name="arrow-back" size={24} color="#3d3f3d" />
//       </Pressable>

//       {/* Page Title */}
//       <Text style={styles.title}>Step 3: Provide Additional Details</Text>
//       <Text style={styles.subtitle}>{violation.title}</Text>

//       {/* License Plate */}
//       <Text style={styles.label}>License Plate Number</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter license plate"
//         value={licensePlate}
//         onChangeText={setLicensePlate}
//       />

//       {/* Vehicle Details */}
//       <Text style={styles.label}>Vehicle Description</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter vehicle details (e.g., Color, Make, Model)"
//         value={vehicleDetails}
//         onChangeText={setVehicleDetails}
//       />

//       {/* Time of Violation */}
//       <Text style={styles.label}>Time of Violation</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter time (e.g., 2:30 PM)"
//         value={timeOfViolation}
//         onChangeText={setTimeOfViolation}
//       />

//       {/* Submit Button */}
//       <Pressable style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit Report</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#eff1ef' },
//   backButton: { position: "absolute", top: 20, left: 15, zIndex: 10 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#3d3f3d', textAlign: "center" },
//   subtitle: { fontSize: 18, color: '#5d615d', marginBottom: 15, textAlign: "center", fontStyle: "italic" },
//   label: { fontSize: 16, fontWeight: "bold", color: "#3d3f3d", marginBottom: 5 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#a5aba5',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 15,
//     backgroundColor: "#fff"
//   },
//   button: { backgroundColor: '#5A6E5B', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
//   buttonText: { color: '#eff1ef', fontSize: 16, fontWeight: "bold" },
// });
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// export default function AdditionalDetailsPage({ route, navigation }) {
//   const [licensePlate, setLicensePlate] = useState('');
//   const [vehicleDetails, setVehicleDetails] = useState('');
//   const [timeOfViolation, setTimeOfViolation] = useState('');

//   const violation = route.params?.violation || { title: "Unknown Violation" };
//   const imageUrl = route.params?.imageUrl; // ✅ Get the image URL

//   const handleSubmit = async () => {
//     if (!licensePlate || !vehicleDetails || !timeOfViolation) {
//       Alert.alert("Missing Details", "Please fill out all fields before submitting.");
//       return;
//     }

//     const auth = getAuth();
//     const user = auth.currentUser;

//     if (!user) {
//       Alert.alert("Error", "You must be logged in to submit a report.");
//       return;
//     }

//     const newReport = {
//       violationType: violation.title,
//       status: "Pending",
//       licensePlate,
//       vehicleDetails,
//       timeOfViolation,
//       userId: user.uid,
//       timestamp: new Date().toISOString(),
//       imageUrl: imageUrl || null // ✅ Add image URL to report
//     };

//     try {
//       const firestore = getFirestore();
//       await addDoc(collection(firestore, "reports"), newReport);
//       Alert.alert("Success", "Your report has been submitted!");
//       navigation.navigate("MyReportsPage");
//     } catch (error) {
//       console.error("Error submitting report:", error);
//       Alert.alert("Error", "Failed to submit the report.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
//         <Ionicons name="arrow-back" size={24} color="#3d3f3d" />
//       </Pressable>

//       <Text style={styles.title}>Step 3: Provide Additional Details</Text>
//       <Text style={styles.subtitle}>{violation.title}</Text>

//       <Text style={styles.label}>License Plate Number</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter license plate"
//         value={licensePlate}
//         onChangeText={setLicensePlate}
//       />

//       <Text style={styles.label}>Vehicle Description</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter vehicle details (e.g., Color, Make, Model)"
//         value={vehicleDetails}
//         onChangeText={setVehicleDetails}
//       />

//       <Text style={styles.label}>Time of Violation</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter time (e.g., 2:30 PM)"
//         value={timeOfViolation}
//         onChangeText={setTimeOfViolation}
//       />

//       <Pressable style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit Report</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#eff1ef' },
//   backButton: { position: "absolute", top: 20, left: 15, zIndex: 10 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#3d3f3d', textAlign: "center" },
//   subtitle: { fontSize: 18, color: '#5d615d', marginBottom: 15, textAlign: "center", fontStyle: "italic" },
//   label: { fontSize: 16, fontWeight: "bold", color: "#3d3f3d", marginBottom: 5 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#a5aba5',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 15,
//     backgroundColor: "#fff"
//   },
//   button: { backgroundColor: '#5A6E5B', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
//   buttonText: { color: '#eff1ef', fontSize: 16, fontWeight: "bold" },
// });
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   Pressable,
//   Alert,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { getFirestore, collection, addDoc, doc, getDoc } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import * as Location from 'expo-location';

// export default function AdditionalDetailsPage({ route, navigation }) {
//   const [licensePlate, setLicensePlate] = useState('');
//   const [vehicleDetails, setVehicleDetails] = useState('');
//   const [timeOfViolation, setTimeOfViolation] = useState('');

//   const violation = route.params?.violation || { title: 'Unknown Violation' };
//   const imageUrl = route.params?.imageUrl;

//   const handleSubmit = async () => {
//     if (!licensePlate || !vehicleDetails || !timeOfViolation) {
//       Alert.alert('Missing Details', 'Please fill out all fields before submitting.');
//       return;
//     }

//     const auth = getAuth();
//     const user = auth.currentUser;
//     const firestore = getFirestore();

//     if (!user) {
//       Alert.alert('Error', 'You must be logged in to submit a report.');
//       return;
//     }

//     try {
//       // 🔐 Get user's assigned municipality from Firestore
//       const userDocRef = doc(firestore, 'users', user.uid);
//       const userDocSnap = await getDoc(userDocRef);
//       const assignedMunicipality = userDocSnap.exists() ? userDocSnap.data().municipality : null;

//       // 📍 Ask for location permission
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Permission Denied', 'Location access is required to submit the report.');
//         return;
//       }

//       // 📌 Get user’s location
//       const location = await Location.getCurrentPositionAsync({});
//       const [place] = await Location.reverseGeocodeAsync(location.coords);

//       const currentMunicipality = place?.city || place?.region || 'Unknown';

//       // 🔒 Block submission if mismatch
//       if (
//         assignedMunicipality &&
//         currentMunicipality.toLowerCase() !== assignedMunicipality.toLowerCase()
//       ) {
//         Alert.alert(
//           'Restricted Area',
//           `You are only allowed to submit reports in ${assignedMunicipality}. Your current location is ${currentMunicipality}.`
//         );
//         return;
//       }

//       const newReport = {
//         violationType: violation.title,
//         status: 'Pending',
//         licensePlate,
//         vehicleDetails,
//         timeOfViolation,
//         userId: user.uid,
//         timestamp: new Date().toISOString(),
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   Pressable,
//   Alert,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   doc,
//   getDoc,
// } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import * as Location from 'expo-location';

// export default function AdditionalDetailsPage({ route, navigation }) {
//   const [licensePlate, setLicensePlate] = useState('');
//   const [vehicleDetails, setVehicleDetails] = useState('');
//   const [timeOfViolation, setTimeOfViolation] = useState('');
//   const [municipality, setMunicipality] = useState('');
//   const [formattedAddress, setFormattedAddress] = useState('');

//   const violation = route.params?.violation || { title: 'Unknown Violation' };
//   const imageUrl = route.params?.imageUrl;

//   const auth = getAuth();
//   const firestore = getFirestore();
//   const user = auth.currentUser;

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         let { status } = await Location.requestForegroundPermissionsAsync();
//         if (status !== 'granted') {
//           Alert.alert(
//             'Location Permission Denied',
//             'We need your location to suggest your municipality.'
//           );
//           return;
//         }

//         const loc = await Location.getCurrentPositionAsync({});
//         const [place] = await Location.reverseGeocodeAsync(loc.coords);

//         // 🧠 Create formatted address
//         const address = `${place?.street || ''}, ${place?.city || ''}, ${place?.region || ''}, ${place?.country || ''}`;
//         setMunicipality(place?.city || place?.region || 'Unknown');
//         setFormattedAddress(address);
//       } catch (err) {
//         console.error('Error getting location:', err);
//         setMunicipality('');
//         setFormattedAddress('');
//       }
//     };

//     fetchLocation();
//   }, []);

//   const handleSubmit = async () => {
//     if (!licensePlate || !vehicleDetails || !timeOfViolation || !municipality) {
//       Alert.alert('Missing Details', 'Please fill out all fields before submitting.');
//       return;
//     }

//     if (!user) {
//       Alert.alert('Error', 'You must be logged in to submit a report.');
//       return;
//     }

//     try {
//       const userDocRef = doc(firestore, 'users', user.uid);
//       const userDocSnap = await getDoc(userDocRef);
//       const assignedMunicipality = userDocSnap.exists()
//         ? userDocSnap.data().municipality
//         : null;

//       if (
//         assignedMunicipality &&
//         municipality.toLowerCase() !== assignedMunicipality.toLowerCase()
//       ) {
//         Alert.alert(
//           'Restricted Area',
//           `You can only report in ${assignedMunicipality}. Your current/entered location is ${municipality}.`
//         );
//         return;
//       }

//       const newReport = {
//         violationType: violation.title,
//         status: 'Pending',
//         licensePlate,
//         vehicleDetails,
//         timeOfViolation,
//         userId: user.uid,
//         timestamp: new Date().toISOString(),
//         imageUrl: imageUrl || null,
//         municipality,
//         location: formattedAddress || 'Unknown',
//       };

//       await addDoc(collection(firestore, 'reports'), newReport);
//       Alert.alert('Success', 'Your report has been submitted!');
//       navigation.navigate('MyReportsPage');
//     } catch (error) {
//       console.error('Error submitting report:', error);
//       Alert.alert('Error', 'Failed to submit the report.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
//         <Ionicons name="arrow-back" size={24} color="#3d3f3d" />
//       </Pressable>

//       <Text style={styles.title}>Step 3: Provide Additional Details</Text>
//       <Text style={styles.subtitle}>{violation.title}</Text>

//       <Text style={styles.label}>License Plate Number</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter license plate"
//         value={licensePlate}
//         onChangeText={setLicensePlate}
//       />

//       <Text style={styles.label}>Vehicle Description</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter vehicle details (e.g., Color, Make, Model)"
//         value={vehicleDetails}
//         onChangeText={setVehicleDetails}
//       />

//       <Text style={styles.label}>Time of Violation</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter time (e.g., 2:30 PM)"
//         value={timeOfViolation}
//         onChangeText={setTimeOfViolation}
//       />

//       <Text style={styles.label}>Municipality</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter or confirm municipality"
//         value={municipality}
//         onChangeText={setMunicipality}
//       />

//       <Text style={styles.label}>Violation Location</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Street address will auto-fill"
//         value={formattedAddress}
//         onChangeText={setFormattedAddress}
//       />

//       <Pressable style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit Report</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#eff1ef' },
//   backButton: { position: 'absolute', top: 20, left: 15, zIndex: 10 },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#3d3f3d',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#5d615d',
//     marginBottom: 15,
//     textAlign: 'center',
//     fontStyle: 'italic',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#3d3f3d',
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#a5aba5',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 15,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#5A6E5B',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#eff1ef',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   Pressable,
//   Alert,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   doc,
//   getDoc,
// } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import * as Location from 'expo-location';

// export default function AdditionalDetailsPage({ route, navigation }) {
//   const [licensePlate, setLicensePlate] = useState('');
//   const [vehicleDetails, setVehicleDetails] = useState('');
//   const [timeOfViolation, setTimeOfViolation] = useState('');
//   const [formattedAddress, setFormattedAddress] = useState('');
//   const [address, setAddress] = useState(null); // store raw reverse geocoded address

//   const violation = route.params?.violation || { title: 'Unknown Violation' };
//   const imageUrl = route.params?.imageUrl;

//   const auth = getAuth();
//   const firestore = getFirestore();
//   const user = auth.currentUser;

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         let { status } = await Location.requestForegroundPermissionsAsync();
//         if (status !== 'granted') {
//           Alert.alert(
//             'Location Permission Denied',
//             'We need your location to determine your municipality.'
//           );
//           return;
//         }

//         const loc = await Location.getCurrentPositionAsync({});
//         const [place] = await Location.reverseGeocodeAsync(loc.coords);

//         const addressText = `${place?.street || ''}, ${place?.city || ''}, ${place?.region || ''}, ${place?.country || ''}`;
//         setFormattedAddress(addressText);
//         setAddress(place); // Store full place info for checking
//       } catch (err) {
//         console.error('Error getting location:', err);
//         setFormattedAddress('');
//         setAddress(null);
//       }
//     };

//     fetchLocation();
//   }, []);

//   const handleSubmit = async () => {
//     if (!licensePlate || !vehicleDetails || !timeOfViolation) {
//       Alert.alert('Missing Details', 'Please fill out all fields before submitting.');
//       return;
//     }

//     if (!user) {
//       Alert.alert('Error', 'You must be logged in to submit a report.');
//       return;
//     }

//     try {
//       const userDocRef = doc(firestore, 'users', user.uid);
//       const userDocSnap = await getDoc(userDocRef);
//       const assignedMunicipality =
//        userDocSnap.exists() &&
//        (userDocSnap.data().municipality || userDocSnap.data().Municipality);
//     ;

//       const detectedCity = address?.city?.toLowerCase().trim() || '';
//       const assigned = assignedMunicipality?.toLowerCase().trim() || '';

//       console.log('📍 Detected:', detectedCity);
//       console.log('✅ Assigned:', assigned);

//       if (assigned && detectedCity !== assigned) {
//         Alert.alert(
//           'Restricted Area',
//           `You are only allowed to report in ${assignedMunicipality}. Your detected location is ${address?.city || 'Unknown'}.`
//         );
//         return;
//       }

//       const newReport = {
//         violationType: violation.title,
//         status: 'Pending',
//         licensePlate,
//         vehicleDetails,
//         timeOfViolation,
//         userId: user.uid,
//         timestamp: new Date().toISOString(),
//         imageUrl: imageUrl || null,
//         municipality: assignedMunicipality, // ✅ always store from Firestore
//         location: formattedAddress || 'Unknown', // ✅ store full readable address
//       };

//       await addDoc(collection(firestore, 'reports'), newReport);
//       Alert.alert('Success', 'Your report has been submitted!');
//       navigation.navigate('My Reports');
//     } catch (error) {
//       console.error('Error submitting report:', error);
//       Alert.alert('Error', 'Failed to submit the report.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
//         <Ionicons name="arrow-back" size={24} color="#3d3f3d" />
//       </Pressable>

//       <Text style={styles.title}>Step 3: Provide Additional Details</Text>
//       <Text style={styles.subtitle}>{violation.title}</Text>

//       <Text style={styles.label}>License Plate Number</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter license plate"
//         value={licensePlate}
//         onChangeText={setLicensePlate}
//       />

//       <Text style={styles.label}>Vehicle Description</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter vehicle details (e.g., Color, Make, Model)"
//         value={vehicleDetails}
//         onChangeText={setVehicleDetails}
//       />

//       <Text style={styles.label}>Time of Violation</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter time (e.g., 2:30 PM)"
//         value={timeOfViolation}
//         onChangeText={setTimeOfViolation}
//       />

//       <Text style={styles.label}>Violation Location</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Auto-fetched from your current location"
//         value={formattedAddress}
//         editable={false}
//       />

//       <Pressable style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit Report</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#eff1ef' },
//   backButton: { position: 'absolute', top: 20, left: 15, zIndex: 10 },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#3d3f3d',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#5d615d',
//     marginBottom: 15,
//     textAlign: 'center',
//     fontStyle: 'italic',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#3d3f3d',
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#a5aba5',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 15,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#5A6E5B',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#eff1ef',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import * as Location from 'expo-location';

export default function AdditionalDetailsPage({ route, navigation }) {
  const [licensePlate, setLicensePlate] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState('');
  const [timeOfViolation, setTimeOfViolation] = useState('');
  const [formattedAddress, setFormattedAddress] = useState('');
  const [address, setAddress] = useState(null);

  const violation = route.params?.violation || { title: 'Unknown Violation' };
  const imageUrl = route.params?.imageUrl;

  const auth = getAuth();
  const firestore = getFirestore();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Location Permission Denied',
            'We need your location to determine your municipality.'
          );
          return;
        }

        const loc = await Location.getCurrentPositionAsync({});
        const [place] = await Location.reverseGeocodeAsync(loc.coords);

        const addressText = `${place?.street || ''}, ${place?.city || ''}, ${place?.region || ''}, ${place?.country || ''}`;
        setFormattedAddress(addressText);
        setAddress(place);
      } catch (err) {
        console.error('Error getting location:', err);
        setFormattedAddress('');
        setAddress(null);
      }
    };

    fetchLocation();
  }, []);

  const handleSubmit = async () => {
    if (!licensePlate || !vehicleDetails || !timeOfViolation) {
      Alert.alert('Missing Details', 'Please fill out all fields before submitting.');
      return;
    }

    if (!user) {
      Alert.alert('Error', 'You must be logged in to submit a report.');
      return;
    }

    try {
      const userDocRef = doc(firestore, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);
      const assignedMunicipality =
        userDocSnap.exists() &&
        (userDocSnap.data().municipality || userDocSnap.data().Municipality);

      const detectedCity = address?.city?.toLowerCase().trim() || '';
      const assigned = assignedMunicipality?.toLowerCase().trim() || '';

      console.log('📍 Detected:', detectedCity);
      console.log('✅ Assigned:', assigned);

      if (assigned && detectedCity !== assigned) {
        Alert.alert(
          'Restricted Area',
          `You are only allowed to report in ${assignedMunicipality}. Your detected location is ${address?.city || 'Unknown'}.`
        );
        return;
      }

      const newReport = {
        violationType: violation.title,
        status: 'Pending',
        licensePlate,
        vehicleDetails,
        timeOfViolation,
        userId: user.uid,
        timestamp: new Date().toISOString(),
        imageUrl: imageUrl || null,
        municipality: assignedMunicipality,
        location: formattedAddress || 'Unknown',
      };

      await addDoc(collection(firestore, 'reports'), newReport);
      Alert.alert('Success', 'Your report has been submitted!');
      navigation.navigate('MainApp', { screen: 'My Reports' });
    } catch (error) {
      console.error('Error submitting report:', error);
      Alert.alert('Error', 'Failed to submit the report.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#3d3f3d" />
          </Pressable>

          <Text style={styles.title}>Step 3: Provide Additional Details</Text>
          <Text style={styles.subtitle}>{violation.title}</Text>

          <Text style={styles.label}>License Plate Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter license plate"
            value={licensePlate}
            onChangeText={setLicensePlate}
          />

          <Text style={styles.label}>Vehicle Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter vehicle details (e.g., Color, Make, Model)"
            value={vehicleDetails}
            onChangeText={setVehicleDetails}
          />

          <Text style={styles.label}>Time of Violation</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter time (e.g., 2:30 PM)"
            value={timeOfViolation}
            onChangeText={setTimeOfViolation}
          />

          <Text style={styles.label}>Violation Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Auto-fetched from your current location"
            value={formattedAddress}
            editable={false}
          />

          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit Report</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eff1ef',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  backButton: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#3d3f3d',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#5d615d',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3d3f3d',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#a5aba5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#5A6E5B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#eff1ef',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
