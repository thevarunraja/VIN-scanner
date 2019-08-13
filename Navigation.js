import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { IconButton } from 'react-native-paper';

import IntroScreen from './screens/IntroScreen';
import ScannerScreen from './screens/ScannerScreen';
import ListScreen from './screens/ListScreen';
import AccountScreen from './screens/AccountScreen';
import HomeIcon from './svg/HomeIcon';
import UserIcon from './svg/UserIcon';
import ListIcon from './svg/ListIcon';
import BarcodeIcon from './svg/BarCodeIcon';

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
      screen: ScannerScreen,
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
      screen: ListScreen,
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
