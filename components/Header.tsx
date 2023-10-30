import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <Text style={styles.header}>Portofolio</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
    marginTop: 50,
    width: "100%",
    backgroundColor: "#5e405f",
    color: "#b1cf72"
  },
});
