import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containereStyle}>
            {props.children}
        </View>
    );
};


const styles = {
    containereStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#fff',
        position: 'relative'
    }
};
export default CardSection;
