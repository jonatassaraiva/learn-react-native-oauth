import React from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';

import { Button } from '../common';

const SignOut = ({ onPress }) => {

  const handerOnPress = () => {
    firebase.auth().signOut();
    onPress();
  };

  return (
    <View style={styles.view}>
      <Button onPress={handerOnPress}>
        Log out
      </Button>
    </View>
  );
};

SignOut.propTypes = {
  onPress: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',

    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

export default SignOut;