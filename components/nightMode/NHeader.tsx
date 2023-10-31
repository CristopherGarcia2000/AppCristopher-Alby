import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CiSun } from 'react-icons/ci';
import Ionicons from '@expo/vector-icons/Ionicons'

type HeaderProps = {
  setDayMode: Function;
};

const Header = (props: HeaderProps) => {
  return (
    <View>
      <Text style={styles.header}>Portofolio <Pressable onPress={() => props.setDayMode(true)}>
        <Ionicons name="sunny" color={'white'} size={20}/></Pressable>
      </Text>
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
    backgroundColor: "black",
    color: "#fff",
  }
});
