import React from 'react';
import { View } from 'react-native';
import { Dialog, IconButton } from 'react-native-paper';

import { Text, Subheading } from '../Typography';
import Loading from './Loading';
import { OutlineBtn, PrimaryBtn } from '../Buttons';
import CrossIcon from '../../svg/CrossIcon';

export default function Index(props) {
  return (
    <Dialog visible={props.visible} dismissable={false}>
      <Dialog.Content style={{ minHeight: 200 }}>
        <View style={{ position: `absolute`, flexDirection: `row`, right: 0 }}>
          <IconButton icon={() => <CrossIcon stroke="#000" width="30" height="30" />} />
        </View>
        <View style={{ marginTop: 0 }}>
          <Text>
            <Text small secondary style={{ letterSpacing: 0.5 }}>
              VIN:{' '}
            </Text>
            <Text bold style={{ letterSpacing: 1 }}>
              1231441432424423
            </Text>
          </Text>
        </View>
        <View>
          <Text>
            <Text small secondary style={{ letterSpacing: 0.5 }}>
              Vehicle Info:{' '}
            </Text>
            <Text bold style={{ letterSpacing: 1 }}>
              2012 Honda Civic
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
          <OutlineBtn contentStyle={{ height: 35 }} textStyle={{ fontSize: 14 }}>
            Vehicles List
          </OutlineBtn>
        </View>
      </Dialog.Content>
    </Dialog>
  );
}
