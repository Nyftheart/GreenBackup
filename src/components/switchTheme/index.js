import React, {useState} from 'react';
import {TouchableOpacity, Image, Button} from 'react-native';
import {switchTheme} from '../../actions/switchTheme';

import {useDispatch, useSelector} from 'react-redux';
import {darkTheme, lightTheme} from '../../../theme';

const SwitchThemeButton = () => {
  const [theme, setTheme] = useState('light');
  const dispatch = useDispatch();
  const themeRedux = useSelector(state => state.switchTheme.theme);
  console.log(themeRedux.theme);
  const ThemeToggle = () => {
    themeRedux.theme === 'light'
      ? dispatch(switchTheme(darkTheme))
      : dispatch(switchTheme(lightTheme));
  };
  return <Button onPress={ThemeToggle} title="Theme" color="#3c8d68" />;
};
export default SwitchThemeButton;
