import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Save user credentials in AsyncStorage
    await AsyncStorage.setItem("userEmail", email);
    await AsyncStorage.setItem("userPassword", password);

    Alert.alert("Success", "Account created successfully!");
    navigation.replace("Login"); // Redirect to Login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleblack}>Create Account</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
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
