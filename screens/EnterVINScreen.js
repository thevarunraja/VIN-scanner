import React from 'react';
import { View, SafeAreaView } from 'react-native';

import { useTheme } from '../components/Theme';
import { Subheading } from '../components/Typography';
import VINTextField from '../components/VINTextField';
import TopBar from '../components/TopBar';
import { useAppStateContext } from '../components/AppState';
import DecodedDialog from '../components/DecodedDialog';

export default function EnterVIN(props) {
  const {
    state: { isFetchingVINData, fetchedVINData }
  } = useAppStateContext();
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <TopBar navigation={props.navigation} title={'Enter VIN'} />
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
