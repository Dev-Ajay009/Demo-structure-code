import {View, Text, LogBox} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/navigation/Routes/Routes';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import { useEffect } from 'react';
import {  setDataInAsync } from './src/CommanFunctions/CommanFunction';
import AsyncStorage from '@react-native-async-storage/async-storage';

LogBox.ignoreAllLogs();
const Stack = createStackNavigator();

const App = () => {
    let loggin
  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{animation: 'flip'}}>
          {Routes(Stack)}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
