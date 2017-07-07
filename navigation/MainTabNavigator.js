/**
 * @flow
 */

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import HallScreen from '../screens/HallScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Activity: {
      screen: ActivitiesScreen,
    },
    Hall: {
      screen: HallScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // Set the tab bar icon
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Activity':
            iconName = 'bullhorn';
            break;
          case 'Hall':
            iconName = 'bookmark';
            break;
          case 'Profile':
            iconName = 'user';
        }
        return (
          <FontAwesome
            name={iconName}
            size={32}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    // Put tab bar on bottom of screen on both platforms
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: false,
    // Don't show the labels
    tabBarOptions: {
      showLabel: true,
    },
  }
);
