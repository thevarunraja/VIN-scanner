import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { IconButton } from 'react-native-paper';

import { useTheme } from '../components/Theme';
import { Title, Subheading } from '../components/Typography';
import VINTextField from '../components/VINTextField';
import { useAppStateContext } from '../components/AppState';
import DecodedDialog from '../components/DecodedDialog';
import ArrowLeftIcon from '../svg/ArrowLeftIcon';

export default function EnterVIN(props) {
  const {
    state: { isFetchingVINData, fetchedVINData }
  } = useAppStateContext();
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          justifyContent: `center`,
          alignContent: 'center',
          backgroundColor: `${theme.colors.primary}`
        }}>
        <View
          style={{
            flexDirection: `row`,
            height: 60,
            justifyContent: `center`,
            alignContent: 'center',
            paddingLeft: 5
          }}>
          <View
            style={{
              position: `absolute`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center'
            }}>
            <IconButton
              icon={() => <ArrowLeftIcon stroke="#fff" width="30" height="30" />}
              onPress={() => {
                props.navigation.navigate(`ScannerScreen`);
              }}
            />
          </View>
          <View style={{ justifyContent: `center`, alignContent: 'center' }}>
            <Title style={{ color: `${theme.colors.white}` }}>Enter VIN</Title>
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: `${theme.colors.background}`, padding: 15 }}>
          <Subheading>Enter VIN Manually.</Subheading>
          <View style={{ marginTop: 20 }}>
            <VINTextField />
          </View>
        </View>
      </SafeAreaView>
      <DecodedDialog visible={isFetchingVINData || fetchedVINData} onClose={() => {}} />
    </View>
  );
}

EnterVIN.navigationOptions = {
  header: null
};
