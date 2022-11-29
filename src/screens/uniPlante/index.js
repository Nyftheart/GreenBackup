import React, {useState} from 'react';

import {Appearance} from 'react-native';
import PlanteUnitaire from '../../components/Plante/PlanteUnitaire';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import darkMode from '../../../darkMode';

const UniPlante = ({navigation, route}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {});
  console.log(navigation);
  console.log(route);
  return (
    <Page style={theme == 'light' ? styles.page : darkMode.page}>
      <PlanteUnitaire />
    </Page>
  );
};

export default UniPlante;
const Page = styled.SafeAreaView`
  height: 100%;
`;
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#3c8d68',
  },
});
