import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../../screens/SignIn/SignIn';
import Home from '../../screens/HomeScreen/Home';
// const Stack = createStackNavigator();
const Routes = (Stack) => {
  return (
    <>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </>
  );
};

export default Routes;
