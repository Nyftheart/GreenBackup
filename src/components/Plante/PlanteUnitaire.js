import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Button,
  FlatList,
  Image,
  PushNotificationIOS,
  SafeAreaView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import DataPlante from '../../../DataPlante.json';
import notifee, {TimeUnit, TriggerType} from '@notifee/react-native';
import {IntervalTrigger} from '@notifee/react-native';
import styled from 'styled-components/native';

export function Notif() {
  async function onCreateTriggerNotification() {
    const date = new Date(Date.now());
    date.setHours(11);
    date.setMinutes(0);
    date.setDate(date.getDate() + 1);
    // Create a time-based trigger
    const trigger: IntervalTrigger = {
      type: TriggerType.INTERVAL,
      interval: 15,
      timeUnit: TimeUnit.MINUTES,
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Jane',
        body: 'Today at 11:20am',
      },
      trigger,
    );
  }

  return (
    <View>
      <TouchableOpacity onPress={() => onCreateTriggerNotification()}>
        <NotifImage source={require('../../../assets/Notif_button.png')} />
      </TouchableOpacity>
    </View>
  );
}
export const onShare = async () => {
  const result = await Share.share({
    message: 'plante share',
  });
};

const PlanteUnitaire = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const Plante = DataPlante.Plante;
  console.log(Plante);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, [fadeAnim]);

  return (
    <Page>
      <FlatList
        data={Plante}
        keyExtractor={item => item.id}
        onEndReached={() => console.log('end reached')}
        renderItem={({item}) => {
          if (route.params.idplante === item.name) {
            return (
              <Page>
                <TitleView>
                  <LogoutTouch
                    onPress={() => navigation.navigate('ScreenPiece')}>
                    <Logout source={require('../../../assets/BackArrow.png')} />
                  </LogoutTouch>
                  <TouchableOpacity onPress={onShare}>
                    <Sharebutton source={require('../../../assets/Share.png')} />
                  </TouchableOpacity>
                  <Type>{item.type}</Type>
                  <PlanteTitle>{item.name}</PlanteTitle>
                  <Notif />
                  <Dialog>Tout va bien j’ai besoin de rien 😊</Dialog>
                </TitleView>
                <DialogBox source={require('../../../assets/DialogBox.png')} />
                <BottomPage
                  source={require('../../../assets/BottomPage.png')}
                />
                <Animated.View // Special animatable View
                  style={{
                    opacity: fadeAnim, // Bind opacity to animated value
                  }}>
                  <PlanteImage
                    source={require('../../../assets/Plante_Type1.png')}
                  />
                </Animated.View>

                <ProposTitle>A Propos de moi !</ProposTitle>
                <Propos>{item.content}</Propos>
              </Page>
            );
          } else {
            return null;
          }
        }}
      />
    </Page>
  );
};

export default PlanteUnitaire;

const Logout = styled.Image`
  position: absolute;
  width: 30px;
  height: 20px;
  margin-top: -60px;
  margin-left: 0px;
  z-index: 1;
  color: white;
`;
const Sharebutton = styled.Image`
  position: absolute;
  width: 30px;
  height: 20px;
  margin-top: -60px;
  margin-left: 250px;
  z-index: 1;
  color: white;
`;
const LogoutTouch = styled.TouchableOpacity`
  position: absolute;
`;
const Type = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #ffffff;
`;
const TitleView = styled.View`
  margin-top: 84px;
  margin-left: 28px;
`;
const Page = styled.View`
  height: 100%;
`;
const PlanteTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
`;
const BottomPage = styled.Image`
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 395px;
  margin-top: 100%;
`;
const DialogBox = styled.Image`
  position: absolute;
  width: 168px;
  height: 134px;
  margin-top: 200px;
  margin-left: 27px;
`;
const PlanteImage = styled.Image`
  position: absolute;
  width: 217px;
  height: 348px;
  margin-top: 0px;
  margin-left: 173px;
`;
const ProposTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  color: #000000;
  margin-left: auto;
  margin-right: auto;
  margin-top: 380px;
`;
const Propos = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #000000;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 322px;
  padding-bottom: 35px;
  padding-top: 20px;
`;
const Dialog = styled.Text`
  z-index: 2;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  color: #000000;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 140px;
  padding-top: 143px;
  padding-left: 10px;
`;
const NotifImage = styled.Image`
  position: absolute;
  margin-left: 300px;
  margin-top: -130px;
  height: 40px;
  width: 40px;
`;
