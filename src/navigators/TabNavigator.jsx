import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RouteScreen from '../screens/RouteScreen';
import Home from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Routes" component={RouteScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: '#F4F4F4',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
});
