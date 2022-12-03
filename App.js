import React, {useEffect, useState} from 'react';
import Routes from './src/config/routes';
import {Provider, useSelector} from 'react-redux';
import {store} from './src/config/store';
import SplashScreen from 'react-native-splash-screen';
import styled, {ThemeProvider} from 'styled-components';
import './src/config/translation.js';
import themeReducer from './src/reducers/switchTheme';
import {lightTheme} from './theme';

function App() {
  SplashScreen.hide();

  return (
    <Provider store={store}>
      <SafeArea>
        <Routes />
      </SafeArea>
    </Provider>
  );
}

const SafeArea = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;

export default App;
