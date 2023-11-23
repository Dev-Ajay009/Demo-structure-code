import { View, Text, Button, Alert } from 'react-native'
import React from 'react'
import { clearAsyncStorage, setDataInAsync } from '../../CommanFunctions/CommanFunction'
import { useNavigation } from '@react-navigation/native';
import AlretModel from '../../components/AlretModel';
import { useState } from 'react';

const Logout = ({ }) => {

  const [Logout, setLogout] = useState()
  const navigation = useNavigation()
  return (
    <View style={{
      padding: 20
    }}>
      <Button
        title='Click'
        onPress={() => {
          clearAsyncStorage()
          setLogout(true)

          Alert.alert('Logout', "Do you want logout", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            {
              text: "OK",
              onPress: () => {
                (() => {
                  setDataInAsync("Login", false);
                })()
                
                navigation.navigate("SignIn")
                
              }
            }
          ]);
        }}
      />

    </View>
  )
}

export default Logout