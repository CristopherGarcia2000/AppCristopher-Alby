import {  StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Profile from './components/Profile';
import Hobbies from './components/Hobbies';
import QR from './components/QR';

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header />
        <Navbar setDisplayMyQR={setDisplayMyQR} />
      </View>
      {
        displayMyQR ?
          <View style={styles.bodyStyle}>
            <Profile/>
            <Hobbies/>  
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
    paddingTop: 50,
    width: '100%',
  },
  bodyStyle: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '85%'
  },
});
