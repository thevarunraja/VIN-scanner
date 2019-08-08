import React from 'react';
import { View } from 'react-native';

import { Title } from '../components/Typography';

export default function ScannerScreen() {
  return (
    <View style={{ marginTop: 20 }}>
      <Title>Scanner Screen</Title>
    </View>
  );
}

ScannerScreen.navigationOptions = {
  header: null
};
