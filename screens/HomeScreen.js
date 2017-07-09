import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import CompetitionBlock from '../components/CompetitionBlock/competitionBlock';

const blocks = [
  {
    background: require('../assets/images/exotic-car.png'),
    caption: 'Most exotic cars',
    desc: 'Show us the most exotic car!',
    provider: {
      text: 'Povered by Porshe',
      icon: require('../assets/images/porsche_logo.png')
    },
    date: '11d 22h 55m'
  },
  {
    background: require('../assets/images/burrito.png'),
    caption: 'Best Burrito Selfie',
    desc: 'Show us your funniest burrito selfie and get free Chipotle for a year!',
    provider: {
      text: 'By Chipotle',
      icon: require('../assets/images/porsche_logo.png')
    },
    date: '0d 10h 55m'
  },
  {
    background: require('../assets/images/girl.jpeg'),
    caption: 'Prettiest in pink',
    desc: 'Show us your funniest look and get free Chipotle for a year!',
    provider: {
      text: 'By Victoria\'s Secret',
      icon: require('../assets/images/porsche_logo.png')
    },
    date: '1d 12h 55m'
  },
  {
    background: require('../assets/images/pacers_heat_game_6.jpg'),
    caption: 'Heat game day fase',
    desc: 'Show us the coolest game moment and get free Chipotle for a year!',
    provider: {
      text: 'By Anonymous',
      icon: require('../assets/images/porsche_logo.png')
    },
    date: '01d 02h 55m'
  },
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'TOPVOTE',
  };

  goTo = (competition) => {
    this.props.navigation.navigate('Details', competition);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          {
            blocks.map((item, index) => (
              <CompetitionBlock
                key={index}
                background={item.background}
                caption={item.caption}
                provider={item.provider}
                date={item.date}
                onClick={() => { this.goTo(item) }}
              />
            ))
          }
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will run slightly slower but
          you have access to useful development tools. {learnMoreButton}.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    // paddingTop: 80,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
