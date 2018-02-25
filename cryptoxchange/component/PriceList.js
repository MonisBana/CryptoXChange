import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Card, CardItem, Form, Item, Label, Input, Thumbnail, Text, Content, Left, Body, Right, Icon, Title } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import Button from './Button';
import CardSection from './CardSection';
import Header from './Header';

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
            <View>
                <Header  headerText="CryptoXChange" /> 
                <View style={{ backgroundColor: '#f7921b',height: 335 }}>
                    <Image source={require('./Bitcoin.png')} style={styles.iconStyles} />
                    <Text style={styles.BitconStyle}>Bitcoin</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={styles.BuyStyle}>Buy: {this.state.buyprice}</Text>
                        <Text style={styles.BuyStyle}>Sell: {this.state.sellprice}</Text>
                    </View>
                </View>
                <CardSection style={{ flex: 1, flexDirection: 'row'}}>
                    <Button style={{ height: 30 }}>Buy</Button>
                    <Button style={{ height: 30 }}>Sell</Button>
                </CardSection>
            </View>
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
