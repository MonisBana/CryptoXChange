import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';

export default class Main extends Component {
  
render() {

    var { navigate } = this.props.navigation;

    return (

        <Container>
        <Button onPress={ () => navigate('Home') }>
          <Text>
            Main
          </Text>
        </Button>
      </Container>
    );
}
}