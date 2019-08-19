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

  const navigateAction = NavigationActions.navigate({
    routeName: 'ListScreen',
    action: NavigationActions.navigate(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'ScannerScreen' })]
      })
    )
  });

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
          props.navigation.dispatch(navigateAction);
        }}
      />
    </View>
  );
}

EnterVIN.navigationOptions = {
  header: null
};
