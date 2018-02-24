import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Card, CardItem, Form, Item, Label, Input, Thumbnail, Text , Content, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class Sell extends Component {


        
    constructor(props){
        super(props)
    
        this.state = {
          amt: '',
          name: '',
          acc: '',
          ifsc: '',
          email:'',
          mobile: ''
        }
      }


render() {

    var { navigate } = this.props.navigation;
    

    return (
    <Container>
        <Header>
            <Left>
                <Button transparent onPress={ () => navigate('DrawerOpen') }>
                <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>Sell Bitcoin</Title>
            </Body>
            <Right />
        </Header>

        <Content>
            <Card style={{flex: 0}}>
                <CardItem>
                  
                    <View style={{flex:1, flexDirection:'row', justifyContent:'center', }}>
                        <Text style={{fontSize:20, color:'#32387F'}}>SELL BITCOIN ORDER</Text>
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
                    <Button full style={{borderRadius:5, borderWidth:1}} textStyle={{color: '#87838B'}}>
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