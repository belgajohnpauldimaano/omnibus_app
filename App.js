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
View,
ImageBackground,
StatusBar
} from 'react-native';


import { DrawerNavigator, StackNavigator } from "react-navigation";

import Home from './src/components/Home/Home';
import About from './src/components/About/About';
import Project from './src/components/Project/Project';

import SubdivisionMapGallery from './src/components/Project/ProjectInfo/SubdivisionMapGallery';

import { Provider } from 'react-redux';
import configureStore from './src/store';

import SideMenuBar from './src/components/Util/SideMenuBar/SideMenuBar';

const StackNavigatorConfig = StackNavigator({
    SubdivisionMapGallery : { screen : SubdivisionMapGallery}
});

const DrawerConfig = DrawerNavigator(
{
    Home: { screen: Home },
    About: { screen: About },
    Project: { screen: Project },
    SubdivisionMap: { screen: StackNavigatorConfig },
},
{
    contentComponent: props => <SideMenuBar {...props} />,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
}
);

class App extends Component {
    componentDidMount() {
        StatusBar.setHidden(true);
     }
render () {
    return (
    <Provider store={configureStore()}>
        {/* <ImageBackground
            style={{ width : '100%', height : '100%' }}
            source={require('./src/assets/images/intro-0.jpg')}
            > */}
            <DrawerConfig />
        {/* </ImageBackground> */}
    </Provider>
    );
}
}

export default App;