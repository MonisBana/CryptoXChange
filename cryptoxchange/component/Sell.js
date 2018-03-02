import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Card, CardItem, Form, Item, Label, Input, Thumbnail, Text , Content, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import firebase from 'firebase';
import ValidationComponent from 'react-native-form-validator';

export default class Sell extends ValidationComponent {


        
    constructor(props){
        super(props)
    
        this.state = {
          amt: '',
          name: '',
          acc: '',
          ifsc: '',
          email:'',
          mobile: '',
          status: ''
        }
      }
writeDatabase(amt,name,email,mobile,ifsc,acc,status) {
    if(this.validate({
        name: {required: true},
        amt : {numbers: true, required: true},
        addr: {required: true},
        email: {email: true,required: true},
        mobile: {numbers: true,required: true},
        ifsc: {reuired: true},
        acc: {reuired: true} 
    })){
    firebase.database().ref("Sell").push().set({
        Amount: amt,
        Bank_Name: name,
        Email:email,
        Mobile:mobile,
        IFSC:ifsc,
        Acc_No: acc,
        Status: status
    });
    this.state = {
        amt: '',
        name: '',
        acc: '',
        ifsc: '',
        email:'',
        mobile: '',
        status: ''
      }
    }
}

render() {

    var { navigate } = this.props.navigation;
    

    return (
    <Container>
        <Header style={{backgroundColor: '#f7921b'}}>
            <Left>
            </Left>
            <Body>
                <Title>Sell Bitcoin</Title>
            </Body>
            <Right />
        </Header>

        <Content>
            <Card style={{flex: 0}}>
                <CardItem>
                  
                    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                        <Text style={{fontSize:20, color:'#f7921b'}}>SELL BITCOIN ORDER</Text>
                    </View>
                    
                </CardItem>
                <CardItem>
                
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label style={{paddingTop:5}}>Amount In Bitcoin</Label>
                        <Input onChangeText = {(text) => this.setState({amt: text}) } />
                        </Item>
                        <Item floatingLabel >
                            <Label style={{paddingTop:5}}>Bank Account Name</Label>
                        <Input onChangeText = {(text) => this.setState({name: text}) } />
                        </Item>
                        <Item floatingLabel >
                            <Label style={{paddingTop:5}}>Bank Account Number</Label>
                        <Input onChangeText = {(text) => this.setState({acc: text}) } />
                        </Item>
                        <Item floatingLabel >
                            <Label style={{paddingTop:5}}>Bank IFSC Code</Label>
                        <Input onChangeText = {(text) => this.setState({ifsc: text}) } />
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
                    <Button onPress={() =>this.writeDatabase(this.state.amt, this.state.name, this.state.email, this.state.mobile, this.state.ifsc, this.state.acc,this.state.status) } full style={{borderRadius:5, borderWidth:1,backgroundColor: '#f7921b',borderColor: '#f7921b'}} textStyle={{color: '#87838B'}}>
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