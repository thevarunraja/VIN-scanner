import React from 'react';
import { View } from 'react-native';

import { Title } from '../components/Typography';
import { PrimaryBtn } from '../components/Buttons';
import Layout from '../components/Layout';

export default function IntroScreen(props) {
  return (
    <Layout>
      <Title>Welcome Screen</Title>
      <View style={{ marginTop: 30 }}>
        <PrimaryBtn onPress={() => props.navigation.navigate(`ScannerScreen`)}>
          Scan Barcode
        </PrimaryBtn>
      </View>
    </Layout>
  );
}

IntroScreen.navigationOptions = {
  header: null
};
