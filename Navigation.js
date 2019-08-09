import { createAppContainer, createStackNavigator } from 'react-navigation';

import IntroScreen from './screens/IntroScreen';
import ScannerScreen from './screens/ScannerScreen';

const AppStackNavigator = createStackNavigator(
  {
    IntroScreen,
    ScannerScreen
  },
  {
    cardShadowEnabled: false
  }
);

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
