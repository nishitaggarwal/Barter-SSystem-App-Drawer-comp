import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';



export const AppTabNavigator = createBottomTabNavigator({
  RequestItems: {
    screen: ExchangeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Request Items",
    }
  },
  DonateItems : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Items",
    }
  }
});
