import { createAppContainer, createStackNavigator } from 'react-navigation';

import IntroScreen from './screens/IntroScreen';
import ScannerScreen from './screens/ScannerScreen';

const AppStackNavigator = createStackNavigator(
  {
    IntroScreen,
    ScannerScreen
  },
  {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0 // Set the animation duration time as 0 !!
      }
    })
  }
);

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
