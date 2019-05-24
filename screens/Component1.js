import React, { Component } from 'react';
import {Text, TextInput, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';

// You can import from local files

// or any pure javascript modules available in npm


export default class Component1 extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return ( 
      <View style={styles.circle1}>
        <Image  
          style={styles.circle2}
          source={require('../assets/images/unideas.png')}
        />
      </View>
    ); 
  }

}


const styles = StyleSheet.create({
  circle1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle2: {
    aspectRatio: 1,
    borderRadius:100,
    borderWidth:4,
    //borderColor: 'grey',
    margin:20,
    width:100,
    height:100,
  },
});