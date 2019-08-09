import React from 'react';
import { View } from 'react-native';

import { useTheme } from '../Theme';
import { Text } from '../Typography';

export default function index(props) {
  const { theme } = useTheme();
  const { style } = props;
  return (
    <View
      style={{
        backgroundColor: `${theme.colors.lightBackground}`,
        padding: 10,
        marginTop: 10,
        ...style
      }}>
      <Text small>{props.children}</Text>
    </View>
  );
}
