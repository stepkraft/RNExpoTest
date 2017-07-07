import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class CompetitionBlock extends React.Component {
  render() {
    return (
      <View style={styles.blockContainer}>
        <Image
          source={this.props.background}
          style={styles.backgroundImage}
        >
          <View style={[styles.blockContentWrapper, styles.fullSized]}>
            <View>
              <Text style={styles.blockText}>
                {this.props.caption.toUpperCase()}
              </Text>
            </View>
            <TouchableOpacity style={styles.camera}>
              <Icon name='camera' size={30} color='#f6f6f6' />
            </TouchableOpacity>
          </View>
          <View style={styles.blockContentWrapper}>
            <View>
              <View style={styles.blockContentWrapper}>
                <Text style={styles.blockText}>
                  {this.props.provider.text}
                </Text>
                {this.props.provider.icon &&
                  <Image
                    source={this.props.provider.icon}
                    style={styles.providerLogo}
                  />
                }
              </View>
            </View>
            {this.props.date &&
              <View style={styles.blockContentWrapper}>
                <TouchableOpacity style={styles.camera}>
                  <Icon name='calendar' size={30} color='#f6f6f6' />
                </TouchableOpacity>
                <View>
                  <Text style={styles.blockText}>
                    {this.props.date}
                  </Text>
                </View>
              </View>
            }
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blockContainer: {
    marginVertical: 5,
    alignItems: 'center',
  },
  backgroundImage: {
    height: 150,
    width: '100%',
    resizeMode: 'cover', // or 'stretch'
  },
  blockContainer: {
    padding: 5,
  },
  blockContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fullSized: {
    flex: 1,
  },
  blockText: {
    color: 'rgba(255,255,255,0.9)',
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 2,
  },
  camera: {
    paddingHorizontal: 10,
  },
  providerLogo: {
    height: 15,
    width: 15,
    marginTop: 5,
    marginLeft: 5
  },
});

CompetitionBlock.propTypes = {
  background: PropTypes.any,
  caption: PropTypes.any,
  actions: PropTypes.any,
  provider: PropTypes.any,
  date: PropTypes.any,
}

export default CompetitionBlock;
