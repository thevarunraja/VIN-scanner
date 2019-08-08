import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import * as Font from 'expo-font';

import { ThemeProvider } from './components/Theme';
import IntroScreen from './screens/IntroScreen';

const theme = {
  ...DefaultTheme,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff1744',
    accent: '#55618f',
    text: '#000',
    white: `#fff`,
    placeholder: `#55618f`,
    background: '#fff'
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: `OpenSans400`,
    medium: `OpenSansBold`,
    600: `OpenSans600`
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
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, paddingLeft: 15, paddingRight: 15 }}>
            {fontLoaded && <IntroScreen />}
          </View>
        </SafeAreaView>
      </ThemeProvider>
    </PaperProvider>
  );
}
