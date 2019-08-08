import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import * as Font from 'expo-font';

import IntroScreen from './screens/IntroScreen';

const theme = {
  ...DefaultTheme,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff1744',
    accent: '#55618f',
    text: '#000',
    placeholder: `#55618f`,
    background: '#fff'
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: `OpenSans400`,
    medium: `OpenSansBold`
  }
};

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        OpenSans400: require(`./assets/fonts/OpenSans/OpenSans-Regular.ttf`),
        OpenSans600: require(`./assets/fonts/OpenSans/OpenSans-SemiBold.ttf`),
        OpenSansBold: require(`./assets/fonts/OpenSans/OpenSans-Bold.ttf`)
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>{fontLoaded && <IntroScreen />}</View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
