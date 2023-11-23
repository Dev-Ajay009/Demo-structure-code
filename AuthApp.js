
import { View, Text, LogBox } from 'react-native';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import Routes from './src/navigation/Routes/Routes';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import { useEffect } from 'react';
import { getDataForAsync, setDataInAsync } from './src/CommanFunctions/CommanFunction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/HomeScreen/Home';
import SignIn from './src/screens/SignIn/SignIn';
import { useState } from 'react';
import DrawbleStack from './src/navigation/DrawbleStack';
import { set_data } from './src/redux/actions/LoginData';
import DrawRoutes from './src/navigation/Routes/DrawRoutes';

LogBox.ignoreAllLogs();
const Stack = createStackNavigator();

const AuthApp = () => {
 
    return (
        <Provider store={configureStore}>


                    <NavigationContainer>
                        <DrawRoutes />
                    </NavigationContainer>
       

        
        </Provider>
    );
};

export default AuthApp;
