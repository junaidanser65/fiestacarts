import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const storedEmail = await AsyncStorage.getItem("userEmail");
    const storedPassword = await AsyncStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      await AsyncStorage.setItem("userToken", "dummy-token"); // Simulating authentication
      navigation.replace("Home"); // Redirect to Home
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleblack}>Welcome Back</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.linkText}>Don't have an account? Sign up</Text>
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
  linkText: {
    marginTop: 16,
    color: '#ff4500',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
