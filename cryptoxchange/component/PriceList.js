import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Card, CardItem, Form, Item, Label, Input, Thumbnail, Text , Content, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


class PriceList extends Component {
    state = { buyprice: '', sellprice: '' };
    componentWillMount() {
       this.fetchData();
    }
    
    fetchData = async () => {
        const response = fetch('https://bitbns.com/order/getTickerAll')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({buyprice: responseJson[0].BTC.sellPrice})
          this.setState({sellprice: responseJson[0].BTC.buyPrice})
        })
        .catch((error) => {
          console.error(error);
        });
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
                <Title>Home</Title>
            </Body>
            <Right />
        </Header>
        <Content>
            <Text>Buy: { this.state.buyprice }</Text>
            <Text>Sell: { this.state.sellprice }</Text>
            
        </Content>

    </Container>
        );
    }
}

export default PriceList;
