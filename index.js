/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import { useEffect } from 'react';
import { useState } from 'react';
import AuthApp from './AuthApp';
import { getDataForAsync } from './src/CommanFunctions/CommanFunction';


const index = () => {

}
// const Index = () => {
//     const [isLogin, setIsLogin] = useState(false);

//     useEffect(() => {
//         const checkLoginStatus = async () => {
//             let loginStatus = await getDataForAsync('Login');
//             setIsLogin(loginStatus);
//         };

//         checkLoginStatus();
//     }, []);

//     const RootComponent = isLogin ? AuthApp :App ;

//     return <RootComponent />;
// };


AppRegistry.registerRunnable(appName, async initialProps => {
    try {
      
        let loginStatus = await getDataForAsync('Login');
            console.log('loginstatus----',loginStatus);
        loginStatus == true ?
            AppRegistry.registerComponent(appName, () => AuthApp)
            :
                AppRegistry.registerComponent(appName, () => App)

        AppRegistry.runApplication(appName, initialProps);
    } catch (err) {
        console.log(err);
    }
});

export default index;



// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
// import DashBord from './DashBord';
// import GuestLoginScreen from './GuestLoginScreen';
// import LoginApp from './LoginApp';
// import LoginMpin from './LoginMpin';
// import { getUserToken } from './src/helper/helperFunction';
// import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native'
// import { useDispatch, useSelector } from 'react-redux';
// import NetInfo from "@react-native-community/netinfo";
// import { setInternetConnection } from './src/Redux/actions/TopSipFund/TopSipFunds';
// import { useColorScheme } from 'react-native';

// const index = () => {


//     const currentTheme = useSelector(state => {
//         return state.myDarMode
//     })

//     // dispatch({type:"change_theme",payload: scheme == 'light' ? false : true})
//     // dispatch({type:"change_theme",payload: currentTheme == 'light' ? false : true})
// }
// AppRegistry.registerRunnable(appName, async initialProps => {
//     try {
//        
//         setInterval(() => {
//             CheckInternetConnection()
//         }, 3000)
//         let ExitingLoging = await getUserToken('ExitingLoging')
//         let ExitingLogingMPin = await getUserToken('ExitingLogingMPin')
//         let useStatus = await getUserToken('GuestLogin')

//         useStatus == true ?
//             AppRegistry.registerComponent(appName, () => GuestLoginScreen)
//             :
//             ExitingLoging == true ? ExitingLogingMPin == true ?
//                 AppRegistry.registerComponent(appName, () => DashBord) :
//                 ExitingLogingMPin == false ? AppRegistry.registerComponent(appName, () => LoginMpin) :
//                     AppRegistry.registerComponent(appName, () => LoginApp) :
//                 AppRegistry.registerComponent(appName, () => App)

//         AppRegistry.runApplication(appName, initialProps);
//     } catch (err) {
//         console.log(err);
//     }
// });


// export default index;