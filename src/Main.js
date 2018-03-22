/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import { DrawerNavigator } from "react-navigation";

import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import BuyersGuide from './components/BuyersGuide/BuyersGuide';
import SideMenuBar from './components/Util/SideMenuBar/SideMenuBar';

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: Home },
    About: { screen: About },
    Project: { screen: Project },
    BuyersGuide : { screen: BuyersGuide },
  },
  {
    contentComponent: props => <SideMenuBar {...props} />,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
);
export default HomeScreenRouter;