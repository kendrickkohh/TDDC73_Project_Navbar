import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Navbar = ({ items, setActiveComponent }) => {
  return (
    <View>
      <View style={[styles.navbar]}>
        {/* Loop through items to display navbar elements */}
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navItem}
            // Sets setActiveComponent() to new component/null if pressed and calls onPress()
            onPress={() => {
              setActiveComponent(() => item.component || null);
              if (item.onPress) item.onPress();
            }}
          >
            {/* Icons */}
            <View style={styles.iconsContainer}>
              {item.icons.map((icon, idx) => (
                <Image key={idx} source={icon.source} style={styles.icon} />
              ))}
            </View>
            {/* Label */}
            <Text style={[styles.navText, { color: item.color || "black" }]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "black",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 2, // Space between icons
    width: 20,
    height: 20,
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
  },
});

export default Navbar;
