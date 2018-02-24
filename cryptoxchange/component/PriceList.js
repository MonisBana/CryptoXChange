import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

class PriceList extends Component {
    state = { cryptos: [], currencys: [] };
    componentWillMount() {
        axios.get('https://bitbns.com/order/getTickerAll')
            .then(response => this.setState({ cryptos: response.data }));
    }
    renderAlbums() {
        return this.state.cryptos.map(crypto => this.state.currencys.map(currency => 
            console.log(crypto)
        )
        );
    }
    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default PriceList;
