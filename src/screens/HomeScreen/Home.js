import { View, Text } from 'react-native'
import React from 'react'
import { getDataForAsync } from '../../CommanFunctions/CommanFunction';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const Data = useSelector(state => {
    return state.GetData;
  });
console.log('data-----',Data);
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home