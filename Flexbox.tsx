import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.redContainer} />
        <View style={styles.greencontainer} />
        <View style={styles.bluecontainer} />
      </View>
      <View style={styles.container2}>
        <View style={styles.redbox} />
        <View style={styles.greebox} />
        <View style={styles.bluebox} />
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  redContainer: {
    flex: 1 / 2,
    backgroundColor: 'red',
  },
  greencontainer: {
    flex: 2,
    backgroundColor: 'green',
  },
  bluecontainer: {
    flex: 1 / 2,
    backgroundColor: 'blue',
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'lightblue',
  },
  redbox: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  greebox: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
  bluebox: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
});
