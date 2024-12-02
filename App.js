import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Navbar from "./components/Navbar";
import barrierIcon from "./icons/barrier.png";
import performanceIcon from "./icons/performance.png";
import prototypeIcon from "./icons/prototype.png";
import wrenchIcon from "./icons/wrench.png";
import HomePage from "./components/HomePage";

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  //Check if index 0 element has a component and if it does display it
  useEffect(() => {
    if (navbarItems[0].component) {
      setActiveComponent(() => navbarItems[0].component);
    }
  }, [navbarItems]);

  const RenderComponent = activeComponent;

  // Alert function that can be pass through navbar as a function
  const settingsAlert = () => {
    Alert.alert("Settings Clicked");
  };

  // icons: List of icons import URL
  // label: Header of the nav element
  // color: Color of the label
  // onPress: Function that can be passed when the button is pressed
  // component: JSX component that can be passed and displayed when nav element is pressed
  const navbarItems = [
    {
      icons: [
        { source: barrierIcon },
        // { source: performanceIcon },
        // { source: wrenchIcon },
        // { source: prototypeIcon },
      ],
      label: "Home",
      color: "#FF9800",
      component: HomePage,
    },
    {
      icons: [
        { source: performanceIcon },
        // { source: barrierIcon }
      ],
      label: "Search",
      color: "#FF5722",
      onPress: () => console.log("Search Clicked"),
    },
    {
      icons: [
        { source: wrenchIcon },
        // { source: performanceIcon }
      ],
      label: "Settings",
      color: "#2196F3",
      onPress: () => settingsAlert(),
    },
  ];

  return (
    <View style={styles.container}>
      {RenderComponent && <RenderComponent />}
      <Navbar items={navbarItems} setActiveComponent={setActiveComponent} />
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
