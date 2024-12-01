import React from "react";
import { View, StyleSheet, Alert, Text } from "react-native";
import Navbar from "./components/Navbar";
import barrierIcon from "./icons/barrier.png";
import performanceIcon from "./icons/performance.png";
import prototypeIcon from "./icons/prototype.png";
import wrenchIcon from "./icons/wrench.png";
// import TestComponent from "./components/TestComponent";

const App = () => {
  // const TestComponent = () => {
  //   return (
  //     <View style={styles.page}>
  //       <Text style={styles.text}>Welcome to Home!</Text>
  //     </View>
  //   );
  // };

  // Icons, list of icons import URL, label is the name of the nav element, color is the color of the label
  // Add function to onPress
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
      onPress: () => Alert.alert("Home Clicked"),
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
