import React from 'react';
import { View, SafeAreaView } from 'react-native';

import { useTheme } from '../components/Theme';
import TopBar from '../components/TopBar';
import { Text, Subheading } from '../components/Typography';

export default function HelpScreen(props) {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <TopBar title={'Help'} navigation={props.navigation} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: `${theme.colors.background}`, padding: 15 }}>
          <Subheading>Scanning Tips</Subheading>
          <View style={{ marginTop: 15 }}>
            <Text>1. Hold the Camera steady and try to center the code you're scanning</Text>
            <Text style={{ marginTop: 10 }}>
              2. Try turning on the flash if it's too dark to scan.
            </Text>
            <Text style={{ marginTop: 10 }}>
              3. You can also enter VIN number Manually and decode the Vehicle Information
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

HelpScreen.navigationOptions = {
  header: null
};
