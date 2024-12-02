import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import prototypeIcon from "../icons/prototype.png";

const SearchPage = () => {
  return (
    <View style={styles.container}>
      <Text>This is the search page</Text>
      <Image source={prototypeIcon} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default SearchPage;
