import React, { Component } from 'react';
import { Container, Button, Text, Header, Left, Body, Right, Content } from 'native-base';
import { Image, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Buy from './Buy';
import Sell from './Sell';
import PriceList from './PriceList';
import Payment from './Payment';


export default StackNavigator({
    Home: {
      screen: PriceList,
    },
    Buy: {
        screen: Buy,
      },
      Sell: {
        screen: Sell,
      },
      Payment:{
        screen:Payment,
      }

  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
        header: false
    }
    
  },
);