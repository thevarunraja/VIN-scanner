import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { IconButton } from 'react-native-paper';
import Modal from 'react-native-modal';

import { useTheme } from '../Theme';
import ArrowLeft from '../../svg/ArrowLeft';
import { Text, Title, Subheading } from '../Typography';
import { SET_SHOW_HELP_MODAL } from './actionTypes';

export default function HelpModal({ dispatch, showHelpModal }) {
  const { theme } = useTheme();
  return (
    <Modal
      style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      isVisible={showHelpModal}
      animationIn="slideInRight"
      animationOut="slideOutRight">
      <SafeAreaView style={{ flex: 1, backgroundColor: `${theme.colors.primary}` }}>
        <View style={{ height: 60, justifyContent: `center`, paddingLeft: 5 }}>
          <View style={{ flexDirection: `row`, justifyContent: `center` }}>
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
                icon={() => <ArrowLeft stroke="#fff" width="30" height="30" />}
                onPress={() =>
                  dispatch({
                    type: SET_SHOW_HELP_MODAL,
                    payload: false
                  })
                }
              />
            </View>
            <View>
              <Title style={{ color: `#fff` }}>Scanner Help</Title>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: `#fff`, padding: 15 }}>
          <Subheading>Scanning Tips</Subheading>
          <View style={{ marginTop: 15 }}>
            <Text>1. Hold the Camera steady and try to center the code you're scanning</Text>
            <Text style={{ marginTop: 10 }}>
              2. Try turning on the flash if it's too dark to scan.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
