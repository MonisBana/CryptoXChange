import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#f7921b',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 0.5,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#f7921b',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 75,
    borderRadius: 8
  }
};

export default Button;

