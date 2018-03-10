import React, { Component } from 'react';
import { Image, View, StatusBar, TouchableHighlight,WebView } from 'react-native';
import { Header, Container, Card, CardItem, Form, Item, Label, Button, Input, Thumbnail, Text, Content, Left, Body, Right, Icon, Title } from 'native-base';
import CardSection from './CardSection';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

export default class InsertDb extends Component{

    render(){
        
        firebase.database().ref(`Buy/${cemail}`).push().set({
          
            Amount: this.state.amt,
            Wallet_Address: this.state.addr,
            Email: this.state.email,
            Mobile: this.state.mobile,
            Send_Status: this.state.send_status,
            Txid: this.state.txid,
            Userpay_Status: this.state.userpay_status,
        
        });
  
    }
}