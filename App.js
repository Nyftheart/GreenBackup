import React, {useEffect} from 'react';
import Routes from './src/config/routes';
import {Provider} from 'react-redux';
import {store} from './src/config/store';
import SplashScreen from 'react-native-splash-screen';
class App extends React.Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  render() {
    return (
      // provider englobe l'app,
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
