import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CiDark } from 'react-icons/ci';

type HeaderProps = {
  setNightMode: Function;
};

const Header = (props: HeaderProps) => {
  return (
    <View>
      <Text style={styles.header}>Portofolio <Pressable onPress={() => props.setNightMode(false)}><CiDark/></Pressable></Text>
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
    color: "#b1cf72",
    flex: 1
  }
});
