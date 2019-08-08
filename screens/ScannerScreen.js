import React from 'react';

import { Title } from '../components/Typography';
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
