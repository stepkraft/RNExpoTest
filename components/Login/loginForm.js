import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

class LoginForm extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="username"
          placeholderTextColor="{'rgba(255,255,255,0.8)'}"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => { this.passwordField.focus() }}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="{'rgba(255,255,255,0.8)'}"
          returnKeyType="go"
          secureTextEntry
          ref={(input) => { this.passwordField = input; }}
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonsContainer}>
          <Text
            onPress={this.props.onLogin}
            style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginBottom: 20,
    color: '#fff',
    paddingHorizontal: 10
  },
  buttonsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '200',
  },
});

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
