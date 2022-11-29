import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const verifyIfUserIsConnected = async navigation => {
  // on verifie si l'utilisateur est deja connecte
  // on recupere la valeur de la clef "token" dans le storage
  const token = await AsyncStorage.getItem('token');

  axios({
    method: 'GET',
    url: 'https://easy-login-api.herokuapp.com/protected',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
      AsyncStorage.removeItem('token');
      navigation.navigate('ScreenLogin');
    });

  // si la valeur de la clef "token" est differente de null
  // alors on redirige l'utilisateur vers la page "Characters"
  if (token !== null) {
    navigation.navigate('ScreenLogin');
  } else {
    // sinon on remvoi l'utilisateur sur la page "Login"
    navigation.navigate('ScreenLogin');
  }
};

export default verifyIfUserIsConnected;
