import React from "react"
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native"

export default function VendorUpdates() {
  const updates = [
    {
      id: 1,
      vendorName: "Al Naz Biryani Center",
      location: "City Center",
      time: "2h ago",
      image: require("../assets/updates_images/menu.jpg"),
      content: "Excited to announce our new menu!",
      tags: ["Food", "Menu"],
    },
    {
      id: 2,
      vendorName: "Fiesta Fries",
      location: "Downtown",
      time: "4h ago",
      image: require("../assets/updates_images/fries_discount.jpeg"),
      content: "Special discount for today only!",
      tags: ["Discount", "Offer"],
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Vendor Updates</Text>
        <TouchableOpacity style={styles.viewAll_container}>
          <Text style={styles.viewAll}>See More Posts {">"}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {updates.map((update) => (
          <View key={update.id} style={styles.updateCard}>
            <View style={styles.updateHeader}>
              <Text style={styles.vendorName}>{update.vendorName}</Text>
              <Text style={styles.updateTime}>{update.time}</Text>
            </View>
            <Text style={styles.location}>{update.location}</Text>
            <Image source={update.image} style={styles.updateImage} />
            <Text style={styles.updateContent}>{update.content}</Text>
            <View style={styles.tagsContainer}>
              {update.tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>
                  #{tag}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  viewAll_container:{
    borderColor: '#ff4500',
    backgroundColor: '#ff4500',
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#ff4500',
    borderRadius: 8,
    paddingHorizontal: 13,
  },
  viewAll: {
    color: "#fff",
  },
  updateCard: {
    width: 300,
    marginLeft: 16,
    marginVertical: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  updateHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  vendorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  updateTime: {
    fontSize: 12,
    color: "#666",
  },
  location: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  updateImage: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    marginBottom: 8,
  },
  updateContent: {
    fontSize: 14,
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    fontSize: 12,
    color: "#007AFF",
    marginRight: 8,
  },
})

