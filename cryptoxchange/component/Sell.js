import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Card, CardItem, Form, Item, Label, Input, Thumbnail, Text , Content, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import firebase from 'firebase';
import ValidationComponent from 'react-native-form-validator';

export default class Sell extends ValidationComponent {


        
    constructor(props){
        super(props)

        var { navigate } = this.props.navigation;
    
        this.state = {
            amt: '',
            name: '',
            acc: '',
            ifsc: '',
            email:'',
            mobile: '',
            send_status: '',
            gencode: '',
            usercode:'',
            txid:'',
            userpay_status:''
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
        this.emailsend(email,code);
        this.props.navigation.navigate('Verify',{ buystate:this.state });
    }
    else{
        alert("Please Enter Correct Input");
    }
}

emailsend = (email,code) =>{

    const apikey = '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';
    const msg = "Dear client,<br>The verification code for your Exchange Order is <b>" + code + " </b><br>Please do not share this code with anyone.<br>Thanks ";

    let body = { "personalizations": [ { "to": [ { "email": email } ], "subject": "CryptoXchange Email Verification" } ], "from": { "email": "cryptoxchange97@gmail.com" }, "content": [ { "type": "text/html", "value": msg } ] }

    fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
      'Authorization': 'Bearer ' + apikey,
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((response) => {
      this.setState({response: `${response.status} - ${response.ok}`});
    });

    
  }

render() {

    var { navigate } = this.props.navigation;
    

    return (
    <Container>
        <Header androidStatusBarColor="#f7921b" style={{backgroundColor: '#f7921b'}}>
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
                    <Button onPress={() =>this.writeDatabase(this.state.amt, this.state.name, this.state.email, this.state.mobile, this.state.ifsc, this.state.acc,this.state.status) } full style={{borderRadius:10, borderWidth:1,backgroundColor: '#f7921b',borderColor: '#f7921b'}} textStyle={{color: '#87838B'}}>
                      <Text>Sell</Text>
                    </Button>
                </Body>
                
                </CardItem>
            </Card>
        </Content>

    </Container>
    );
}
}