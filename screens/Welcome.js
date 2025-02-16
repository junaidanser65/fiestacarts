import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Entypo, Feather } from "@expo/vector-icons";

const WelcomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#FF6B6B", "#FF8E53"]} style={styles.container}>
      {/* Logo & Branding */}
      <View style={styles.content}>
        <Image
          source={require("../assets/FiestaCarts_logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Fiesta Carts</Text>
        <Text style={styles.subtitle}>Your Market, Your Way</Text>

        {/* Features Section */}
        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <MaterialIcons name="shopping-cart" size={30} color="white" />
            <Text style={styles.featureText}>Easy Shopping</Text>
          </View>
          <View style={styles.feature}>
            <Entypo name="shop" size={30} color="white" />
            <Text style={styles.featureText}>Local Markets</Text>
          </View>
          <View style={styles.feature}>
            <Feather name="truck" size={30} color="white" />
            <Text style={styles.featureText}>Fast Delivery</Text>
          </View>
        </View>

      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
          <MaterialIcons name="person-add" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
          <MaterialIcons name="login" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

/* Feature Component */
const Feature = ({ icon, text }) => (
  <View style={styles.feature}>
    <MaterialIcons name={icon} size={30} color="white" />
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
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
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginBottom: 30,
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 40,
    marginTop: 50,
  },
  feature: {
    alignItems: "center",
  },
  featureText: {
    color: "white",
    marginTop: 5,
    fontSize: 14,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 30,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FF5722",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: "90%",
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
