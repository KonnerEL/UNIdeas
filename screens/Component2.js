import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Icon, Item, Input, Label } from 'native-base';


// You can import from local files

// or any pure javascript modules available in npm

export default class Component2 extends Component {
  render() {
    return ( 
      <View>
        <Item >
          <Icon active name='md-mail' />
          <Label>Email</Label>
          <Input />
        </Item>
        <Item >
          <Icon active name='md-lock' />
          <Label>Password</Label>
          <Input secureTextEntry={true}/>
        </Item>
        <Text onPress = {this.props.clickSignIn} style={styles.Button}>
          Login 
        </Text>
      </View>
    ); 
  }

}

const styles = StyleSheet.create({
  Input: {
    padding:10,
    borderWidth:1,
    borderColor: 'grey',
    marginLeft:10,
    marginRight:10,
  },
  Button: {
    backgroundColor: '#73BEDE',
    color: 'white',
    textAlign: 'center',
    borderRadius: 8,
    fontSize:16,
    fontWeight:'bold',
    padding:10,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  },
});