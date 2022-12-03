import React, {useState} from 'react';

import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import LoginInput from '../../components/LoginRegisterComponant/LoginInput';
import LoginButton from '../../components/LoginRegisterComponant/LoginButton';
import {useNavigation} from '@react-navigation/native';

const Confirm = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');

  const onFinish = () => {
    console.warn('sing in');
  };
  const onBack = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <SafeAreaView>
      <LoginInput
        placeholder="Code"
        value={code}
        setValue={setCode}
        secureText={false}
      />
      <LoginButton text={'Finish'} onPress={onFinish} />
      <LoginButton text={'Back'} onPress={onBack} />
    </SafeAreaView>
  );
};

export default Confirm;
