import React from 'react';
import { View, ScrollView } from 'react-native';

import { Text } from '../components/Typography';
import { PrimaryBtn } from '../components/Buttons';
import Layout from '../components/Layout';
import SignInWithGoogle from '../components/SignInWithGoogle';
import DecodedDialog from '../components/DecodedDialog';

//FIXME: Design and code a new layout for Signed in users and Signed out users.

export default function IntroScreen(props) {
  return (
    <Layout>
      <ScrollView>
        <View style={{ marginTop: 20, flex: 1 }}>
          <Text bold style={{ fontSize: 46 }}>
            Hello,
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text>Use this App to decode the VIN's.</Text>
            <Text style={{ marginTop: 5 }}>
              To save your scans for future, use the below button to login.
            </Text>
            <View style={{ marginTop: 20 }}>
              <SignInWithGoogle />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text>Click on the below button to start Scanning.</Text>
            <PrimaryBtn
              style={{ width: 250, marginTop: 20 }}
              onPress={() => props.navigation.navigate(`ScannerScreen`)}>
              Scan VIN
            </PrimaryBtn>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text>
              If you have any questions, suggestions, feature requests, bug reports please feel free
              to contact me.
            </Text>
          </View>
        </View>
      </ScrollView>
      <DecodedDialog visible />
    </Layout>
  );
}

IntroScreen.navigationOptions = {
  header: null
};
