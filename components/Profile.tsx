import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.profileStyle}>
            <Image style={styles.avatar} source={require('./../assets/SofyanAmrabat.jpg')}></Image>
            <View style={styles.textBox}>
                <Text style={styles.textStyle}>
                     Descripción sobre mí!
                </Text>
                <Text>
                    Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar prácticas para mis queridos alumnos
                </Text>
            </View>
        </View>
            )
}
export default Profile

const styles = StyleSheet.create({
    profileStyle: {
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    avatar: {
        height: 90,
        width: 90,
        borderRadius: 100
    },
    textBox: {
        margin: 10, 
        backgroundColor: 'lightgray', 
        padding: 10, 
        borderRadius: 10, 
        width: '70%'
    },
    textStyle: {
        textAlign: 'center', 
        fontWeight: '700', 
        fontSize: 20 
    }
 })