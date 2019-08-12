import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import axios from 'axios';

import { PrimaryBtn } from '../Buttons';
import { Text } from '../Typography';
import HelperCard from '../HelperCard';

export default function Index() {
  const [vinValue, setVinValue] = React.useState('');
  const [buttonWidth, setButtonWidth] = React.useState(10);
  const measureWidth = event => {
    setButtonWidth(event.nativeEvent.layout.width);
  };

  const decodeVIN = async () => {
    try {
      const res = await axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vinValue.trim()}?format=json`
      );
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        label="Enter VIN"
        value={vinValue}
        onChangeText={text => {
          setVinValue(text.slice(0, 18).replace(/[^\w\s]/gi, ''));
        }}
        style={{
          paddingRight: buttonWidth
        }}
      />
      <HelperCard>
        VIN Number should contain
        <Text small bold primary>
          10-18 alpha numeric characters
        </Text>
        , no spaces or dashes.
      </HelperCard>
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
        <PrimaryBtn
          height={50}
          disabled={!(vinValue.length >= 10)}
          onPress={() => {
            decodeVIN();
          }}>
          Decode
        </PrimaryBtn>
      </View>
    </View>
  );
}
