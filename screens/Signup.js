import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!fullName || !email || !password) {
      Alert.alert("Error", "All fields are required");
      return;
    }
    
    try {
      await AsyncStorage.setItem("userFullName", fullName);
      await AsyncStorage.setItem("userEmail", email);
      await AsyncStorage.setItem("userPassword", password);
      Alert.alert("Success", "Account created successfully");
      navigation.replace("Login");
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <LinearGradient colors={["#FF6B6B", "#FF8E53"]} style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../assets/FiestaCarts_logo.png")} style={styles.logo} />
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#fff"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#fff"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#fff"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
          <MaterialIcons name="arrow-forward-ios" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    width: "90%",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF5722",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  icon: {
    marginLeft: 10,
  },
  loginText: {
    color: "white",
    marginTop: 20,
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default SignupScreen;
