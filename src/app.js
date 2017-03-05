import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { firebaseSetting } from '../setting';

import { Header } from './component/common';
import LoginForm from './component/loginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(firebaseSetting);

    firebase.auth().onAuthStateChanged((user) => {
      if (user)
        this.setState({ loggedIn: true });
      else
        this.setState({ loggedIn: false });
    });
  }

  render() {
    return (
      <View>
        <Header text="Authetication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
