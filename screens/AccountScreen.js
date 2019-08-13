import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';

import Layout from '../components/Layout';
import { Title, Text } from '../components/Typography';
import SignInWithGoogle from '../components/SignInWithGoogle';

export default function AccountScreen() {
  return (
    <Layout>
      <View style={{ marginTop: 10 }}>
        <Title>Sign In</Title>
        <Text style={{ marginBottom: 15 }}>Sign In to save your Vehicle Data.</Text>
        <Divider />
      </View>
      <View style={{ marginTop: 20, height: 60, justifyContent: `center`, alignItems: `center` }}>
        <SignInWithGoogle />
      </View>
    </Layout>
  );
}
