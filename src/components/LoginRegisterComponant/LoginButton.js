import React from 'react';

import { Pressable, SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";

const Button = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

export default Button;
