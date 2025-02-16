import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/Header';
import Categories from '../components/Categories';
import FeaturedVendors from '../components/FeaturedVendors';
import VendorMap from '../components/VendorMap';
import VendorUpdates from '../components/VendorUpdates';
import VendorReviews from '../components/VendorReviews';
import BookVendorButton from '../components/BookVendorButton';
import Navigator from '../components/Navigator';

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    const checkAuth = async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      if (!userToken) {
        navigation.replace("Welcome");
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    navigation.replace("Welcome");
  };

  // Add Logout button in the header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={styles.menuButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={28} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Categories />
        <FeaturedVendors />
        <VendorMap />
        <VendorUpdates />
        <VendorReviews />
        <BookVendorButton />
      </ScrollView>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuButton: {
    marginLeft: 15,
    backgroundColor: '#ff4500',
    padding: 8,
    borderRadius: 8,
  },
});
