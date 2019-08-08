import React from 'react';
import { View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import { BackButton } from '../Buttons';

Layout.propTypes = {
  backButtonScreenName: PropTypes.string,
  navigation: PropTypes.object
};
export default function Layout(props) {
  const { style, backButtonScreenName } = props;
  return (
    <React.Fragment>
      {backButtonScreenName ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <BackButton onPress={() => props.navigation.navigate(backButtonScreenName)} />
            <View style={{ flex: 1, paddingLeft: 15, paddingRight: 15, ...style }}>
              {props.children}
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, paddingLeft: 15, paddingRight: 15, marginTop: 10, ...style }}>
            {props.children}
          </View>
        </SafeAreaView>
      )}
    </React.Fragment>
  );
}
