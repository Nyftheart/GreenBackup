import React, {useState} from 'react';

import {
  Appearance,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ListePiece from '../../components/ajoutPiece';
import styled from 'styled-components/native';
import darkMode from '../../../darkMode';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const PieceScreen = ({navigation}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {});
  return (
    <Page style={theme == 'light' ? styles.page : darkMode.page}>
      <View>
        <Header source={require('../../../assets/TopPiece.png')} />
        <Title>Ou est ta plante ?</Title>
        <LogoutTouch onPress={() => navigation.navigate('ScreenLogin')}>
          <Logout source={require('../../../assets/Logout.png')} />
        </LogoutTouch>
      </View>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{requestNonPersonalizedAdsOnly: true}}
      />
      <ListePiece />
    </Page>
  );
};

export default PieceScreen;

const Header = styled.Image`
  width: 100%;
  height: 240px;
`;
const Page = styled.SafeAreaView`
  height: 100%;
`;
const Logout = styled.Image`
  position: absolute;
  width: 25.2px;
  height: 27px;
  margin-top: 25px;
  margin-left: 336px;
  z-index: 1;
  color: white;
`;
const LogoutTouch = styled.TouchableOpacity`
  position: absolute;
`;
const Title = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: white;
  position: absolute;
  padding-top: 65px;
  padding-left: 25px;
`;
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#b6e0ce',
  },
});
