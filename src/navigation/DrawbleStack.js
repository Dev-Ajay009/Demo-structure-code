import { View, Text, TouchableHighlight, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/HomeScreen/Home';
import Logout from '../screens/HomeScreen/Logout';
import CustomDrawer from '../components/CustomDrawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import SignIn from '../screens/SignIn/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerFunction } from '../CommanFunctions/CommanFunction';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const DrawbleStack = ( ) => {
  const navigation = useNavigation();

  const RightIcon = ({ navigation }) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => {
          toggleDrawer()
        }} style={{ paddingRight: 2, marginRight: 0 }} >
          <Image
            source={require('../assets/menu.png')}
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const DrawOptions = {
   
    headerStyle: {
      backgroundColor: '#3498db', // Set your desired background color
    },
    headerTintColor: '#fff', // Set the text color of the header
    headerTitleStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center', // Align the title in the center
    
    },
    drawerLabelStyle: {
      color: '#000', // Set the text color of drawer items
    },
    drawerStyle: {
      backgroundColor: '#ecf0f1', // Set the background color of the drawer
    },
    headerLeft: () => (
      <RightIcon navigation={navigation} />
    ),
    headerRight: () => (
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 40, height: 40, marginRight: 10 }}
      />
    ),
    headerTitleAlign: 'center', // Center-align the title
  }
  
  return (
    <>
    
      <Drawer.Navigator
        screenOptions={{
          
          headerStyle: {
            backgroundColor: '#000', // Set your desired background color
          },
          headerTintColor: '#fff', // Set the text color of the header
          headerTitleStyle: {
            fontSize: 18,
            alignContent:'center',
            justifyContent:'center'
          },
          drawerLabelStyle: {
            color: '#000',
            textAlign: "left" // Set the text color of drawer items
          },
          drawerStyle: {
            backgroundColor: '#ecf0f1', // Set the background color of the drawer
          },
        }}
      drawerContent={(props) => <CustomDrawer {...props}  />}>
        <Drawer.Screen name="Home" component={Home} options={DrawOptions}/>
        <Drawer.Screen name="settings" component={Logout} options={DrawOptions} />
       
      </Drawer.Navigator>

   </>
  )
}

export default DrawbleStack