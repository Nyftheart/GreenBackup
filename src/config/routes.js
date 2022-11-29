import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenPiece from '../screens/pieceScreen';
import {NavigationContainer} from '@react-navigation/native';
import listePlante from '../screens/listePlante';
import uniPlante from '../screens/uniPlante';
import Login from '../screens/Login/ScreenLogin';
import Register from '../screens/Register/RegisterScreen';
import Confirm from "../screens/Confirm/ConfirmScreen";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
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
  );
};

export default Routes;
