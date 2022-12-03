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
    <Page>
      <PlanteUnitaire />
    </Page>
  );
};

export default UniPlante;
const Page = styled.SafeAreaView`
  height: 100%;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;
