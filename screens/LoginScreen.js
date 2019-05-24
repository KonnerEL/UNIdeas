import React, { Component } from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import { Constants } from 'expo';

import {removeKey} from '../Auth';
import {getValueFromKey} from '../Auth';
import {setValueOnKey} from '../Auth';

// or any pure javascript modules available in npm
import Component1 from './Component1';
import Component2 from './Component2';
import { Icon } from 'native-base';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this._clickNeedHelp=this._clickNeedHelp.bind(this);
    this._clickSignIn=this._clickSignIn.bind(this);
    this._clickSignup=this._clickSignup.bind(this);
  }

  _clickSignIn() {
    //alert('Are you going to Sign In?');
    //onSignIn().then(() => this.props.navigation.navigate('SignedIn'));
    //var User = {Email: "faramirez@uninorte.edu.co", UserName: "faramirez", Password: "Qwerty123"}
    //setValueOnKey("MyKey", User).then().catch(err => alert(err));
    //getValueFromKey("MyKey").then(theValue => this.props.navigation.navigate("Home")).catch(err => alert("Error"))
    this.props.navigation.navigate('Home')
    //if (theValue.)
  }

  _clickNeedHelp() {
    alert('Do you need help?');
  }

  _clickSignup() {
    this.props.navigation.navigate('Signup')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerContainer}>
          <Component1 />
          <Component2 clickSignIn={this._clickSignIn} clickNeedHelp={this._clickNeedHelp} />
          <Text style={styles.loginButtonBelowText1}>─────────── Or ───────────</Text>
          <Text onPress = {this.props.clickSignIn} style={styles.facebookButton}>
            <Icon
              name="logo-facebook"
              style={styles.facebookIcon}
            />
            <Text style={styles.facebookLogin}>Login with Facebook</Text> 
          </Text>
        </View>
        <Text onPress = {this._clickSignup} style={styles.CreateAn}>
          Create an Account
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
  CreateAn: {
    color: 'blue',
    marginVertical: 10,
    marginTop: 30,
  },
  centerContainer: {
    //backgroundColor:'#F0F0F0',
    padding: 10,
    marginTop: 10,
    width: '100%',
  },
  loginButtonBelowText1: {
    fontSize: 14,
    paddingHorizontal: 5,
    marginTop: 16,
    alignSelf: 'center',
    color: '#A2A2A2'
  },
  facebookButton: {
    backgroundColor:'#3C5A99',
    borderRadius: 8,
    textAlign: 'center',
    fontSize:16,
    fontWeight:'bold',
    padding:10,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  },
  facebookIcon: {
    color:'white',
    padding: 25
  },
  facebookLogin: {
    color:'white',
  }
});
