import React, { Component } from 'react';
import { Image, View, StatusBar } from 'react-native';
import { Header, Container, Card, CardItem, Form, Item, Label, Button, Input, Thumbnail, Text, Content, Left, Body, Right, Icon, Title } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
//import Button from './Button';
import CardSection from './CardSection';
import { StackNavigator } from 'react-navigation';

//import Header from './Header';

class PriceList extends Component {
    state = { buyprice: '', sellprice: '' };
    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = fetch('https://bitbns.com/order/getTickerAll')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ buyprice: responseJson[0].BTC.sellPrice })
                this.setState({ sellprice: responseJson[0].BTC.buyPrice })
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {

        var { navigate } = this.props.navigation;

        return (
            <Container>
                <Header androidStatusBarColor="#f7921b" style={{backgroundColor:'#f7921b'}}>
                    
                    <Body>
                        <Title>
                            CryptoXChange
                        </Title>
                    </Body>
                    
                </Header> 
                <Content style={{ backgroundColor:'white' }}>
                <View style={{ backgroundColor: '#f7921b',height: 335, alignItems:'center', justifyContent:'center' }}>
                    <Image source={require('./Bitcoin.png')} style={styles.iconStyles} />
                    <Text style={styles.BitconStyle}>Bitcoin</Text>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems:'center', justifyContent:'center' }}>
                        <Text style={styles.BuyStyle}>Buy: {this.state.buyprice}</Text>
                        <Text style={styles.BuyStyle}>Sell: {this.state.sellprice}</Text>
                    </View>
                </View>
                <View style={{ paddingTop:30, backgroundColor:'white', flex: 1, flexDirection: 'row',justifyContent:'space-around',alignItems:'center' }}>
                    <Button onPress={() => navigate('Buy')} rounded warning style={{ width:150, backgroundColor:'#f7921b' }}>
                        <View style={{ flex:1, flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
                        <Text>Buy</Text>
                        </View>
                    </Button>
                    <Button onPress={() => navigate('Sell')} rounded warning style={{ width:150, backgroundColor:'#f7921b' }}>
                        <View style={{ flex:1, flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
                        <Text>Sell</Text>
                        </View>
                    </Button>
                </View>
                </Content>
            </Container>
        );
    }
}

const styles = {
    iconStyles:{
        alignSelf: 'center',
        marginTop: 30,
    },
    BitconStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 60,
        fontWeight: 'bold',
    },
    BuyStyle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        marginTop: 30,
        marginLeft: 30

    }
}

export default PriceList;
