import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { IconButton } from 'react-native-paper';
import { Grid, Col } from 'react-native-easy-grid';

import FlashIcon from '../../svg/FlashIcon';
import CrossIcon from '../../svg/CrossIcon';
import HelpIcon from '../../svg/HelpIcon';
import KeyboardIcon from '../../svg/KeyboardIcon';
import BarCodeIcon from '../../svg/BarCodeIcon';
import { Headline } from '../Typography';
import { TOGGLE_FLASH, SET_SHOW_HELP_MODAL, SET_SHOW_ENTER_VIN_MODAL } from './actionTypes';
import { useTheme } from '../Theme';

export default function Scan({ state, dispatch, goBackToWelcomeScreen }) {
  const { theme } = useTheme();
  const { cameraType, toggleFlash, isScanning } = state;

  return (
    <Camera
      style={{ flex: 1 }}
      type={cameraType}
      flashMode={toggleFlash}
      barCodeScannerSettings={{
        barCodeTypes: [
          BarCodeScanner.Constants.BarCodeType.code39,
          BarCodeScanner.Constants.BarCodeType.code138
        ]
      }}
      onBarCodeScanned={code => {
        if (isScanning) {
          alert(code.data);
          dispatch({
            type: 'SET_IS_SCANNING',
            payload: false
          });
        }
      }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, position: `relative` }}>
          <View style={styles.cameraTopBar}>
            <Grid>
              <Col style={{ width: `30%` }}>
                <IconButton
                  icon={() => <CrossIcon stroke="#fff" />}
                  onPress={goBackToWelcomeScreen}
                />
              </Col>
              <Col style={{ width: `70%`, alignItems: `flex-end` }}>
                <View style={{ flexDirection: `row` }}>
                  <IconButton
                    icon={() => <FlashIcon />}
                    onPress={() => {
                      if (toggleFlash === 0) {
                        dispatch({
                          type: TOGGLE_FLASH,
                          payload: Camera.Constants.FlashMode.torch
                        });
                      } else {
                        dispatch({
                          type: TOGGLE_FLASH,
                          payload: Camera.Constants.FlashMode.off
                        });
                      }
                    }}
                  />
                  <IconButton
                    icon={() => <KeyboardIcon width={30} height={30} />}
                    onPress={() => {
                      dispatch({
                        type: SET_SHOW_ENTER_VIN_MODAL,
                        payload: true
                      });
                    }}
                  />
                  <IconButton
                    icon={() => <HelpIcon stroke="#fff" />}
                    onPress={() => {
                      dispatch({
                        type: SET_SHOW_HELP_MODAL,
                        payload: true
                      });
                    }}
                  />
                </View>
              </Col>
            </Grid>
          </View>
        </View>
        <View
          style={{
            position: `absolute`,
            bottom: 0,
            height: 140,
            width: `100%`,
            backgroundColor: `${theme.colors.background}`
          }}>
          <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                padding: 15,
                alignItems: `center`,
                justifyContent: `center`
              }}>
              <BarCodeIcon stroke="#000" width={48} height={48} />
              <View
                style={{
                  borderWidth: 1,
                  borderColor: `${theme.colors.primary}`,
                  width: `60%`,
                  marginTop: 5
                }}
              />
              <Headline>Scan any VIN</Headline>
            </View>
          </SafeAreaView>
        </View>
      </SafeAreaView>
    </Camera>
  );
}

const styles = StyleSheet.create({
  cameraTopBar: {
    flexDirection: 'row',
    alignItems: `center`,
    height: 60,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: 'transparent'
  }
});
