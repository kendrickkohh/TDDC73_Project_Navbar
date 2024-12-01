import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import Navbar from "./components/Navbar";
import barrierIcon from "./icons/barrier.png";
import performanceIcon from "./icons/performance.png";
import prototypeIcon from "./icons/prototype.png";
import wrenchIcon from "./icons/wrench.png";
import TestComponent from "./components/testComponent";

const App = () => {
  // Icons, list of icons import URL, label is the name of the nav element, color is the color of the label
  // Add function to onPress
  // Should create a function that does the alert to show case function
  const alert = () => {
    Alert.alert("Home Clicked");
  };

  const navbarItems = [
    {
      icons: [
        { source: barrierIcon },
        { source: performanceIcon },
        { source: wrenchIcon },
        // { source: prototypeIcon },
      ],
      label: "Home",
      color: "#FF9800",
      onPress: () => alert(),
    },
    {
      icons: [{ source: performanceIcon }, { source: barrierIcon }],
      label: "Search",
      color: "#FF5722",
      onPress: () => console.log("Search Clicked"),
    },
    {
      icons: [{ source: prototypeIcon }, { source: performanceIcon }],
      label: "Settings",
      color: "#2196F3",
      // component: TestComponent,
    },
  ];

  return (
    <View style={styles.container}>
      <Navbar items={navbarItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default App;
