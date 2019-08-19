import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

import { useTheme } from '../components/Theme';
import { Subheading } from '../components/Typography';
import VINTextField from '../components/VINTextField';
import TopBar from '../components/TopBar';
import DecodedDialog from '../components/DecodedDialog';

export default function EnterVIN(props) {
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
      <DecodedDialog
        navigateToHome={() => {
          const navigateAction = NavigationActions.navigate({
            routeName: 'ListScreen'
          });
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'ScannerScreen' })]
          });
          props.navigation.dispatch(resetAction);
          props.navigation.dispatch(navigateAction);
        }}
      />
    </View>
  );
}

EnterVIN.navigationOptions = {
  header: null
};
