import React, { Component } from 'react';
import { Container, Header, Left, Body,Content, Right, Button, Icon, Title } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import QRCode from 'react-native-qrcode';

 
const amountInBTC = 0.13750000
const transactionId = 0.00000001
const current_time_r = 0
const tx_flag = 0
 
const APIKEY = "cf14-78c0-1bd0-4d94";
const getAddressesEndpoint = "https://block.io/api/v2/get_my_addresses/?api_key="+APIKEY
const getBalanceInWalletEndpoint = "https://block.io/api/v2/get_transactions/?api_key="+APIKEY+"&type=received&addresses=2MxfNVFShBfDMSRudKt3cwFuyQqnUcAEPiU"

 
export default class Bpayment extends Component {
  constructor(props) {
     super(props);
     this.state = {
       wallet: "",
       amount: 0,
       isLoading: true,
       status: 0 // unknown status

     }

     
 
  }

  

  componentWillMount(){
    const _this = this
    const URL = getAddressesEndpoint
    fetch(URL, {
     method: 'get',
     mode: 'no-cors'
     }).then(function(response){
 
       return response.json();
     }).then(function(json) {
        const amount = amountInBTC
        _this.oldBalance = json.data.addresses[0].available_balance
      	_this.setState({wallet: json.data.addresses[0].address, isLoading: false, amount});
      });

       current_time_r = Math.floor(Date.now() / 1000);
 
  }


  _confirmPayment(){
 
    const _this = this
    const URL = getBalanceInWalletEndpoint
    fetch(URL, {
     method: 'get',
     mode: 'no-cors'
     }).then(function(response){
 
       return response.json();
     }).then(function(json) {

      const current_time_b = Math.floor(Date.now() / 1000);
 
        
        const time = [];
        const latest_tx_amt = json.data.txs[0].amounts_received[0].amount;

        for(const i=0;i<json.data.txs.length;i++)
        {
          time.push(json.data.txs[i].time);
        }

        const latest_tx_time = Math.max(...time);

        

        if(tx_flag==0){
        if((latest_tx_time>=current_time_r)&&(parseFloat(latest_tx_amt)==amountInBTC))
        {
          alert("BTC Received Waiting for Confirmation");
          tx_flag = 1;//insert this in db, indicates that user had sent btc but have to check for confirmation later

        }
        else{
          alert("BTC Not Yet Recived");
        }
      }
      else if(tx_flag==1){
        alert("BTC Received Waiting for Confirmation");
      }
         
      });
 
  }
  renderPayment(){
    return(
      <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }} >
 
      {
        this.state.status ? this.state.status == 1 ? (<Text style={styles.success}>Bitcoins received, payment successful</Text>) : (<Text style={styles.error}>Bitcoins not received, contact admin for assistance or try after few mins.</Text>) : (<View />)
      }
 
      <Text style={styles.info}>
        Amount :   { this.state.amount } BTC
      </Text>
 
        <QRCode
          value={this.state.wallet}
          size={200}
          bgColor='black'
          fgColor='white'/>
          <Text style={styles.info}>
            { this.state.wallet }
          </Text>
          <View style={{ flex:1,alignContent:'center',justifyContent:'center' }}>
          <Button
            onPress={() => this._confirmPayment() }
            style={{ padding:10,borderRadius:5,backgroundColor: '#f7921b',borderColor: '#f7921b' }}
            
          >
            <Text style={{color:'white'}} >Confirm Payment</Text>
          </Button>
          </View>
          <Text style={{marginTop: 10}}>Press the button after making payment</Text>
      </View>
    )
  }
  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#f7921b" style={{backgroundColor: '#f7921b'}}>
          <Left>
          </Left>
          <Body>
            <Title>Make Payment</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <StatusBar barStyle="light-content"/>
          <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
          { this.state.isLoading ? (<ActivityIndicator styleAttr='Large'/>) : this.renderPayment() }
          </View>
          
        </Content>
      </Container>
      
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  success: {
    fontSize: 11,
    textAlign: 'center',
    color: "green"
  },
  error: {
    fontSize: 11,
    textAlign: 'center',
    color: "red"
  },
  info: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  }
});