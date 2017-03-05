import React from 'react';
import { View, StyleSheet } from 'react-native';

const Section = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

Section.propTypes = {
  children: React.PropTypes.any.isRequired
};

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});

export { Section };