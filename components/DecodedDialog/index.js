import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Dialog, IconButton } from 'react-native-paper';

import { Text } from '../Typography';
import Loading from './Loading';
import { OutlineBtn } from '../Buttons';
import CrossIcon from '../../svg/CrossIcon';
import { useAppStateContext } from '../AppState';

export default function Index(props) {
  const {
    state: { isFetchingVINData, fetchedVINData, showDecodedDialog },
    toggleDecodedDialog
  } = useAppStateContext();
  console.log(fetchedVINData);

  return (
    <Dialog visible={showDecodedDialog} dismissable={false}>
      <Dialog.Content style={{ minHeight: 250 }}>
        {isFetchingVINData ? (
          <Loading />
        ) : (
          fetchedVINData && (
            <Fragment>
              <View style={{ position: `absolute`, flexDirection: `row`, right: 0 }}>
                <IconButton
                  icon={() => <CrossIcon stroke="#000" width="30" height="30" />}
                  onPress={() => toggleDecodedDialog(false)}
                />
              </View>
              <View style={{ marginTop: 0 }}>
                <Text primary bold>
                  Decoded Successfully.
                </Text>
                <Text style={{ marginTop: 10 }}>
                  <Text small secondary style={{ letterSpacing: 0.5 }}>
                    VIN:{' '}
                  </Text>
                  <Text bold style={{ letterSpacing: 1 }}>
                    {fetchedVINData.VIN}
                  </Text>
                </Text>
              </View>
              <View>
                <Text>
                  <Text small secondary style={{ letterSpacing: 0.5 }}>
                    Vehicle Info:{' '}
                  </Text>
                  <Text bold style={{ letterSpacing: 1 }}>
                    {`${fetchedVINData.ModelYear} ${fetchedVINData.Make} ${fetchedVINData.Model}`}
                  </Text>
                </Text>
                <Text small secondary style={{ marginTop: 10 }}>
                  To{' '}
                  <Text small secondary bold>
                    View more info
                  </Text>{' '}
                  about the Vehicle, click on the More Info button below.
                </Text>
                <Text small secondary style={{ marginTop: 10 }}>
                  To{' '}
                  <Text small secondary bold>
                    Decode Another VIN
                  </Text>{' '}
                  simply close this Dialog.
                </Text>
              </View>
              <View style={{ marginTop: 20, flexDirection: `row`, justifyContent: 'space-evenly' }}>
                <OutlineBtn contentStyle={{ height: 35 }} textStyle={{ fontSize: 14 }}>
                  More Info
                </OutlineBtn>
                <OutlineBtn
                  contentStyle={{ height: 35 }}
                  textStyle={{ fontSize: 14 }}
                  onPress={() => {
                    toggleDecodedDialog(false);
                    props.navigateToHome();
                  }}>
                  Vehicles List
                </OutlineBtn>
              </View>
            </Fragment>
          )
        )}
      </Dialog.Content>
    </Dialog>
  );
}
