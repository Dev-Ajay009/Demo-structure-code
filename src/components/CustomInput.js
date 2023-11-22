import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const CustomInput = ({
  Placeholder,
  Value,
  attrName,
  updateMasterState,
  RemoveText = '',
  onChange,
}) => {
  useEffect(() => {
    updateMasterState(attrName, Value);
  }, []);

  const onChangeText = e => {
    updateMasterState(e, attrName);
  };
  return (
    <View>
      <TextInput
        value={Value}
        placeholder={Placeholder}
        onChangeText={e => {
          onChangeText(e);
        }}
        style={{
          fontSize: 18,
          color: '#000000',
          borderBottomWidth: 0.5,
          borderColor: '#000',
        }}
      />
    </View>
  );
};

export default CustomInput