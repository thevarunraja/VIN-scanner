import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { IconButton } from 'react-native-paper';

import { useTheme } from '../Theme';
import ArrowLeftIcon from '../../svg/ArrowLeftIcon';
import { Title } from '../Typography';

export default function index({ title, navigation }) {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={{
        justifyContent: `center`,
        alignContent: 'center',
        backgroundColor: `${theme.colors.primary}`
      }}>
      <View
        style={{
          flexDirection: `row`,
          height: 60,
          justifyContent: `center`,
          alignContent: 'center',
          paddingLeft: 5
        }}>
        <View
          style={{
            position: `absolute`,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center'
          }}>
          <IconButton
            icon={() => <ArrowLeftIcon stroke="#fff" width="30" height="30" />}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={{ justifyContent: `center`, alignContent: 'center' }}>
          <Title style={{ color: `${theme.colors.white}` }}>{title}</Title>
        </View>
      </View>
    </SafeAreaView>
  );
}
