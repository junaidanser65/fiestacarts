import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FeaturedVendors() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Featured Vendors</Text>
        <TouchableOpacity style={styles.viewAll_container}>
          <Text style={styles.viewAll}>View All Vendors {'>'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.vendorsContainer}>
        <VendorCard
          name="Biryani"
          location="DHA Phase 5"
          rating={4.5}
          image={require('../assets/food_images/biryani.jpeg')}
        />
        <VendorCard
          name="Fries"
          location="DHA Phase 8"
          rating={5}
          image={require('../assets/food_images/fries.jpeg')}
        />
        <VendorCard
          name="Chicken Tikka"
          location="DHA Phase 4"
          rating={5}
          image={require('../assets/food_images/chicken_tikka.jpg')}
        />
        <VendorCard
          name="Lassi"
          location="DHA Phase 2"
          rating={5}
          image={require('../assets/food_images/lassi.jpg')}
        />
      </ScrollView>
    </View>
  );
}

function VendorCard({ name, location, rating, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.vendorImage} />
      <Text style={styles.vendorName}>{name}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color="#ff4500" />
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll_container:{
    borderColor: '#ff4500',
    backgroundColor: '#ff4500',
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#ff4500',
    borderRadius: 8,
    paddingHorizontal: 13,
  },
  viewAll: {
    color: '#fff',
  },
  vendorsContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  card: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginRight: 16,  // Space between cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  vendorImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  vendorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
  },
});
