import React, { Component } from 'react';
import { Image, View, Alert } from 'react-native';
import { Container, Card, CardItem, Form, Item, Label, Input, Button, Thumbnail, Text , Content, Header, Left, Body, Right, Icon, Title } from 'native-base';
import firebase from 'firebase';
import ValidationComponent from 'react-native-form-validator';

export default class Buy extends ValidationComponent {
    
    constructor(props){
        super(props)
    
        this.state = {
          amt: '',
          addr: '',
          email:'',
          mobile: '',
          status: ''
        }
      }
writeDatabase(amt,addr,email,mobile,status) {
    if(this.validate({
        amt: {numbers: true, required: true},
        addr: {required: true},
        email: {email: true,required: true},
        mobile: {numbers: true,required: true} 
    })){
        <Text>Hello</Text>
    firebase.database().ref("Buy").push().set({
        Amount: amt,
        Wallet_Address: addr,
        Email:email,
        Mobile:mobile,
        Status:status
    });
    this.state = {
          amt: '',
          addr: '',
          email:'',
          mobile: '',
          status: ''
        }
    }
}
render() {
    var { navigate } = this.props.navigation;
    const { amt } = this.state;
    return (
    <Container>
        <Header  style={{backgroundColor: '#f7921b'}}>
            <Left>
            </Left>
            <Body>
                <Title>Buy Bitcoin</Title>
            </Body>
            <Right />
        </Header>

        <Content>
            <Card style={{flex: 0}}>
                <CardItem>
                  
                    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                        <Text style={{fontSize:20, color:'#f7921b'}}>BUY BITCOIN ORDER</Text>
                    </View>
                    
                </CardItem>
                <CardItem>
                
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label style={{paddingTop:5}}>Amount In Rupees</Label>
                        <Input onChangeText = {(text) => this.setState({amt: text}) } />
                        </Item>
                        <Item floatingLabel >
                            <Label style={{paddingTop:5}}>Enter Your Wallet Address</Label>
                        <Input onChangeText = {(text) => this.setState({addr: text}) } />
                        </Item>
                        <Item floatingLabel >
                            <Label style={{paddingTop:5}}>Email Address</Label>
                        <Input onChangeText = {(text) => this.setState({email: text}) } />
                        </Item>
                        <Item floatingLabel >
                            <Label style={{paddingTop:5}}>Mobile No</Label>
                        <Input onChangeText = {(text) => this.setState({mobile: text}) } />
                        </Item>

                    </Form>

                        
                </Content>
                </CardItem>
                <CardItem>
                    
                <Body>
                    <Button onPress={() => this.writeDatabase(this.state.amt,this.state.addr,this.state.email,this.state.mobile,this.state.status)} full style={{borderRadius:5, borderWidth:1,backgroundColor: '#f7921b',borderColor: '#f7921b'}} textStyle={{color: '#87838B'}}>
                    <Text>Buy</Text>
                    </Button>
                </Body>
                
                </CardItem>
            </Card>
        </Content>

    </Container>
    );
}
}