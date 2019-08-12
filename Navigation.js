import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { IconButton } from 'react-native-paper';

import IntroScreen from './screens/IntroScreen';
import ScannerScreen from './screens/ScannerScreen';
import ListScreen from './screens/ListScreen';
import AccountScreen from './screens/AccountScreen';
import HomeIcon from './svg/Home';
import User from './svg/User';
import List from './svg/List';
import BarcodeIcon from './svg/BarCode';

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
          <IconButton icon={() => <List stroke={tabInfo.tintColor} width={26} height={26} />} />
        )
      }
    },
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: tabInfo => (
          <IconButton icon={() => <User stroke={tabInfo.tintColor} width={26} height={26} />} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: `#ff1744`,
      inactiveTintColor: `#333`,
      labelStyle: {
        fontFamily: `OpenSans400`,
        fontSize: 14
      },
      style: {
        backgroundColor: '#fff',
        borderTopColor: `#dcdcdc`,
        padding: 15,
        height: 60
      }
    }
  }
);

const AppContainer = createAppContainer(AppBottomNavigator);

export default AppContainer;
