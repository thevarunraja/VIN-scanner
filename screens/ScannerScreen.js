import React from 'react';

import Scanner from '../components/Scanner';

export default function ScannerScreen(props) {
  return <Scanner navigation={props.navigation} />;
}

ScannerScreen.navigationOptions = {
  header: null
};
