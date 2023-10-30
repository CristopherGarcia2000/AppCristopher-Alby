import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";

const PortfolioAlby = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.avatar} source={require("./../../assets/xd2.gif")} />
        <View style={styles.profileStyle}>
          <ImageBackground
            source={require("./../../assets/xd.gif")}
            resizeMode="cover"
            style={styles.fondo}
          >
            <View style={styles.textBox}>
              <Text style={styles.textFrase}>
                Si no vuelvo en cinco minutos... solo espera más
              </Text>
            </View>
          </ImageBackground>
        </View>
        <Text style={styles.titleStyle}>Hobbies : </Text>
        <ScrollView style={{padding : 10}}>
          <View style={styles.cajas}>
            <Text style={styles.textStyles}>Bailar</Text>
            <Text style={styles.textStyles}>Tepearse</Text> 
          </View>
          <View style={styles.cajas}>
            <Text style={styles.textStyles}>Brillo</Text>
            <Text style={styles.textStyles}>Taric</Text>
          </View>
          <View style={styles.cajas}>
            <Text style={styles.textStyles}>Clutch 1 v 5</Text>
            <Text style={styles.textStyles}>Best Adc</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default PortfolioAlby;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  },
  titleStyle: {
    color: "#fff",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  textStyles: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    width: "50%",
    backgroundColor: "#6b6b6b"
  },
  profileStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },
  avatar: {
    height: 200,
    marginTop: 10,
    marginLeft: 20,
    width: "90%",
    borderRadius: 100,
  },
  fondo:{
    width: "100%",
    border: 'solid',
    borderRadius: 10,
  },
  textBox: {
    marginLeft: 20,
    padding: 10,
    borderRadius: 10,
    width: "90%",
  },
  textFrase: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
  textStyle: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
  cajas: {
    flex: 1,
    flexDirection: 'row',
    width: "100%",
    padding: 10,
    

  },
  

});
