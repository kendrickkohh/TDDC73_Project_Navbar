import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from "./components/Navbar.js";

const App = () => {
  const [currentRoute, setCurrentRoute] = useState("Home");

  const routes = [
    { name: "Home", label: "Home" },
    { name: "Profile", label: "Profile" },
    { name: "Settings", label: "Settings" },
  ];

  const renderContent = () => {
    const current = routes.find((route) => route.name === currentRoute);
    return (
      <Text style={styles.pageContent}>
        {current ? current.name : "Page not found."}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      <Navbar routes={routes} onRouteChange={setCurrentRoute} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  pageContent: {
    textAlign: "center",
    fontSize: 20,
    margin: 20,
  },
});

export default App;
