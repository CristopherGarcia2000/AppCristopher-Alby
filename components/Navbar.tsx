import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type NavbarProps = {
  setDisplayPortfolio: Function
}

const Navbar = (props: NavbarProps) => {

  return (
    <View style={styles.navbar}>
      <Image style={styles.avatar} source={require('./../assets/Shaco.jpg')} />
      <Pressable style={styles.buttonStyle} onPress={() => props.setDisplayPortfolio(true)}>
        <Text style={{ ...{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase',fontSize:14 }, ...styles.boxShadow }}>Portfolio Cris</Text>
      </Pressable>
      
      <Pressable onPress={() => props.setDisplayPortfolio(false)} style={styles.buttonStyle}  >
        <Text style={{ ...{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase',fontSize:14 }, ...styles.boxShadow }}>Portfolio Alby</Text>
      </Pressable>
      <Image style={styles.avatar} source={require('./../assets/Shaco.jpg')} />
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  navbar: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    
  },
  buttonStyle: {
    marginHorizontal: 20,
    paddingVertical: 10,
    width: '35%',
    borderWidth: 1

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
})