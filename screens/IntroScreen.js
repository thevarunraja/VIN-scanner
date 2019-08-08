import React from 'react';
import { View } from 'react-native';

import { Title } from '../components/Typography';
import { PrimaryBtn } from '../components/Buttons';

export default function IntroScreen(props) {
  return (
    <View style={{ marginTop: 20 }}>
      <Title>Welcome Screen</Title>
      <View style={{ marginTop: 40 }}>
        <PrimaryBtn onPress={() => props.navigation.navigate(`ScannerScreen`)}>
          Scan Barcode
        </PrimaryBtn>
      </View>
    </View>
  );
}

IntroScreen.navigationOptions = {
  header: null
};
