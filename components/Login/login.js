import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';

import LoginForm from './loginForm';

class Login extends React.Component {

  onLogin = () => {
    if (true) { // success logged in
      this.props.onSuccessLogin();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/icons/app-icon.png')}
            style={styles.logoImage} />
        </View>
        <View style={styles.formContainer}>
          <LoginForm onLogin={this.onLogin} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logoImage: {
    width: 150,
    height: 150,
  },
  formContainer: {},
});

Login.propTypes = {
  onSuccessLogin: PropTypes.func.isRequired,
}

export default Login;
