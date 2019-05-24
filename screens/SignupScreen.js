import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Icon, Item, Input, Label } from 'native-base';
import Component1 from './Component1';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    }
    this._onClickCreate=this._onClickCreate.bind(this);
  }
  _onClickCreate() {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={styles.container}>
        <Component1 /> 
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
        <Item >
          <Icon active name='md-lock' />
          <Label>Confirmar Password</Label>
          <Input secureTextEntry={true}/>
        </Item>
          <Text onPress = {this._onClickCreate} style={styles.Button}>
            Crear
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop:30,
    padding: 10,
  },

  topText: {
    fontSize:16,
    fontWeight:'bold',
  },

  Input: {
    padding:10,
    borderWidth:1,
    borderColor: 'grey',
    marginLeft:10,
    marginRight:10,
  },
  Button: {
    backgroundColor:'blue',
    color: 'white',
    textAlign: 'center',
    fontSize:16,
    fontWeight:'bold',
    padding:10,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  },
  centerContainer: {
    backgroundColor:'#F0F0F0',
    padding: 10,
    marginTop: 10,
    width: '100%',
  },
  
});
