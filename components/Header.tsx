import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons'

type HeaderProps = {
  setDayMode: Function;
};

const Header = (props: HeaderProps) => {
  return (
    <View>
      <Text style={styles.titleStyle}>Portofolio <Pressable onPress={() => props.setDayMode(false)}>
        <Ionicons name="moon" color={'white'} size={20}/></Pressable>
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  
  titleStyle: {
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
    backgroundColor: "#5e405f",
    color: "#b1cf72",
    marginTop: 40,
  },
  pressableStyle: {
    alignItems: 'center'
  }
});
