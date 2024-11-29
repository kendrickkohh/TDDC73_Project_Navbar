import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomNavBar = ({ routes, onRouteChange }) => {
  return (
    <View style={styles.navbar}>
      {routes.map((route, index) => (
        <TouchableOpacity
          key={index}
          style={styles.navItem}
          onPress={() => onRouteChange(route.name)}
        >
          <Text style={styles.navText}>{route.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#333",
  },
  navItem: {
    padding: 10,
  },
  navText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default CustomNavBar;
