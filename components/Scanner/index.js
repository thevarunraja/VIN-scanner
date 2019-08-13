import React from 'react';
import { View } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

import EnterVINModal from './EnterVINModal';
import HelpModal from './HelpModal';
import Scan from './Scan';
import {
  TOGGLE_FLASH,
  SET_IS_SCANNING,
  SET_SHOW_HELP_MODAL,
  SET_HAS_CAMERA_PERMISSION,
  SET_SHOW_ENTER_VIN_MODAL
} from './actionTypes';

const initialState = {
  hasCameraPermission: false,
  cameraType: Camera.Constants.Type.back,
  toggleFlash: Camera.Constants.FlashMode.off,
  isScanning: true,
  showHelpModal: false,
  showEnterVINModal: false
};

function reducer(state = {}, { type, payload }) {
  switch (type) {
    case TOGGLE_FLASH:
      return {
        ...state,
        toggleFlash: payload
      };
    case SET_IS_SCANNING:
      return {
        ...state,
        isScanning: payload
      };
    case SET_HAS_CAMERA_PERMISSION:
      return {
        ...state,
        hasCameraPermission: payload
      };
    case SET_SHOW_HELP_MODAL:
      return {
        ...state,
        showHelpModal: payload
      };
    case SET_SHOW_ENTER_VIN_MODAL:
      return {
        ...state,
        showEnterVINModal: payload
      };
    default:
      return state;
  }
}

export default function Index(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { hasCameraPermission, showHelpModal, showEnterVINModal } = state;

  React.useEffect(() => {
    async function requestCameraAccess() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status === 'granted') {
        dispatch({
          type: SET_HAS_CAMERA_PERMISSION,
          payload: true
        });
      }
      //FIXME: Handle no permissions scenario
    }
    requestCameraAccess();
  }, []);

  const goBackToWelcomeScreen = () => {
    props.navigation.navigate(`IntroScreen`);
  };

  return (
    <View style={{ flex: 1 }}>
      <EnterVINModal dispatch={dispatch} showEnterVINModal={showEnterVINModal} />
      <HelpModal dispatch={dispatch} showHelpModal={showHelpModal} />
      {hasCameraPermission && (
        <Scan state={state} dispatch={dispatch} goBackToWelcomeScreen={goBackToWelcomeScreen} />
      )}
    </View>
  );
}
