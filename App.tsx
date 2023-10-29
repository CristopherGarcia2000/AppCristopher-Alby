import { ImageBackground, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { useState } from 'react';
import HobbiesCris from './components/PortfolioCris';
import QR from './components/QR';


export default function App() {
  const [displayPortfolio, setDisplayPortfolio] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header />
        <Navbar setDisplayPortfolio={setDisplayPortfolio} />
      </View>
      {
        displayPortfolio ?
          <View style={styles.bodyStyle}>
              <HobbiesCris/>
          </View>
          :
          <QR/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    height: '15%',
    paddingTop: 60,
    width: '100%',
  },
  bodyStyle: {
    marginTop: 40,
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '85%'
  },
});
