import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';

import cacheAssetsAsync from './utilities/cacheAssetsAsync';
import Login from './components/Login/login';

export default class AppContainer extends React.Component {
  state = {
    appIsReady: false,
    isLoggedIn: true,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/expo-wordmark.png'),
          require('./assets/images/exotic-car.png'),
          require('./assets/images/porsche_logo.png'),
          require('./assets/images/girl.jpeg'),
          require('./assets/images/pacers_heat_game_6.jpg'),
          require('./assets/images/burrito.png'),
        ],
        fonts: [
          FontAwesome.font,
          { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ],
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  changeLoggedIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}

          {this.state.isLoggedIn && <RootNavigation /> }
          {!this.state.isLoggedIn &&
            <Login
              onSuccessLogin={this.changeLoggedIn}
            />
          }
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
