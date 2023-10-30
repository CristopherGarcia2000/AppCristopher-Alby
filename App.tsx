import {StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useState } from "react";
import PortfolioCris from "./components/PortfolioCris";
import PortfolioAlby from "./components/PortfolioAlby";
import NHeader from "./components/nightMode/NHeader";
import NNavbar from "./components/nightMode/NNavbar";
import NPortfolioCris from "./components/nightMode/NPortfolioCris";
import NPortfolioAlby from "./components/nightMode/NPortfolioAlby";


export default function App() {
  const [displayPortfolio, setDisplayPortfolio] = useState(true);
  const [nightMode , setNightMode] = useState(true)
  return (
    nightMode ? (
    <View style={styles.container}>
        <Header setNightMode={setNightMode}/>
        <Navbar setDisplayPortfolio={setDisplayPortfolio} />
      {displayPortfolio ? ( 
        <PortfolioCris />
        ) : (
          <PortfolioAlby></PortfolioAlby>
          )}
    </View>):(
    <View style={styles.containerN}>
      <NHeader setNightMode={setNightMode}></NHeader>
      <NNavbar setDisplayPortfolio={setDisplayPortfolio} />
      {displayPortfolio ? (
      <NPortfolioCris></NPortfolioCris>
        ) : (
      <NPortfolioAlby></NPortfolioAlby>
          )}
</View>
))
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#4f364c"
    },
    containerN:{
      flex: 1,
      backgroundColor: "black"
    }
});
