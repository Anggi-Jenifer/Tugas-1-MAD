import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Title from './components/Title';

const SignIn = () => {
  const onSingIn = () => {
    console.log('Button di klik');
  };
  return (
    <View style={styles.container}>
      <Title label="Welcome" />
      <TextInput placeholder="Masukan Username Anda" label="Username" />
      <TextInput
        placeholder="Masukkan Password Anda"
        label="Password"
        secureTextEntry={true}
      />
      <Button label="Sign In" onPress={onSingIn} />
      <Button label="Sign In Google" color="red" colorText="white" />
      <Button label="Sign In Facebook" color="blue" colorText="white" />
      <Button label="Sign In Apple" color="black" colorText="white" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
});
