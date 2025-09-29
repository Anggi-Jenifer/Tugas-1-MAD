import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const Exercise7 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.Blackbox} />
        <View style={styles.Yellowbox} />
        <View style={styles.Blackbox} />
      </View>

      <View style={styles.body}>
        <Image
          source={require('./assets/logo_unklab.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.blackbox} />
        <View style={styles.yellowbox} />
        <View style={styles.blackbox} />
      </View>
    </View>
  );
};

export default Exercise7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  Blackbox: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    marginRight: 20,
  },
  Yellowbox: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    marginRight: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightcyan',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingVertical: 20,
  },
  blackbox: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  yellowbox: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
  },
  logo: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
