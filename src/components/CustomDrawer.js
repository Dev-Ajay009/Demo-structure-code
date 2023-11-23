import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { setDataInAsync } from '../CommanFunctions/CommanFunction'

const CustomDrawer = (props) => {
    const {navigation} = props
 

    const onLogout = () => {
        // Implement your logout logic here
        // For example, clear authentication token, navigate to the login screen, etc.
        (() => {
            setDataInAsync("Login", false);
        })();
        Alert.alert('lOGOUT', 'Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => navigation.replace('SignIn') },
        ])
    };
  return (
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#fff', padding: 0,flex:1 }}>
          {/* Custom header */}
          <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
              <Text>Custom Header</Text>
          </View>

          {/* Drawer items */}
          <DrawerItemList {...props} />

          {/* Custom drawer items */}
          <TouchableOpacity onPress={onLogout} style={{ padding: 16, borderTopWidth: 1, borderTopColor: '#ccc' }}>
              <Text>Logout</Text>
          </TouchableOpacity>
      </DrawerContentScrollView>
  )
}

export default CustomDrawer