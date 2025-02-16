import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function VendorReviews() {
  const reviews = [
    {
      id: 1,
      customerName: "Junaid Anser",
      rating: 5,
      comment: "Great service, highly recommended!",
    },
    {
      id: 2,
      customerName: "Syed Muhammad Rameez Raza",
      rating: 4,
      comment: "Delicious food and nice presentation",
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Vendor Reviews</Text>
        <TouchableOpacity style={styles.viewAll_container}>
          <Text style={styles.viewAll}>View All Reviews {">"}</Text>
        </TouchableOpacity>
      </View>
      {reviews.map((review) => (
        <View key={review.id} style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Text style={styles.customerName}>{review.customerName}</Text>
            <View style={styles.ratingContainer}>
              {[...Array(5)].map((_, index) => (
                <Ionicons
                  key={index}
                  name={index < review.rating ? "star" : "star-outline"}
                  size={16}
                  color="#ff4500"
                />
              ))}
            </View>
          </View>
          <Text style={styles.comment}>{review.comment}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
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
  reviewCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  customerName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
  },
  comment: {
    fontSize: 14,
  },
})

