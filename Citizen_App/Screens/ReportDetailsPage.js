// // // // import React from 'react';
// // // // import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
// // // // import { Ionicons } from '@expo/vector-icons';

// // // // export default function ReportDetailsPage({ route, navigation }) {
// // // //     const report = route.params?.report;

// // // //     if (!report) {
// // // //         return (
// // // //             <View style={styles.container}>
// // // //                 <Text style={styles.errorText}>No report details available.</Text>
// // // //             </View>
// // // //         );
// // // //     }

// // // //     return (
// // // //         <ScrollView style={styles.container}>
// // // //             {/* 🔙 Back Button */}
// // // //             <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
// // // //                 <Ionicons name="arrow-back" size={24} color="#3d3f3d" />
// // // //             </Pressable>

// // // //             <Text style={styles.title}>{report.violationType}</Text>
// // // //             <Text style={styles.status}>Status: {report.status}</Text>
// // // //             <Text style={styles.field}>📍 Location: {report.location}</Text>
// // // //             <Text style={styles.field}>📅 Violation Date: {report.violationDate}</Text>
// // // //             <Text style={styles.field}>🚔 Assigned Officer: {report.assignedOfficer || "Not Assigned"}</Text>
// // // //             <Text style={styles.field}>📞 Contact: {report.phoneNumber}</Text>

// // // //             {report.rejectReason && (
// // // //                 <Text style={[styles.field, styles.rejectReason]}>
// // // //                     ❌ Rejection Reason: {report.rejectReason}
// // // //                 </Text>
// // // //             )}
// // // //         </ScrollView>
// // // //     );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //     container: { flex: 1, padding: 20, backgroundColor: '#eff1ef' },
// // // //     backButton: { position: "absolute", top: 20, left: 15, zIndex: 10 },
// // // //     title: { fontSize: 24, fontWeight: 'bold', color: '#3d3f3d', marginBottom: 10 },
// // // //     status: { fontSize: 16, fontWeight: 'bold', color: '#5d615d', marginBottom: 10 },
// // // //     field: { fontSize: 16, color: '#3d3f3d', marginBottom: 8 },
// // // //     rejectReason: { color: '#d9534f', fontWeight: "bold" },
// // // //     errorText: { fontSize: 18, textAlign: "center", marginTop: 50, color: "#d9534f" },
// // // // });
// // // // import React from 'react';
// // // // import { View, Text, StyleSheet, ScrollView } from 'react-native';

// // // // export default function ReportDetailsPage({ route }) {
// // // //     const { report } = route.params;

// // // //     return (
// // // //         <ScrollView contentContainerStyle={styles.container}>
// // // //             <Text style={styles.title}>Report Details</Text>

// // // //             <Text style={styles.label}>Violation Type:</Text>
// // // //             <Text style={styles.value}>{report.violationType || "N/A"}</Text>

// // // //             <Text style={styles.label}>Status:</Text>
// // // //             <Text style={styles.value}>{report.status || "N/A"}</Text>

// // // //             <Text style={styles.label}>Description:</Text>
// // // //             <Text style={styles.value}>{report.description || "No description provided."}</Text>

// // // //             <Text style={styles.label}>Submitted At:</Text>
// // // //             <Text style={styles.value}>
// // // //                 {report.createdAt?.toDate
// // // //                     ? report.createdAt.toDate().toLocaleString()
// // // //                     : "N/A"}
// // // //             </Text>

// // // //             {/* Add more fields if available: imageUri, location, etc. */}
// // // //         </ScrollView>
// // // //     );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //     container: {
// // // //         padding: 20,
// // // //         backgroundColor: '#eff1ef',
// // // //     },
// // // //     title: {
// // // //         fontSize: 22,
// // // //         fontWeight: 'bold',
// // // //         color: '#2F4236',
// // // //         marginBottom: 20,
// // // //     },
// // // //     label: {
// // // //         fontSize: 14,
// // // //         fontWeight: 'bold',
// // // //         marginTop: 10,
// // // //         color: '#3d3f3d',
// // // //     },
// // // //     value: {
// // // //         fontSize: 16,
// // // //         color: '#5d615d',
// // // //         marginTop: 2,
// // // //     },
// // // // });
// // // import React from 'react';
// // // import { View, Text, StyleSheet, ScrollView } from 'react-native';

