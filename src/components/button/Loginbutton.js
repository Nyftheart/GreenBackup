import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

// factorisation du code: on cree un componnent Button
//    ->{onPress,label}: destructuration

const Button = ({onPress, label}) => {
  return (
    <ButtonSubmit onPress={onPress}>
      <Submit>{label}</Submit>
    </ButtonSubmit>
  );
};

export default Button;

const ButtonSubmit = styled.TouchableOpacity`
  background-color: #3c8d68;
  width: 278px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  border-radius: 30px;
`;
const Submit = styled.Text`
  margin: auto;
  font-weight: bold;
  color: white;
  font-size: 17px;
`;
