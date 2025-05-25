import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function TermsAndConditionsScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  // Check if user has already agreed
  useEffect(() => {
    const checkAgreement = async () => {
      const agreed = await AsyncStorage.getItem('termsAgreed');
      if (agreed === 'true') {
        navigation.goBack();
      } else {
        setLoading(false);
      }
    };
    checkAgreement();
  }, []);

  const handleAgree = async () => {
    try {
      await AsyncStorage.setItem('termsAgreed', 'true');
      Alert.alert("Thank you", "You've accepted the Terms & Conditions.");
      navigation.goBack(); // go back to login
    } catch (error) {
      Alert.alert("Error", "Could not save agreement. Please try again.");
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4A7C59" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms & Conditions</Text>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Welcome to the Municipal By-Law Reporting App. By using this app, you agree to the following terms and conditions:
        </Text>

        <Text style={styles.sectionHeader}>1. Usage</Text>
        <Text style={styles.text}>
          This app is intended to report by-law violations within your municipality. Any misuse may result in account restrictions or removal.
        </Text>

        <Text style={styles.sectionHeader}>2. Data Privacy</Text>
        <Text style={styles.text}>
          Your reports, including images and your location, may be shared with authorized municipal officials. We do not sell or share your data for commercial purposes.
        </Text>

        <Text style={styles.sectionHeader}>3. Accuracy</Text>
        <Text style={styles.text}>
          Please ensure your submitted reports are accurate and truthful. False reports may lead to a review or suspension.
        </Text>

        <Text style={styles.sectionHeader}>4. Updates</Text>
        <Text style={styles.text}>
          These terms may be updated. Continued use of the app means you agree to any updated terms.
        </Text>

        <Text style={styles.text}>
          If you do not agree with these terms, please refrain from using the app.
        </Text>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleAgree}>
        <Text style={styles.buttonText}>I Agree</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f9f8',
      padding: 20,
      paddingTop: 40,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f7f9f8',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#2F4236',
      marginBottom: 20,
      textAlign: 'center',
    },
    scrollView: {
      flex: 1,
      marginBottom: 20,
    },
    sectionHeader: {
      fontSize: 16,
      fontWeight: '600',
      color: '#2F4236',
      marginTop: 16,
      marginBottom: 6,
    },
    text: {
      fontSize: 14,
      color: '#4f5851',
      lineHeight: 22,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#4A7C59',
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#eff1ef',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  