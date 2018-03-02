import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  NativeModules,
  NativeEventEmitter
} from 'react-native';
import StackNavigator from './NavDrawer';
import firebase from 'firebase';


export default class App extends Component {
  
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyB-TzEKRKjHPABJW02zgpwspsU6vryptJ4",
      authDomain: "cryptoxchange-58224.firebaseapp.com",
      databaseURL: "https://cryptoxchange-58224.firebaseio.com",
      projectId: "cryptoxchange-58224",
      storageBucket: "",
      messagingSenderId: "221809981861"
  });
  }
  render() {
    return (
      <StackNavigator />
    );
  }

}

