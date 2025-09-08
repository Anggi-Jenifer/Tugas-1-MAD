import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const Exercise3 = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Biodata Pribadi</Text>
        </View>
      </View>

      <View style={styles.profileContainer}>
        <Image style={styles.myfoto} source={require('./assets/myfoto.jpg')} />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Nama:</Text>
          <Text style={styles.value}>Anggi Jenifer Pratasik </Text>

          <Text style={styles.label}>Tanggal Lahir:</Text>
          <Text style={styles.value}>29 Agustus 2004</Text>

          <Text style={styles.label}>Alamat:</Text>
          <Text style={styles.value}>Kotamobagu, Sulawesi Utara</Text>

          <Text style={styles.label}>Hobi:</Text>
          <Text style={styles.value}>Membaca Komik</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  myfoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    backgroundColor: 'lightblue',
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    fontWeight: '600',
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
});
