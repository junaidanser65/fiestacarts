import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Categories from './components/Categories';
import FeaturedVendors from './components/FeaturedVendors';
import VendorMap from './components/VendorMap';
import VendorUpdates from './components/VendorUpdates';
import VendorReviews from './components/VendorReviews';
import BookVendorButton from './components/BookVendorButton';
import Navigator from './components/Navigator';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Categories />
        <FeaturedVendors />
        <VendorMap />
        <VendorUpdates />
        <VendorReviews />
        <BookVendorButton />
      </ScrollView>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});