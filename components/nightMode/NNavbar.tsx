import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type NavbarProps = {
  setDisplayPortfolio: Function;
};

const Navbar = (props: NavbarProps) => {
  return (
    <View style={styles.navbar}>
      <Image style={styles.avatar} source={require("./../../assets/x.webp")} />
      <Pressable
        style={styles.buttonStyle}
        onPress={() => props.setDisplayPortfolio(true)}
      >
        <Text style={styles.ButtonText}> Portfolio Cris </Text>
      </Pressable>

      <Pressable
        onPress={() => props.setDisplayPortfolio(false)}
        style={styles.buttonStyle}
      >
        <Text style={styles.ButtonText}> Portfolio Alby </Text>
      </Pressable>
      <Image style={styles.avatar} source={require("./../../assets/xd2.gif")} />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    paddingHorizontal: 30,
    flexDirection: "row",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "solid",
  
  },
  buttonStyle: {
    marginHorizontal: 20,
    paddingVertical: 10,
    width: "35%",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 100,
  },
  Text: {
    textAlign: "center",
  },
  ButtonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 13,
  }
});
