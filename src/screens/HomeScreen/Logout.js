import { View, Text, Button, Alert } from 'react-native'
import React from 'react'
import { clearAsyncStorage, setDataInAsync } from '../../CommanFunctions/CommanFunction'
import { useNavigation } from '@react-navigation/native';
import AlretModel from '../../components/AlretModel';
import { useState } from 'react';
import HeaderComponents from '../../components/HeaderComponents';
import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';

const Logout = ({ }) => {

  const [Token, setToken] = useState()
  const navigation = useNavigation()
  useEffect(() => {
    // Request permissions and get FCM token
    messaging()
      .requestPermission()
      .then(() => {
        return messaging().getToken();
      })
      .then(token => {
        console.log('FCM Token:', token);
        setToken(token)
      })
      .catch(error => {
        console.log('Permission and Token Error:', error);
      });

    // Handle incoming messages when the app is in the foreground
    const unsubscribe = messaging().onMessage(remoteMessage => {
      console.log('Message received in the foreground!', remoteMessage);
    });

    return unsubscribe;
  }, []);
  const serverKey = 'BA6FSykMUtwXdFB6xZ_94NAo2MnKG61fIjo1CzlAfwfafTHjyox870UAcKYwjukLoovcx-ORAAkqZgmVC-Q4Dic'; 

  const handleButtonClick = async() => {
    try {
 // Replace with the actual token

      const response = await fetch('https://fcm.googleapis.com/v1/projects/your-project-id/messages:send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `key=${serverKey}`, // Replace with the actual access token
        },
        body: JSON.stringify({
          message: {
            token: Token,
            data: {},
            notification: {
              body: 'This is an FCM notification message!',
              title: 'FCM Message',
            },
          },
        }),
      });

      const result = await response.json();
      console.log('Notification response:', result);
    } catch (error) {
      console.error('Notification error:', error);
    }
  };
  return (
    <>
      <HeaderComponents navigation={navigation} title={'Settings'} />
      <View style={{
        padding: 20
      }}>
        <Button
          title='Click'
          onPress={() => {
            // clearAsyncStorage()
            // setLogout(true)
            handleButtonClick()
            // Alert.alert('Logout', "Do you want logout", [
            //   {
            //     text: "Cancel",
            //     onPress: () => console.log("Cancel Pressed"),
            //     style: "cancel"
            //   },
            //   {
            //     text: "OK",
            //     onPress: () => {
            //       (() => {
            //         setDataInAsync("Login", false);
            //       })()

            //       navigation.navigate("SignIn")

            //     }
            //   }
            // ]);
          }}
        />

      </View>
    </>

  )
}

export default Logout