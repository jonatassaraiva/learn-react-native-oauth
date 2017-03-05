import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { firebaseSetting } from '../setting';

import { Header, Spinner } from './component/common';
import LoginForm from './component/loginForm';
import SignOut from './component/signOut';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: null };
  }

  componentWillMount() {
    firebase.initializeApp(firebaseSetting);

    firebase.auth().onAuthStateChanged((user) => {
      if (user)
        this.setState({ loggedIn: true });
      else
        this.setState({ loggedIn: false });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <SignOut onPress={() => this.setState({ loggedIn: false })} />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header text="Authetication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
