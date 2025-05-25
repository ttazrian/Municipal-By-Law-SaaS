// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';

// export default function CitizenDashboard() {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied.');
//                 setLoading(false);
//                 return;
//             }

//             let currentLocation = await Location.getCurrentPositionAsync({});
//             setLocation(currentLocation.coords);
//             setLoading(false);
//         })();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <ScrollView contentContainerStyle={styles.scrollContainer}>
//                 {/* Header Section */}
//                 <Text style={styles.pageTitle}>Home</Text>
//                 <View style={styles.header}>
//                     <Text style={styles.welcomeTitle}>Welcome to</Text>
//                     <Text style={styles.appTitle}>Municipal By-Law Reporting</Text>
//                     <Text style={styles.description}>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
//                     </Text>
//                 </View>

//                 {/* By-Law Related Articles */}
//                 <View style={styles.section}>
//                     <Text style={styles.sectionTitle}>By-Law Related Article:</Text>
//                     <View style={styles.articlePlaceholder} />
//                 </View>

//                 <View style={styles.section}>
//                     <Text style={styles.sectionTitle}>By-Law Related Article:</Text>
//                     <View style={styles.articlePlaceholder} />
//                 </View>

//                 {/* Location Section */}
//                 <View style={styles.section}>
//                     <Text style={styles.sectionTitle}>You are currently in:</Text>
                    
//                     {loading ? (
//                         <ActivityIndicator size="large" color="#5A6E5B" style={styles.loadingIndicator} />
//                     ) : location ? (
//                         <MapView
//                             style={styles.map}
//                             initialRegion={{
//                                 latitude: location.latitude,
//                                 longitude: location.longitude,
//                                 latitudeDelta: 0.01,
//                                 longitudeDelta: 0.01,
//                             }}
//                         >
//                             <Marker
//                                 coordinate={{
//                                     latitude: location.latitude,
//                                     longitude: location.longitude,
//                                 }}
//                                 title="Your Location"
//                             />
//                         </MapView>
//                     ) : (
//                         <Text style={styles.errorText}>{errorMsg || 'Unable to fetch location.'}</Text>
//                     )}
//                 </View>
//             </ScrollView>

//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f8f9fa',
//     },
//     scrollContainer: {
//         paddingVertical: 50,
//         paddingHorizontal: 20,
//     },
//     pageTitle: {
//         fontSize: 14,
//         color: '#6b756f',
//         marginBottom: 5,
//     },
//     header: {
//         marginBottom: 10, // 🔹 Reduced spacing to align better
//     },
//     welcomeTitle: {
//         fontSize: 16,
//         color: '#5d615d',
//         fontWeight: '500',
//     },
//     appTitle: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#2F4236',
//         marginBottom: 5, // 🔹 Reduced gap below title
//     },
//     description: {
//         fontSize: 14,
//         color: '#6b756f',
//         lineHeight: 20,
//     },
//     section: {
//         marginBottom: 15,
//     },
//     sectionTitle: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#3d3f3d',
//         marginBottom: 8, // 🔹 More consistent spacing
//     },
//     articlePlaceholder: {
//         height: 80,
//         backgroundColor: '#dde4dd',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//         elevation: 2,
//         marginBottom: 10, // 🔹 Ensure articles are evenly spaced
//     },
//     map: {
//         height: 150,
//         borderRadius: 12,
//         marginTop: 5, // 🔹 Small spacing above map
//     },
//     bottomNav: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         paddingVertical: 12,
//         backgroundColor: '#5A6E5B',
//         position: 'absolute', // 🔹 Make sure it's not stacking
//         bottom: 0,
//         left: 0,
//         right: 0,
//     },
//     navItem: {
//         color: '#fff',
//         fontSize: 14,
//     },
// });
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function CitizenDashboard() {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied.');
        setLoading(false);
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);

      // Get city name
      let reverseGeocode = await Location.reverseGeocodeAsync(currentLocation.coords);
      if (reverseGeocode && reverseGeocode.length > 0) {
        setCity(reverseGeocode[0].city || '');
      }

      setLoading(false);
    })();
  }, []);

  const ArticleCard = ({ title, description }) => (
    <TouchableOpacity style={styles.articleCard}>
      <Text style={styles.articleTitle}>{title}</Text>
      <Text style={styles.articleDescription}>{description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.dashboardTitle}>Welcome to Municipal By-Law Reporting</Text>
          <Text style={styles.description}>
            Easily track, view, and submit by-law violations within your municipality.
          </Text>
        </View>

        {/* Articles Section */}
        <View style={styles.section}>
          <ArticleCard
            title="Noise Violation"
            description="Report loud music, construction noise, or disturbances."
          />
        </View>

        <View style={styles.section}>
          <ArticleCard
            title="Illegal Parking"
            description="Identify vehicles parked in restricted zones."
          />
        </View>

        {/* Location Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>You are currently in:</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#5A6E5B" style={styles.loadingIndicator} />
          ) : location ? (
            <>
              <Text style={styles.cityLabel}>{city || 'Unknown Location'}</Text>
              <View style={styles.mapCard}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: location.latitude,
                      longitude: location.longitude,
                    }}
                    title="Your Location"
                  />
                </MapView>
              </View>
            </>
          ) : (
            <Text style={styles.errorText}>{errorMsg || 'Unable to fetch location.'}</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9f8',
  },
  scrollContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 30,
  },
  dashboardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2F4236',
    marginBottom: 8,
    lineHeight: 28,
  },
  description: {
    fontSize: 14,
    color: '#6b756f',
    lineHeight: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3d3f3d',
    marginBottom: 10,
  },
  articleCard: {
    backgroundColor: '#e1e7e1',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 3,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F4236',
    marginBottom: 6,
  },
  articleDescription: {
    fontSize: 14,
    color: '#4f5851',
  },
  mapCard: {
    backgroundColor: '#e1e7e1',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    marginTop: 10,
  },
  map: {
    height: 180,
    width: '100%',
  },
  cityLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2F4236',
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
});
