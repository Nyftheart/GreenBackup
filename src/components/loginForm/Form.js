import React from 'react';
import {Text, TextInput, View} from 'react-native';
import NavigationButton from '../button/Loginbutton';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';

const LoginForm = ({setInputs, inputs, submitForm}) => {
  const {t, i18n} = useTranslation();
  return (
    // {/*    ...inputs: spread operator, permet de recupere tout un tableau*/}
    // {/* etant donne qu'on a plus qu'un seul useState, il faut que tout soit*/}
    // {/* stoquer dans une seul constane , ici , inputs.*/}
    // {/*    ->{text => setInputs({...inputs, username: text})}*/}
    // {/*         permet de , dans inputs, changer "username", pour y mettre la*/}
    // {/* valeur de texte.*/}
    <Form>
      <Input
        onChangeText={text => setInputs({...inputs, username: text})}
        value={inputs.username}
        placeholder="Username"
      />
      <Input
        onChangeText={text => setInputs({...inputs, password: text})}
        value={inputs.password}
        placeholder="Password"
      />
      <NavigationButton label={t('submit')} onPress={submitForm} />
    </Form>
  );
};

export default LoginForm;

const Form = styled.View`
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  width: 353px;
  height: 364px;
  background-color: rgba(60, 141, 104, 0.5);
  border-radius: 30px;
`;

const Input = styled.TextInput`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  height: 56px;
  width: 278px;
  background-color: white;
  border-radius: 10px;
`;
