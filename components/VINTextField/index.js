import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { Subheading } from '../Typography';
import { PrimaryBtn } from '../Buttons';

export default function Index() {
  const [vinValue, setVinValue] = React.useState('');
  const [buttonWidth, setButtonWidth] = React.useState(10);

  const measureWidth = event => {
    setButtonWidth(event.nativeEvent.layout.width);
    console.log('width: ', event.nativeEvent.layout.width);
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        label="Enter VIN"
        value={vinValue}
        onChangeText={text => {
          setVinValue(text);
        }}
        style={{
          paddingRight: buttonWidth
        }}
      />
      <View
        style={{
          position: `absolute`,
          right: 0,
          justifyContent: `center`,
          alignItems: `center`,
          marginTop: 10,
          marginRight: 4
        }}
        onLayout={event => measureWidth(event)}>
        <PrimaryBtn height={50}>Decode</PrimaryBtn>
      </View>
    </View>
  );
}
