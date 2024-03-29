import React from 'react';
import { View } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

import Scan from './Scan';
import {
  TOGGLE_FLASH,
  SET_IS_SCANNING,
  SET_SHOW_HELP_MODAL,
  SET_HAS_CAMERA_PERMISSION
} from './actionTypes';

const initialState = {
  hasCameraPermission: false,
  cameraType: Camera.Constants.Type.back,
  toggleFlash: Camera.Constants.FlashMode.off,
  isScanning: true,
  showHelpModal: false
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
    default:
      return state;
  }
}

export default function Index(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { hasCameraPermission } = state;

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

  const goToEnterVINScreen = () => {
    props.navigation.navigate(`EnterVINScreen`);
  };

  const goToHelpScreen = () => {
    props.navigation.navigate(`HelpScreen`);
  };

  return (
    <View style={{ flex: 1 }}>
      {hasCameraPermission && (
        <Scan
          state={state}
          dispatch={dispatch}
          goBackToWelcomeScreen={goBackToWelcomeScreen}
          goToEnterVINScreen={goToEnterVINScreen}
          goToHelpScreen={goToHelpScreen}
        />
      )}
    </View>
  );
}
