import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type NavbarProps = { 
    setDisplayMyQR: Function
}

const Navbar = (props : NavbarProps) => {
    
    return (
        <View style={styles.navbar}>
            <Pressable style={styles.buttonStyle} onPress={() => props.setDisplayMyQR(true)}>
                <Text style={{ ...{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }, ...styles.boxShadow }}>Mi info</Text>
            </Pressable>
            <Button onPress={() => props.setDisplayMyQR(false)} title="Mi Repo" color="light-gray" accessibilityLabel='Un botón pal QR' />
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        backgroundColor: 'darkgray',
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonStyle: {
        width:'50%',
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
      }
})