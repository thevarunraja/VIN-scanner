import React from 'react';
import { View, FlatList } from 'react-native';
import { Divider } from 'react-native-paper';

import Layout from '../components/Layout';
import { Title, Text } from '../components/Typography';
import { useAppStateContext } from '../components/AppState';
import RightChevronIcon from '../svg/RightChevronIcon';

export default function ListScreen() {
  const {
    state: { decodedVINS }
  } = useAppStateContext();

  return (
    <Layout>
      <View style={{ marginTop: 10 }}>
        <Title>Vehicles</Title>
        <Text secondary small>
          Click to view Vehicle Details.
        </Text>
        <Text secondary small style={{ marginBottom: 10 }}>
          Swipe Left on the Vehicle item to delete.
        </Text>
        <Divider />
      </View>
      <FlatList
        keyExtractor={item => item.VIN}
        data={decodedVINS}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={{ paddingTop: 10, paddingBottom: 15 }}>
                <View style={{ flexDirection: `row` }}>
                  <View style={{ width: `75%` }}>
                    <Text bold style={{ letterSpacing: 0.5 }}>
                      {item.year} {item.Make} {item.Model}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: `row`,
                      justifyContent: `center`,
                      alignItems: `flex-end`
                    }}>
                    <Text secondary small>
                      12/22/19
                    </Text>
                    <RightChevronIcon width={18} height={18} />
                  </View>
                </View>
                <Text secondary style={{ fontSize: 12, letterSpacing: 1, marginTop: 5 }}>
                  VIN:{' '}
                  <Text small bold style={{ letterSpacing: 1 }}>
                    {item.VIN}
                  </Text>
                </Text>
              </View>
              <Divider />
            </View>
          );
        }}
      />
    </Layout>
  );
}
