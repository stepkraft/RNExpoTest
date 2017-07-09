import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export default class ContestDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.caption}`,
  });

  state = {
    selectedButton: 0,
  };

  updateIndex = (selectedButton) => {
    this.setState({selectedButton});
  }

  render() {
    const { params } = this.props.navigation.state;
    const component1 = () => (<Text>New</Text>);
    const component2 = () => (<Text>Top</Text>);
    const buttons = [ { element: component1 }, { element: component2 } ];

    return (
      <View style={styles.container}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedButton}
          buttons={buttons}
        />
        <View style={styles.description}>
          <Text style={{alignItems: 'center'}}>{params.desc}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bdc3c7',
  },
  description: {
    alignItems: 'center',
    width: '95%',
    margin: 5,
  },
});
