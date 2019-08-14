import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';

import { Text } from '../Typography';

export default function Loading() {
  return (
    <View>
      <View style={{ flexDirection: `row` }}>
        <View style={{ width: 40 }}>
          <ActivityIndicator animating />
        </View>
        <Text>Fetching Vehicle details...</Text>
      </View>
      <Placeholder Animation={Fade} style={{ marginTop: 20 }}>
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>
    </View>
  );
}
