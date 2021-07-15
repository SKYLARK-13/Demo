import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Home = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.home}>
        <Text style={styles.homeText}>Home</Text>
      </View>
      <View>
        <Text style={styles.createText}>Create New Quote</Text>
      </View>
      <View style={styles.addContainer}>
        <TouchableOpacity style={styles.addButton} onPress={props.createPost}>
          <Ionicons name="md-add" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    alignItems: "center",
    justifyContent: "space-between",
  },
  home: {
    backgroundColor: "#F84726",
    padding: 50,
    width: "100%",
    alignItems: "center",
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  homeText: {
    fontSize: 16,
    color: "white",
  },
  createText: {
    fontSize: 20,
    color: "#A3A3A3",
  },
  addButton: {
    backgroundColor: "#F84726",
    padding: 20,
    borderRadius: 50,
  },
  addContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    justifyContent: "flex-end",
  },
});

export default Home;
