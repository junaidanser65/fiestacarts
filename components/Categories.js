import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function Categories() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.category}>
        <Image
          source={require('../assets/vendors_icon.png')}
          style={styles.categoryIcon}
        />
        <Text style={styles.categoryText}>Vendors</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Image
          source={require('../assets/caterers_icon.png')}
          style={styles.categoryIcon}
        />
        <Text style={styles.categoryText}>Caterers</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  category: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 16,
  },
});