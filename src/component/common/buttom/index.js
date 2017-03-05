import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  children: React.PropTypes.any.isRequired,
  onPress: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',

    ...Platform.select({
      ios: {
        backgroundColor: '#fff',
      },
      android: {
        backgroundColor: '#007aff',
      },
    })
  },
  text: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,

    ...Platform.select({
      ios: {
        color: '#007aff',
      },
      android: {
        color: '#fff',
      },
    })
  }
});

export { Button };