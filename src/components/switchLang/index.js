import React, {useState} from 'react';
import {TouchableOpacity, Image, Text, Button} from 'react-native';
import {useTranslation} from 'react-i18next';

const SwitchLangButton = () => {
  const {t, i18n} = useTranslation();
  return (
    <Button
      onPress={() => i18n.changeLanguage('fr')}
      title={t('lang')}
      color="#3c8d68"
    />
  );
};

export default SwitchLangButton;
