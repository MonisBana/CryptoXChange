import React, { Component } from 'react';
import { Image, View, StatusBar, TouchableHighlight } from 'react-native';
import { Header, Container, Card, CardItem, Form, Item, Label, Button, Input, Thumbnail, Text, Content, Left, Body, Right, Icon, Title } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
//import Button from './Button';
import CardSection from './CardSection';
import { StackNavigator } from 'react-navigation';
import RazorpayCheckout from 'react-native-razorpay';


export default class Payment extends Component{

    render(){



        return(

            <Button onPress={() => {
                var options = {
                  description: 'Credits towards consultation',
                  image: './Bitcoin.png',
                  currency: 'INR',
                  key: 'rzp_test_wztl1sZeeKcYZI',
                  amount: '100000',
                  name: 'CryptoXchange',
                  prefill: {
                    email: 'ansarimaaz786@gmail.com',
                    contact: '9167034639',
                    name: 'Monis'
                  },
                  theme: {color: '#f7921b'}
                }
                RazorpayCheckout.open(options).then((data) => {
                  // handle success
                  alert(`Success: ${data.razorpay_payment_id}`);
                }).catch((error) => {
                  // handle failure
                  alert(`Error: ${error.code} | ${error.description}`);
                });
              }}>
              <Text>Buy</Text>
              </Button>




        );
    }


}