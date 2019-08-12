import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { IconButton } from 'react-native-paper';
import Modal from 'react-native-modal';

import { useTheme } from '../Theme';
import ArrowLeft from '../../svg/ArrowLeft';
import { Title, Subheading } from '../Typography';
import VINTextField from '../VINTextField';
import { SET_SHOW_ENTER_VIN_MODAL } from './actionTypes';

//FIXME: Pull the modal header component into a separate component.

export default function EnterVINModal({ dispatch, showEnterVINModal }) {
  const { theme } = useTheme();
  return (
    <Modal
      style={{ flex: 1, backgroundColor: `${theme.colors.background}`, margin: 0 }}
      isVisible={showEnterVINModal}
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
                    type: SET_SHOW_ENTER_VIN_MODAL,
                    payload: false
                  })
                }
              />
            </View>
            <View>
              <Title style={{ color: `${theme.colors.white}` }}>Enter VIN</Title>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: `${theme.colors.background}`, padding: 15 }}>
          <Subheading>Enter VIN Manually.</Subheading>
          <View style={{ marginTop: 20 }}>
            <VINTextField />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
