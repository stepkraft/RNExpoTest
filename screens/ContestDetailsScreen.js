import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, FlatList, Image, ScrollView, StyleSheet } from 'react-native';
import { Card, ButtonGroup, Avatar } from 'react-native-elements';

const items = [
  {
    id: 1,
    user: 'Deanmed',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    location: 'Fort Pierce, FL',
    date: '6/28/17 2:43 PM',
    image: require('../assets/images/girl.jpeg'),
    decs: 'I\'ll never let you go!!!',
    votes_count: 0,
  },
  {
    id: 2,
    user: 'Kevin',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    location: 'Los Angeles, CA',
    date: '6/28/17 1:48 PM',
    image: require('../assets/images/girl.jpeg'),
    decs: 'I\'ll never let you go!!!',
    votes_count: 3,
  }
];

export default class ContestDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.caption}`,
  });

  state = {
    selectedButton: 0,
  };

  _keyExtractor = (item, index) => item.id;

  updateIndex = (selectedButton) => {
    this.setState({selectedButton});
  }

  render() {
    const { params } = this.props.navigation.state;
    const component1 = () => (<Text>New</Text>);
    const component2 = () => (<Text>Top</Text>);
    const listDevider = () => (<View style={{marginVertical: 2}}></View>);
    const buttons = [ { element: component1 }, { element: component2 } ];

    return (
      <View style={styles.container}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedButton}
          buttons={buttons}
        />
        <View style={styles.description}>
          <Text style={{textAlign: 'center'}}>{params.desc}</Text>
        </View>
        <FlatList
          style={{ flex: 1, width: '100%'}}
          data={items}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={listDevider}
          renderItem={({item}) => (
            <View
              style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 5}}>
              <View style={styles.rowWrapper}>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                  <Avatar
                    small
                    rounded
                    source={{uri: item.avatar}}
                    activeOpacity={0.7}/>
                  <View style={{paddingLeft: 5}}>
                    <Text>{item.user}</Text>
                    <Text>{item.location}</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                  <FontAwesome name={'clock-o'} size={20} />
                  <Text style={{paddingLeft: 5}}>{item.date}</Text>
                </View>
              </View>
              <Image
                source={item.image}
                style={styles.itemImage}
              />
              <View style={styles.description}>
                <Text style={{textAlign: 'center'}}>{item.decs}</Text>
              </View>
              <View style={[styles.rowWrapper, {paddingHorizontal: 5}]}>
                <View style={{flexDirection:'row', flexWrap:'wrap', paddingBottom: 5}}>
                  <View>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                      <FontAwesome name={'star-o'} size={25} color="#ff8c00" style={{paddingHorizontal: 3}} />
                      <FontAwesome name={'comment-o'} size={25} color="#ff8c00" style={{paddingHorizontal: 3}} />
                      <FontAwesome name={'upload'} size={25} color="#ff8c00" style={{paddingHorizontal: 3}} />
                    </View>
                    <Text>{`${item.votes_count} votes`}</Text>
                  </View>
                </View>
                <View>
                  <FontAwesome name={'ellipsis-h'} size={30} color="#ff8c00" />
                </View>
              </View>
            </View>
          )}
        />
        {/*
        <ScrollView
          style={{ flex: 1, backgroundColor: 'blue', width: '100%'}}>
          {
            items.map((item, index) => (
              <View
                style={{flex: 1, flexGrow: 1, backgroundColor: 'red'}}
                key={index}>
                <Text>{item.user}</Text>
              </View>
            ))
          }
        </ScrollView>
        */}
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
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemImage: {
    flex: 1,
    width: '100%',
  }
});
