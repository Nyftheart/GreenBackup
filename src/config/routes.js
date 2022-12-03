import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenPiece from '../screens/pieceScreen';
import {NavigationContainer} from '@react-navigation/native';
import listePlante from '../screens/listePlante';
import uniPlante from '../screens/uniPlante';
import Login from '../screens/Login/ScreenLogin';
import Register from '../screens/Register/RegisterScreen';
import Confirm from '../screens/Confirm/ConfirmScreen';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const theme = useSelector(state => state.switchTheme.theme);
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="ScreenLogin" component={Login} />
          <Stack.Screen name="RegisterScreen" component={Register} />
          <Stack.Screen name="ConfirmScreen" component={Confirm} />
          <Stack.Screen name="ScreenPiece" component={ScreenPiece} />
          <Stack.Screen name="ListePlante" component={listePlante} />
          <Stack.Screen name="UniPlante" component={uniPlante} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Routes;
