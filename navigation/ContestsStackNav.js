import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen';
import ContestDetailsScreen from '../screens/ContestDetailsScreen';

const ContestsStackNav = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            // title: () => "Home",
            // header: ({ navigate }) => ({
            //   left: (
            //     <Text>asdasds</Text>
            //   )
            // })
            // header: ({ navigate }) => ({
            //     left: (
            //         <TouchableOpacity onPress={() => navigate("DrawerOpen")}>
            //             <IOSIcon name="ios-menu" size={30} />
            //         </TouchableOpacity>
            //     ),
            //     style: { paddingRight: 10, paddingLeft: 10 },
            // })
        },
    },
    Details: {
        screen: ContestDetailsScreen,
        // navigationOptions: {
        //     title: () => "Detail",
        // }
    }
})

export default ContestsStackNav;
