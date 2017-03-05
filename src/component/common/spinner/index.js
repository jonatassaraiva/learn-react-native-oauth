import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.view}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

Spinner.propTypes = {
  size: React.PropTypes.string.isRequired
};


const styles = {
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export { Spinner };