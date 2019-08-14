import React from 'react';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const AppStateContext = React.createContext();

const SET_DECODED_VINS = 'SET_DECODED_VINS';
const SET_DECODING_ERROR = 'SET_DECODING_ERROR';
const SET_ERROR_FETCHING_VIN_DATA = 'SET_ERROR_FETCHING_VIN_DATA';
const SET_IS_FETCHING_VIN_DATA = 'SET_IS_FETCHING_VIN_DATA';
const SET_FETCHED_VIN_DATA = 'SET_FETCHED_VIN_DATA';

const initialState = {
  decodedVINS: [], //Contains all the decoded VIN's
  decodingError: '',
  errrFetchingVINData: '',
  isFetchingVINData: false,
  fetchedVINData: null
};

function reducer(state = {}, { type, payload }) {
  switch (type) {
    case SET_DECODED_VINS:
      return {
        ...state,
        decodedVINS: payload
      };
    case SET_DECODING_ERROR:
      return {
        ...state,
        decodingError: payload
      };
    case SET_ERROR_FETCHING_VIN_DATA:
      return {
        ...state,
        errrFetchingVINData: payload
      };
    case SET_IS_FETCHING_VIN_DATA:
      return {
        ...state,
        isFetchingVINData: payload
      };
    case SET_FETCHED_VIN_DATA:
      return {
        ...state,
        fetchedVINData: payload
      };
    default:
      return state;
  }
}

function AppStateProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { decodedVINS } = state;

  React.useEffect(() => {
    _retrieveData();
  }, []);

  React.useEffect(() => {
    _storeData(decodedVINS);
  }, [decodedVINS]);

  const _storeData = async obj => {
    try {
      await AsyncStorage.setItem('DECODED_VINS', JSON.stringify(obj));
    } catch (error) {
      console.log(error);
    }
  };

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('DECODED_VINS');
      if (value !== null) {
        dispatch({
          type: SET_DECODED_VINS,
          payload: JSON.parse(value)
        });
        console.log(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearErrorMessages = () => {
    dispatch({
      type: SET_DECODING_ERROR,
      payload: ''
    });
    dispatch({
      type: SET_ERROR_FETCHING_VIN_DATA,
      payload: ''
    });
  };

  const deleteVIN = vinNumber => {
    const updatedVINSObj = decodedVINS.filter(x => x.VIN !== vinNumber);
    console.log(`upd`);
    console.log(updatedVINSObj);
    dispatch({
      type: SET_DECODED_VINS,
      payload: updatedVINSObj
    });
  };

  const storeDecodedVIN = vinObj => {
    //Check if VIN exists
    const checkVIN = obj => obj.VIN === vinObj.VIN;
    if (decodedVINS.some(checkVIN)) {
      const updatedVINSObj = decodedVINS.map(d => {
        if (d.VIN === vinObj.VIN) {
          return {
            ...vinObj,
            VIN: vinObj.VIN,
            timeStamp: Date.now()
          };
        } else {
          return d;
        }
      });
      dispatch({
        type: SET_DECODED_VINS,
        payload: updatedVINSObj
      });
    } else {
      dispatch({
        type: SET_DECODED_VINS,
        payload: [...decodedVINS, vinObj]
      });
    }
  };

  const decodeVIN = async vin => {
    try {
      dispatch({
        type: SET_IS_FETCHING_VIN_DATA,
        payload: true
      });
      dispatch({
        type: SET_FETCHED_VIN_DATA,
        payload: null
      });
      const res = await axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin.trim()}?format=json`
      );
      dispatch({
        type: SET_IS_FETCHING_VIN_DATA,
        payload: false
      });
      if (res.data.Results[0].ErrorCode !== '0') {
        dispatch({
          type: SET_DECODING_ERROR,
          payload: res.data.Results[0].ErrorText
        });
      } else {
        clearErrorMessages();
        dispatch({
          type: SET_FETCHED_VIN_DATA,
          payload: res.data.Results[0]
        });
        storeDecodedVIN({
          VIN: res.data.Results[0].VIN,
          timeStamp: Date.now(),
          year: res.data.Results[0].ModelYear,
          Make: res.data.Results[0].Make,
          Model: res.data.Results[0].Model
        });
      }
    } catch (e) {
      dispatch({
        type: SET_ERROR_FETCHING_VIN_DATA,
        payload: `Error fetching VIN Data. Please try again.`
      });
    }
  };

  return (
    <AppStateContext.Provider value={{ state, decodeVIN, clearErrorMessages, deleteVIN }}>
      {props.children}
    </AppStateContext.Provider>
  );
}

const useAppStateContext = () => React.useContext(AppStateContext);

export { AppStateContext, AppStateProvider, useAppStateContext };
