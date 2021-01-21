//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, NativeModules, Button } from 'react-native';


const {ToastModule} = NativeModules

const showToast = () => {
  ToastModule.showToast('Halloo....')
}
// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Button onPress={showToast} title='Show Toast' />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MyComponent;
