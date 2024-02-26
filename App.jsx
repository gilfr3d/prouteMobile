import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import SalesOrderScreen from './src/screens/SalesOrderScreen';
import LineItemDetailsScreen from './src/screens/LineItemDetailsScreen';
import CustomerDeliveryStatusScreen from './src/screens/CustomerDeliveryStatusScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen name="SalesOrders" component={SalesOrderScreen} />
        <Stack.Screen
          name="Line Item Details"
          component={LineItemDetailsScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Custom Delivery Status"
          component={CustomerDeliveryStatusScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
