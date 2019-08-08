import React from 'react';
import { View } from 'react-native';

import { Title } from '../components/Typography';
import { BackButton } from '../components/Buttons';
import Layout from '../components/Layout';

export default function ScannerScreen(props) {
  return (
    <Layout backButtonScreenName="IntroScreen" navigation={props.navigation}>
      <Title>Scanner Screen</Title>
    </Layout>
  );
}

ScannerScreen.navigationOptions = {
  header: null
};
