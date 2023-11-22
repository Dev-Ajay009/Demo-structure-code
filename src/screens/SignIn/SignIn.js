import {View, Text, TextInput, Platform, Button} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {
  getDataForAsync,
  setDataInAsync,
} from '../../CommanFunctions/CommanFunction';
import {useState} from 'react';

import CustomInput from '../../components/CustomInput';

const SignIn = ({navigation}) => {

  const [data, setData] = useState({
    mail: '',
    password: '',
  });
  const handler = (v, i) => {
    setData(e => ({...e, [i]: v}));
  };

  useEffect(() => {
    (() => {
      setDataInAsync('UseData', data?.mail);
    })();
  }, [data?.mail]);

  return (
    <View
      style={{
        padding: 20,
      }}>
      <CustomInput
        Placeholder={'Enter mail'}
        Value={data?.mail}
        attrName={'mail'}
        updateMasterState={handler}
      />
      <CustomInput
        Placeholder={'Enter password'}
        Value={data?.password}
        attrName={'password'}
        updateMasterState={handler}

      />
      <View
        style={{
          marginTop: 20,
        }}>
        <Button
          onPress={() => {
            navigation.replace('Home');
          }}
          title="Sign In"
        />
      </View>
    </View>
  );
};

export default SignIn;
