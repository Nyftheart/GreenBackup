import React from 'react';

import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';

const Input = ({value, setValue, placeholder, secureText}) => {
  return (
    <SafeAreaView>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureText}
      />
    </SafeAreaView>
  );
};

export default Input;
