import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../screens/SignIn/SignIn';
import Home from '../../screens/HomeScreen/Home';
import { useEffect } from 'react';
import { getDataForAsync } from '../../CommanFunctions/CommanFunction';
import { useState } from 'react';
import AlretModel from '../../components/AlretModel';
import DrawbleStack from '../DrawbleStack';
import SignUp from '../../screens/Registration/SignUp';
import UserProfileForInsta from '../../screens/HomeScreen/UserProfileForInsta';
const Stack = createStackNavigator();
const Routes = () => {
  const [isLogin, setIsLogin] = useState()
  useEffect(() => {
    (async () => {
      let isLogin = await getDataForAsync('Login');
      setIsLogin(isLogin)

    })();
  }, []);
  console.log('isLogin---', isLogin);
  return (
    <>
      <Stack.Navigator screenOptions={{ animation: 'flip' }}>

        <>

          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DrawbleStack"
            component={DrawbleStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
                    <Stack.Screen
                        name="UserProfileForInsta"
                        component={UserProfileForInsta}
                        options={{ headerShown: false }}
                    />
        </>



      </Stack.Navigator>
    </>
  );
};

export default Routes;
