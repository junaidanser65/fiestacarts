import React from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import MapView, { Marker } from "react-native-maps"

const { width, height } = Dimensions.get("window")
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default function VendorMap() {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Vendor Locations</Text>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} initialRegion={initialRegion}>
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Example Vendor"
            description="This is an example vendor location"
          />
        </MapView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  mapContainer: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 8,
  },
  map: {
    width: "100%",
    height: "100%",
  },
})

