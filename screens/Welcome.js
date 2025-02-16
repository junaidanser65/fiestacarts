import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleblack}>Welcome to</Text>
      <Text style={styles.titleorange}>FiestaCarts</Text>
      <Text style={styles.subtitle}>Explore vendors around you</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonOutlineText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  titleblack: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleorange: {
    fontSize: 24,
    color: '#ff4500',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#ff4500',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonOutline: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#ff4500',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonOutlineText: {
    color: '#ff4500',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
