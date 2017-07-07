import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class HallScreen extends React.Component {
  static navigationOptions = {
    title: 'Hall of fame',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hall of fame content</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1c40f',
  },
});
