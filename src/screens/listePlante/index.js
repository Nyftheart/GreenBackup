import React, {useState} from 'react';

import {
  Appearance,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AjoutPlante from '../../components/ajoutPlante';
import styled from 'styled-components/native';

const ListePlante = ({navigation, route}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {});
  return (
    <Page>
      <View>
        <Header source={require('../../../assets/TopPlante.png')} />
        <Title>Trouve ta plante !</Title>
        <UnderTitle>
          Le savant connait le nom ds plantes. Le poète les appelle par leur
          prénom.
        </UnderTitle>
        <LogoutTouch onPress={() => navigation.navigate('ScreenPiece')}>
          <Logout source={require('../../../assets/BackArrow.png')} />
        </LogoutTouch>
      </View>
      <AjoutPlante />
    </Page>
  );
};

export default ListePlante;

const Header = styled.Image`
  width: 100%;
  height: 284px;
`;
const Page = styled.SafeAreaView`
  height: 100%;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;
const Logout = styled.Image`
  position: absolute;
  width: 30px;
  height: 20px;
  margin-top: 25px;
  margin-left: 28px;
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

const UnderTitle = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: white;
  position: absolute;
  padding-top: 125px;
  padding-left: 25px;
`;
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#b6e0ce',
  },
});
