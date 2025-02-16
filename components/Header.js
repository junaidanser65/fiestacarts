import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleblack}>Welcome to </Text>
      <Text style={styles.titleorange}>FiestaCarts</Text>
      <Text style={styles.subtitle}>Your one-stop solution for event services</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or category"
        />
        <Ionicons name="search" size={24} color="white" style={styles.searchIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 16,
    backgroundColor: '#fff',
  },
  titleblack: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleorange: {
    fontSize: 24,
    color:'#ff4500',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 8,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ff4500',
    borderRadius: 8,
    backgroundColor: '#ff4500',
  },
});