// // // export default function ReportDetailsPage({ route }) {
// // //     const { report } = route.params;

// // //     return (
// // //         <ScrollView contentContainerStyle={styles.container}>
// // //             <Text style={styles.title}>Report Details</Text>

// // //             <Text style={styles.label}>Violation Type:</Text>
// // //             <Text style={styles.value}>{report.violationType || "N/A"}</Text>

// // //             <Text style={styles.label}>Status:</Text>
// // //             <Text style={styles.value}>{report.status || "N/A"}</Text>

// // //             <Text style={styles.label}>Vehicle Details:</Text>
// // //             <Text style={styles.value}>{report.vehicleDetails || "N/A"}</Text>

// // //             <Text style={styles.label}>License Plate:</Text>
// // //             <Text style={styles.value}>{report.licensePlate || "N/A"}</Text>

// // //             <Text style={styles.label}>Submitted On:</Text>
// // //             <Text style={styles.value}>
// // //                 {report.timestamp ? new Date(report.timestamp).toLocaleDateString() : "N/A"}
// // //             </Text>

// // //             <Text style={styles.label}>Submitted At:</Text>
// // //             <Text style={styles.value}>
// // //                 {report.timestamp ? new Date(report.timestamp).toLocaleTimeString() : "N/A"}
// // //             </Text>

// // //         </ScrollView>
// // //     );
// // // }

// // // const styles = StyleSheet.create({
// // //     container: {
// // //         padding: 20,
// // //         backgroundColor: '#eff1ef',
// // //     },
// // //     title: {
// // //         fontSize: 22,
// // //         fontWeight: 'bold',
// // //         color: '#2F4236',
// // //         marginBottom: 20,
// // //     },
// // //     label: {
// // //         fontSize: 14,
// // //         fontWeight: 'bold',
// // //         marginTop: 10,
// // //         color: '#3d3f3d',
// // //     },
// // //     value: {
// // //         fontSize: 16,
// // //         color: '#5d615d',
// // //         marginTop: 2,
// // //     },
// // // });
// // import React from 'react';
// // import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';

// // export default function ReportDetailsPage({ route, navigation }) {
// //     const { report } = route.params;

// //     return (
// //         <ScrollView contentContainerStyle={styles.container}>
// //             {/* 🔙 Back Button */}
// //             <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
// //                 <Ionicons name="arrow-back" size={24} color="#3d3f3d" />
// //             </Pressable>

// //             <Text style={styles.title}>Report Details</Text>

// //             <Text style={styles.label}>Violation Type:</Text>
// //             <Text style={styles.value}>{report.violationType || "N/A"}</Text>

// //             <Text style={styles.label}>Status:</Text>
// //             <Text style={styles.value}>{report.status || "N/A"}</Text>

// //             <Text style={styles.label}>Vehicle Details:</Text>
// //             <Text style={styles.value}>{report.vehicleDetails || "N/A"}</Text>

// //             <Text style={styles.label}>License Plate:</Text>
// //             <Text style={styles.value}>{report.licensePlate || "N/A"}</Text>

// //             <Text style={styles.label}>Submitted On:</Text>
// //             <Text style={styles.value}>
// //                 {report.timestamp ? new Date(report.timestamp).toLocaleDateString() : "N/A"}
// //             </Text>

// //             <Text style={styles.label}>Submitted At:</Text>
// //             <Text style={styles.value}>
// //                 {report.timestamp ? new Date(report.timestamp).toLocaleTimeString() : "N/A"}
// //             </Text>
// //         </ScrollView>
// //     );
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         padding: 20,
// //         backgroundColor: '#eff1ef',
// //         paddingTop: 50, // space for back button
// //     },
// //     backButton: {
// //         position: 'absolute',
// //         top: 10,
// //         left: 15,
// //         zIndex: 10,
// //         padding: 10,
// //         backgroundColor: 'rgba(0,0,0,0.05)',
// //         borderRadius: 50,
// //     },
// //     title: {
// //         fontSize: 22,
// //         fontWeight: 'bold',
// //         color: '#2F4236',
// //         marginBottom: 20,
// //     },
// //     label: {
// //         fontSize: 14,
// //         fontWeight: 'bold',
// //         marginTop: 10,
// //         color: '#3d3f3d',
// //     },
// //     value: {
// //         fontSize: 16,
// //         color: '#5d615d',
// //         marginTop: 2,
// //     },
// // });
// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// export default function ReportDetailsPage({ route, navigation }) {
//   const { report } = route.params;

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* 🔙 Back Button */}
//       <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
//         <Ionicons name="arrow-back" size={24} color="#3d3f3d" />
//       </Pressable>

