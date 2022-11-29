import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Appearance, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import NavigationButton from '../../components/button/Loginbutton';
import LoginForm from '../../components/loginForm/Form';
import verifyIfUserIsConnected from '../../utils/verfiyIfUserIsConnected';
import {useFocusEffect} from '@react-navigation/native';
import styled from 'styled-components/native';
import darkMode from "../../../darkMode";

// on cree la page et on ne fait de rien de complexe
// on verifie juste que sa fonctionne

// on cree un bouton (toucableOpacity) qui appelle en "onPress" le changement de
// page en precisant la page de destination dans le :
//     props.navigation.navigate('Characters')

const Login = ({navigation}) => {
  // creation des variable necessaire au login avec les useState
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // creation d'un state qui vas recupere toute les donnees quelque soit leur
  // nombre
  const [inputs, setInputs] = React.useState({
    username: '',
    password: '',
  });

  // se lance au focus d'une page
  useFocusEffect(() => {
    // navigation.navigate('Characters');
    verifyIfUserIsConnected(navigation);
  });

  // creation de la fonction qui vas envoyer les donnees a l'API
  const submitForm = () => {
    //    ->const {username, password} = inputs: destructuration de inputs pour
    // recuperer username et password en tant que variable separer
    const {username, password} = inputs;

    axios({
      method: 'POST',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data: {
        username,
        password,
      },
    })
      // permet d'attendre que la methode POST s'execute avant d'afficher les
      // donnee.
      //   ->async: permet d'utiliser le mot cle "await" au sein de la fonction
      .then(async res => {
        console.log(res);
        // on recupere le token place dans le header du resultat de la requete
        await AsyncStorage.setItem('token', res.headers['x-access-token']);
        // await AsyncStorage.setItem('token', 'OUI OUI');
        // change la page pour acceder a la page 'Characters'
        navigation.navigate('ScreenPiece');
      })
      .catch(err => {
        console.log(err);
      });
  };
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {});
  return (

    <Screen style={theme == 'light' ? styles.page : darkMode.page}>
      <Title>Welcome in Green Memory !</Title>
      {/* creation du formulaire (comme dans todolist)*/}
      <LoginForm
        setInputs={setInputs}
        submitForm={submitForm}
        inputs={inputs}
      />
      <AcountButton>
        <Acount>Pas de compte ? </Acount>
        <Arow source={require('../../../assets/arrowWhite.png')} />
      </AcountButton>
    </Screen>
  );
};

export default Login;

const Screen = styled.SafeAreaView`
  height: 100%;
`;
const Title = styled.Text`
  width: 353px;
  height: 84px;
  background-color: #3c8d68;
  color: white;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 30px;
  padding-top: 25px;
  border-radius: 30px;
`;
const Acount = styled.Text`
  width: 353px;
  height: 69px;
  background: rgba(60, 141, 104, 0.5);
  color: white;
  font-size: 26px;
  text-align: left;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 50px;
  margin-bottom: 30px;
  padding-top: 17px;
  padding-left: 40px;
  border-radius: 30px;
`;
const Arow = styled.Image`
  position: absolute;
  margin-top: 77px;
  margin-left: 303px;
  margin-right: 10px;
  width: 29px;
  height: 18px;
`;
const AcountButton = styled.TouchableOpacity`
  flex-direction: row;
  flex-wrap: wrap;
`;
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#b6e0ce',
  },
});
