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


