import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyles } = styles;
return (
    <View style={viewStyles}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View> 
    );
};
const styles = {
    viewStyles: {
        backgroundColor: '#f7921b',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        position: 'relative'    
},
    textStyle: {
        color: '#fff',
        fontSize: 22,
        marginLeft: 14,
        textAlign: 'left',
        fontWeight: '700',
        marginBottom: 15  
    }
};

export default Header;
