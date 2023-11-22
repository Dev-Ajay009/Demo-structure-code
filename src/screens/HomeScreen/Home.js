import { View, Text } from 'react-native'
import React from 'react'
import { getDataForAsync } from '../../CommanFunctions/CommanFunction';
import { useEffect } from 'react';

const Home = () => {
     useEffect(() => {
       (async() => {
        let data=await getDataForAsync('UseData');
        console.log('data---',data);
       })();
     }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home