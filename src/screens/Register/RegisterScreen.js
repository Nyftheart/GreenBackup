import React, {useState} from 'react';

import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import LoginInput from '../../components/LoginRegisterComponant/LoginInput';
import LoginButton from '../../components/LoginRegisterComponant/LoginButton';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfpassword] = useState('');
  const [email, setEmail] = useState('');

  const onRegister = () => {
    navigation.navigate('ConfirmScreen');
  };
  const onAlreadyAccont = () => {
    navigation.navigate('ScreenLogin');
  };

  return (
    <SafeAreaView>
      <Text>to do</Text>
    </SafeAreaView>
  );
};

export default Register;
