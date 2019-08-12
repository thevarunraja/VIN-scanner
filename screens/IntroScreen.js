import React from 'react';
import { View, ScrollView } from 'react-native';

import { Text } from '../components/Typography';
import { PrimaryBtn } from '../components/Buttons';
import Layout from '../components/Layout';
import SignInWithGoogle from '../components/SignInWithGoogle';
import { useAuthContext } from '../components/Auth';
import { app } from '../firebaseConfig';

//FIXME: Design and code a new layout for Signed in users and Signed out users.

export default function IntroScreen(props) {
  const { currentUser } = useAuthContext();

  return (
    <Layout>
      <ScrollView>
        <View style={{ marginTop: 20, flex: 1 }}>
          <Text bold style={{ fontSize: 46 }}>
            Hello {currentUser && currentUser.displayName},
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text>Use this App to decode the VIN's.</Text>
            <Text style={{ marginTop: 5 }}>
              To save your scans for future, use the below button to login.
            </Text>
            <View style={{ marginTop: 20 }}>
              {currentUser ? (
                <PrimaryBtn onPress={() => app.auth().signOut()}>Sign Out</PrimaryBtn>
              ) : (
                <SignInWithGoogle />
              )}
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
    </Layout>
  );
}

IntroScreen.navigationOptions = {
  header: null
};
