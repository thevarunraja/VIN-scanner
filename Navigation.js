import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { IconButton } from 'react-native-paper';

import IntroScreen from './screens/IntroScreen';
import ScannerScreen from './screens/ScannerScreen';
import ListScreen from './screens/ListScreen';
import AccountScreen from './screens/AccountScreen';
import EnterVINScreen from './screens/EnterVINScreen';
import HelpScreen from './screens/HelpScreen';
import VehicleInfoScreen from './screens/VehicleInfoScreen';
import HomeIcon from './svg/HomeIcon';
import UserIcon from './svg/UserIcon';
import ListIcon from './svg/ListIcon';
import BarcodeIcon from './svg/BarCodeIcon';

const ScannerScreenStackNavigator = createStackNavigator(
  {
    ScannerScreen: {
      screen: ScannerScreen
    },
    EnterVINScreen: {
      screen: EnterVINScreen
    },
    HelpScreen: {
      screen: HelpScreen
    }
  },
  {
    initialRouteName: `ScannerScreen`
  }
);

const ScannerScreenStackNavigatorContainer = createAppContainer(ScannerScreenStackNavigator);

const ListScreenStackNavigator = createStackNavigator({
  ListScreen: {
    screen: ListScreen
  },
  VehicleInfoScreen: {
    screen: VehicleInfoScreen
  }
});

const ListScreenStackNavigatorContainer = createAppContainer(ListScreenStackNavigator);

const AppBottomNavigator = createBottomTabNavigator(
  {
    IntroScreen: {
      screen: IntroScreen,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: tabInfo => (
          <IconButton icon={() => <HomeIcon stroke={tabInfo.tintColor} width={26} height={26} />} />
        )
      }
    },
    ScannerScreen: {
      screen: ScannerScreenStackNavigatorContainer,
      navigationOptions: {
        title: 'Scan',
        tabBarVisible: false,
        tabBarIcon: tabInfo => (
          <IconButton
            icon={() => <BarcodeIcon fill={tabInfo.tintColor} width={26} height={26} />}
          />
        )
      }
    },
    ListScreen: {
      screen: ListScreenStackNavigatorContainer,
      navigationOptions: {
        title: 'Scanned',
        tabBarIcon: tabInfo => (
          <IconButton icon={() => <ListIcon stroke={tabInfo.tintColor} width={26} height={26} />} />
        )
      }
    },
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: tabInfo => (
          <IconButton icon={() => <UserIcon stroke={tabInfo.tintColor} width={26} height={26} />} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: `#ff1744`,
      inactiveTintColor: `#55618f`,
      labelStyle: {
        fontFamily: `OpenSans400`,
        fontSize: 14
      },
      style: {
        backgroundColor: '#fff',
        borderTopColor: `#f1f1f1`,
        height: 75,
        padding: 15
      }
    }
  }
);

const AppContainer = createAppContainer(AppBottomNavigator);

export default AppContainer;
