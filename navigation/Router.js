import React from "react";
import {Image,StyleSheet} from "react-native";
import { createStackNavigator } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';

import Login from '../screens/LoginScreen';
import Home from './MainTabNavigator';
import Project from '../screens/ProjectScreen';
import Profile from '../screens/ProfileScreen';
import Signup from '../screens/SignupScreen';
import Payment from '../screens/PaymentScreen';

import {Constants} from 'expo';

const SignedIn = createStackNavigator ({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      /*headerBackground: (
        <Image
          style={StyleSheet.absoluteFill}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
        />
      ),
      headerTitleStyle: { color: '#fff' },*/
      header: null,
    }
  },
  /*Signup: {
    screen: Signup,
    navigationOptions: {
      title: "Sign up",
    }
  },*/
});

const SignUp = createStackNavigator ({
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null,
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
})

const goToProject = createStackNavigator ({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  Project: {
    screen: Project,
    navigationOptions: {
      header: null,
    }
  },
  /*Signup: {
    screen: Signup,
    navigationOptions: {
      title: "Sign up",
    }
  },*/
});

const invest = createStackNavigator ({
  Payment: {
    screen: Payment,
    navigationOptions: {
      header: null,
    }
  },
  Project: {
    screen: Project,
    navigationOptions: {
      header: null,
    }
  },
})

const SwitchNavigator = createSwitchNavigator(
  {
    SignedIn: SignedIn,
    SignUp: SignUp,
    goToProject: goToProject,
    invest: invest,
  },
  {
    initialRouteName: 'SignedIn',
  }
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;

