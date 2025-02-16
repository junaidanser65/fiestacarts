import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

export default function Navigator() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navigationButton}>
        <Image
          source={require('../assets/home_icon.png')}
          style={styles.navigationIcon}
        />
        <Text style={styles.categoryText}>Vendors</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigationButton}>
        <Image
          source={require('../assets/search_icon.png')}
          style={styles.navigationIcon}
        />
        <Text style={styles.categoryText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigationButton}>
        <Image
          source={require('../assets/cart_icon.png')}
          style={styles.navigationIcon}
        />
        <Text style={styles.categoryText}>Bookings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderColor: '#000',
    backgroundColor: '#f9f9f9',
  },
  navigationIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 35,
    borderRadius: 25,
  },
  navigationButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 13,
  },
});