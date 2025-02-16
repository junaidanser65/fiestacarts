import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function BookVendorButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Vendor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 30,
    width: '90%',
  },
  button: {
    bottom: 10,
    left: 20,
    right: 20,
    backgroundColor: '#ff4500',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});