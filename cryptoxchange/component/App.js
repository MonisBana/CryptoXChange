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


export default class App extends Component {

  render() {
    return (
      <StackNavigator />
    );
  }

}

