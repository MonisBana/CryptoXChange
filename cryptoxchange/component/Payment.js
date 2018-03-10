import React, { Component } from 'react';
import { Image, View, StatusBar, TouchableHighlight,WebView } from 'react-native';
import { Header, Container, Card, CardItem, Form, Item, Label, Button, Input, Thumbnail, Text, Content, Left, Body, Right, Icon, Title } from 'native-base';
import CardSection from './CardSection';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';


export default class Payment extends Component{

    constructor(props){
        super(props);
    
          this.state={
            amt: '',
            addr: '',
            email:'',
            mobile: '',
            send_status: '',
            gencode: '',
            usercode:'',
            txid:'',
            userpay_status:'',
            cemail: '',
          }    
      }

     

      componentWillMount(){
        var {params} = this.props.navigation.state;

        this.setState({
            amt: params.buystate.amt,
            addr:params.buystate.addr,
            email:params.buystate.email,
            mobile:params.buystate.mobile,
            userpay_status:params.buystate.userpay_status,
            gencode:params.buystate.gencode
          })

      }

        


    



      

    render(){


        return(
            <WebView
            source={{uri: 'http://maaz.epizy.com/'}}
            />
        );
    }


}