//       <Text style={styles.title}>Report Details</Text>

//       <Text style={styles.label}>Violation Type:</Text>
//       <Text style={styles.value}>{report.violationType || "N/A"}</Text>

//       <Text style={styles.label}>Status:</Text>
//       <Text style={styles.value}>{report.status || "N/A"}</Text>

//       <Text style={styles.label}>Vehicle Details:</Text>
//       <Text style={styles.value}>{report.vehicleDetails || "N/A"}</Text>

//       <Text style={styles.label}>License Plate:</Text>
//       <Text style={styles.value}>{report.licensePlate || "N/A"}</Text>

//       <Text style={styles.label}>Submitted On:</Text>
//       <Text style={styles.value}>
//         {report.timestamp ? new Date(report.timestamp).toLocaleDateString() : "N/A"}
//       </Text>

//       <Text style={styles.label}>Submitted At:</Text>
//       <Text style={styles.value}>
//         {report.timestamp ? new Date(report.timestamp).toLocaleTimeString() : "N/A"}
//       </Text>

//       {/* ✅ Show uploaded evidence image if available */}
//       {report.imageUrl && (
//         <>
//           <Text style={styles.label}>Evidence Image:</Text>
//           <Image
//             source={{ uri: report.imageUrl }}
//             style={styles.image}
//             resizeMode="cover"
//           />
//         </>
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#eff1ef',
//     paddingTop: 50,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 10,
//     left: 15,
//     zIndex: 10,
//     padding: 10,
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 50,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#2F4236',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginTop: 10,
//     color: '#3d3f3d',
//   },
//   value: {
//     fontSize: 16,
//     color: '#5d615d',
//     marginTop: 2,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginTop: 10,
//     borderRadius: 10,
//     backgroundColor: '#ccc',
//   },
// });
// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// export default function ReportDetailsPage({ route, navigation }) {
//   const { report } = route.params;

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Report Details</Text>

//       <Text style={styles.label}>Violation Type:</Text>
//       <Text style={styles.value}>{report.violationType || "N/A"}</Text>

//       <Text style={styles.label}>Status:</Text>
//       <Text style={styles.value}>{report.status || "N/A"}</Text>

//       <Text style={styles.label}>Vehicle Details:</Text>
//       <Text style={styles.value}>{report.vehicleDetails || "N/A"}</Text>

//       <Text style={styles.label}>License Plate:</Text>
//       <Text style={styles.value}>{report.licensePlate || "N/A"}</Text>

//       <Text style={styles.label}>Submitted On:</Text>
//       <Text style={styles.value}>
//         {report.timestamp ? new Date(report.timestamp).toLocaleDateString() : "N/A"}
//       </Text>

//       <Text style={styles.label}>Submitted At:</Text>
//       <Text style={styles.value}>
//         {report.timestamp ? new Date(report.timestamp).toLocaleTimeString() : "N/A"}
//       </Text>

//       {/* ✅ Evidence Image */}
//       {report.imageUrl && (
//         <>
//           <Text style={styles.label}>Evidence Image:</Text>
//           <Image
//             source={{ uri: report.imageUrl }}
//             style={styles.image}
//             resizeMode="cover"
//           />
//         </>
//       )}

//       {/* 🔙 Back Button at Bottom */}
//       <Pressable style={styles.backButtonBottom} onPress={() => navigation.goBack()}>
//         <Ionicons name="arrow-back" size={20} color="#fff" />
//         <Text style={styles.backText}>Go Back</Text>
//       </Pressable>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#eff1ef',
//     paddingBottom: 40,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#2F4236',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginTop: 10,
//     color: '#3d3f3d',
//   },
//   value: {
//     fontSize: 16,
//     color: '#5d615d',
//     marginTop: 2,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginTop: 10,
//     borderRadius: 10,
//     backgroundColor: '#ccc',
//   },
//   backButtonBottom: {
//     marginTop: 30,
//     backgroundColor: '#5A6E5B',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 8,
//   },
//   backText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Pressable,
//   Image,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';

