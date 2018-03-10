import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Text, Card, CardItem, Form, Item, Label, Input } from 'native-base';
import * as firebase from 'firebase';

export default class Verify extends Component {

  constructor(props){
    super(props);

      this.state={
        amt: '',
        name: '',
        acc: '',
        ifsc: '',
        addr: '',
        email:'',
        mobile: '',
        send_status: '',
        gencode: '',
        usercode:'',
        txid:'',
        userpay_status:''
      }   

      
  }

    
   

  componentWillMount(){
    //this.getdata();
    //var cmemail;
    //function getemail(email){
      //cmemail = email;
    //}    

    var code = Math.floor(Math.random() * 1000000);

    var {params} = this.props.navigation.state;

    this.setState({
      amt: params.buystate.amt,
      name: params.buystate.name,
      acc: params.buystate.acc,
      ifsc: params.buystate.ifsc,
      addr:params.buystate.addr,
      email:params.buystate.email,
      mobile:params.buystate.mobile,
      gencode: code,
      send_status:params.buystate.send_status,
      userpay_status:params.buystate.userpay_status,
      
    })
  }



  
/*
  cemail = () =>{
    var email = this.state.email;
    var cemail = email.replace(/[^a-zA-Z0-9]/g, "");
    return email;
  }
*/


  onbtnPress = () =>{

    var usercode = this.state.usercode;
    var gencode = this.state.gencode;
    
    
    if(gencode==usercode){
      
      if(this.state.acc==null){
        this.insertbuydb();
        this.props.navigation.navigate('Payment',{ buystate:this.state });
      }
      else{
        this.insertselldb();
        this.props.navigation.navigate('ReceiveBtc',{ buystate:this.state });
      }
      alert("Email Verified");
    }
    else{
      alert("Email Unable To Verify");
    }
    
  }

  show = () =>{
    console.warn(this.state.gencode);

  }

  
  insertbuydb =() =>{
    firebase.database().ref(`Buy`).push({
      
      Amount: this.state.amt,
      Wallet_Address: this.state.addr,
      Email: this.state.email,
      Mobile: this.state.mobile,
      Send_Status: this.state.send_status,
      Txid: this.state.txid,
      Userpay_Status: this.state.userpay_status,

      
  
  });
}

insertselldb =() =>{
  firebase.database().ref(`Sell`).push({
    
    Amount: this.state.amt,
    Account_Name: this.state.name,
    Account_No : this.state.acc,
    IFSC: this.state.ifsc,
    Email: this.state.email,
    Mobile: this.state.mobile,
    Send_Status: this.state.send_status,
    Txid: this.state.txid,
    Userpay_Status: this.state.userpay_status,

    

});
}

  

  render() {

    

    

    return (
      <Container>
        <Header androidStatusBarColor="#f7921b" style={{backgroundColor: '#f7921b'}}>
          <Left>
          </Left>
          <Body>
            <Title>Email Verification</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          
        <Card style={{flex: 0}}>
            <CardItem>
                <Content>
                <Form>
                    <Item floatingLabel>
                        <Label style={{paddingTop:5}}>Enter Verification Code</Label>
                    <Input onChangeText = {(text) => this.setState({usercode: text}) } />
                    </Item>
                </Form>
                </Content>
            </CardItem>
            <CardItem>    
            <Body>
                <Button onPress={ this.onbtnPress } full style={{borderRadius:10, borderWidth:1,backgroundColor: '#f7921b',borderColor: '#f7921b'}} textStyle={{color: '#87838B'}}>
                    <Text>Verify</Text>
                </Button>
                <Button onPress={ this.show } full style={{borderRadius:10, borderWidth:1,backgroundColor: '#f7921b',borderColor: '#f7921b'}} textStyle={{color: '#87838B'}}>
                    <Text>Gen</Text>
                </Button>
            </Body>
            
            </CardItem>
        </Card>

        </Content>
      </Container>
    );
  }
}