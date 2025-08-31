import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

//kompenen adalah fungsi yang mereturn/ mengembalikan jsx
//jsx ini = semua yang mau ditampilkan dalam aplikasi
const App = () => {
  return (
    //sebagai container
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.redbox} />
        <Text style={styles.lightbluebox}> Anggi </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.greenbox} />
        <Text style={styles.lightgreenbox}> Jenifer </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.bluebox} />
        <Text style={styles.lightgraybox}> Pratasik </Text>
      </View>
    </View>
  );
};

export default App; // ini akan di pakai di index.js
const styles = StyleSheet.create({
  title: {
    backgroundColor: 'lightgreen',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    fontWeight: '600',
  },
  container: {
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 5,
    padding: 15,
    margin: 15,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  redbox: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    margin: 5,
  },

  greenbox: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    margin: 5,
  },

  bluebox: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    margin: 5,
  },

  lightbluebox: {
    backgroundColor: 'lightblue',
    width: 100,
    height: 100,
    margin: 5,
    alignItems: 'center',
  },

  lightgreenbox: {
    backgroundColor: 'lightgreen',
    width: 100,
    height: 100,
    margin: 5,
    alignItems: 'center',
  },

  lightgraybox: {
    backgroundColor: 'lightgray',
    width: 100,
    height: 100,
    margin: 5,
    alignItems: 'center',
  },
});

//buat latihan tambah kotak di
