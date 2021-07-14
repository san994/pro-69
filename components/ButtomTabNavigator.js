import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import RideScreen from '../screen/RideScreen';
import RideHistoryScreen from '../screen/RideHistoryScreen';

const tab = createBottomTabNavigator()
export default class BottomTabNavigator extends React.Component{
    render(){
        return(
          <NavigationContainer>
              <tab.Navigator>
                  <tab.Screen name = "rideScreen" component = {RideScreen}/>
                  <tab.Screen name = "rideHistoryScreen" component = {RideHistoryScreen}/>
              </tab.Navigator>
          </NavigationContainer>
        )
    }
}

