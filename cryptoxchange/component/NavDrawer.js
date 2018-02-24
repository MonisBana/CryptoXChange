import React, { Component } from 'react';
import { Container, Button, Text, Header, Left, Body, Right, Content } from 'native-base';
import { Image, View } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Buy from './Buy';
import Sell from './Sell';

const customDrawer = (props) => (

    <Container>
        <Header style={{height:100}}>

            <View style={{flex:1, flexDirection:'row'}}>
                <Image style={{height:100, width:100}} source={require('./p7bfwzl3l9hz.jpg')} />
                <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
                    <Text style={{color:'#FFFFFF',fontSize:22}}>CryptoXchange</Text>
                </View>
            </View>
            
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>

)


const NavDrawer = DrawerNavigator({
    
    Buy: { screen: Buy },
    Sell: { screen: Sell },
    
},
{
    
    contentComponent: customDrawer,
    
}

)


export default NavDrawer;