// export default function ReportDetailsPage({ route, navigation }) {
//   const { report } = route.params;

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#eff1ef' }}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.title}>Report Details</Text>

//         <Text style={styles.label}>Violation Type:</Text>
//         <Text style={styles.value}>{report.violationType || 'N/A'}</Text>

//         <Text style={styles.label}>Status:</Text>
//         <Text style={styles.value}>{report.status || 'N/A'}</Text>

//         <Text style={styles.label}>Vehicle Details:</Text>
//         <Text style={styles.value}>{report.vehicleDetails || 'N/A'}</Text>

//         <Text style={styles.label}>License Plate:</Text>
//         <Text style={styles.value}>{report.licensePlate || 'N/A'}</Text>

//         <Text style={styles.label}>Submitted On:</Text>
//         <Text style={styles.value}>
//           {report.timestamp
//             ? new Date(report.timestamp).toLocaleDateString()
//             : 'N/A'}
//         </Text>

//         <Text style={styles.label}>Submitted At:</Text>
//         <Text style={styles.value}>
//           {report.timestamp
//             ? new Date(report.timestamp).toLocaleTimeString()
//             : 'N/A'}
//         </Text>

//         {/* ✅ Evidence Image */}
//         {report.imageUrl && (
//           <>
//             <Text style={styles.label}>Evidence Image:</Text>
//             <Image
//               source={{ uri: report.imageUrl }}
//               style={styles.image}
//               resizeMode="cover"
//             />
//           </>
//         )}

//         {/* 🔙 Back Button */}
//         <Pressable
//           style={styles.backButtonBottom}
//           onPress={() => navigation.goBack()}
//         >
//           <Ionicons name="arrow-back" size={20} color="#fff" />
//           <Text style={styles.backText}>Go Back</Text>
//         </Pressable>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingBottom: 40,
//     backgroundColor: '#eff1ef',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#2F4236',
//     marginBottom: 24,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginTop: 12,
//     color: '#3d3f3d',
//   },
//   value: {
//     fontSize: 16,
//     color: '#5d615d',
//     marginTop: 2,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginTop: 10,
//     borderRadius: 10,
//     backgroundColor: '#ccc',
//   },
//   backButtonBottom: {
//     marginTop: 30,
//     backgroundColor: '#5A6E5B',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 8,
//   },
//   backText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ReportDetailsPage({ route, navigation }) {
  const { report } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eff1ef' }}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backIcon}>
          <Ionicons name="arrow-back" size={24} color="#3d3f3d" />
        </Pressable>
        <Text style={styles.title}>Report Details</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Violation Type</Text>
        <Text style={styles.value}>{report.violationType || 'N/A'}</Text>

        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>{report.status || 'N/A'}</Text>

        <Text style={styles.label}>Vehicle Details</Text>
        <Text style={styles.value}>{report.vehicleDetails || 'N/A'}</Text>

        <Text style={styles.label}>License Plate</Text>
        <Text style={styles.value}>{report.licensePlate || 'N/A'}</Text>

        <Text style={styles.label}>Submitted On</Text>
        <Text style={styles.value}>
          {report.timestamp
            ? new Date(report.timestamp).toLocaleDateString()
            : 'N/A'}
        </Text>

        <Text style={styles.label}>Submitted At</Text>
        <Text style={styles.value}>
          {report.timestamp
            ? new Date(report.timestamp).toLocaleTimeString()
            : 'N/A'}
        </Text>

        {report.location && (
          <>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>{report.location}</Text>
          </>
        )}

        {report.imageUrl && (
          <>
            <Text style={styles.label}>Evidence Image</Text>
            <Image
              source={{ uri: report.imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: '#eff1ef',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },   
  backIcon: {
    position: 'absolute',
    left: 20,
    top: 20,
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 30,
  },
  
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2F4236',
    textAlign:'center', 
  },
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#eff1ef',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#3d3f3d',
  },
  value: {
    fontSize: 16,
    color: '#5d615d',
    marginTop: 2,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
});
