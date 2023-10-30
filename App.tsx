import { ImageBackground, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useState } from "react";
import HobbiesCris from "./components/PortfolioCris";
import PortfolioAlby from "./components/PortfolioAlby";

export default function App() {
  const [displayPortfolio, setDisplayPortfolio] = useState(true);
  return (
    <View style={styles.container}>
        <Header />
        <Navbar setDisplayPortfolio={setDisplayPortfolio} />
      {displayPortfolio ? (
        <HobbiesCris></HobbiesCris>
        ) : (
          <PortfolioAlby></PortfolioAlby>
          )}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#4f364c"
    }
});
