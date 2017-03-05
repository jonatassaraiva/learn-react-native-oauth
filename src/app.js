import React, { Component } from 'react';
import { View } from 'react-native';

import { Header } from './component/common';

class App extends Component {

  render() {
    return (
      <View>
        <Header text="Authetication" />
      </View>
    );
  }
}

export default App;
