/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StatusBar,
    ImageBackground,
    StyleSheet,
    ScrollView
} from 'react-native';

import {    Container, 
            Header, 
            Title, 
            Left, 
            Icon, 
            Right, 
            Button, 
            Body, 
            Content,
            Text, 
            Card, 
            CardItem, 
            ActionSheet, 
            Root,
            Tab, 
            Tabs, 
            TabHeading ,
            ScrollableTab
        } from "native-base";

import { connect } from 'react-redux'
        
import CustomActionSheet from './../Util/CustomActionSheet';
import RightNavButton from './../Util/RightNavButton/RightNavButton';

import About from './../About/About';
import ProjectOverview from './ProjectInfo/ProjectOverview';
import LocationMap from './ProjectInfo/LocationMap';
import SubdivisionMap from './ProjectInfo/SubdivisionMap';
import Amenities from './ProjectInfo/Amenities';
import HouseModels from './ProjectInfo/HouseModels';
import Gallery from './ProjectInfo/Gallery';


import HeaderContainer from './../Util/HeaderContainer/HeaderContainer';

class Project extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillUnmount() {
          ActionSheet.actionsheetInstance = null;
    }
    render() {
        return (
            <Root>
                    <ScrollView>
                        <HeaderContainer {...this.props} title={this.props.selected_project.sub_name} subtitle={this.props.selected_project.name} />
                        <ScrollView>
                            <Tabs renderTabBar={()=> <ScrollableTab />} tabBarPosition={'top'}  style={{ backgroundColor : '#fff' }}>
                                <Tab  heading={ <TabHeading style={styles.tabStyle}><Icon ios='ios-eye-outline' android="md-eye" style={styles.tabIconStyle} /><Text style={styles.tabTextStyle}>Project Over View</Text></TabHeading>}>
                                    {/* <Tab1 /> */}
                                    <ProjectOverview />
                                </Tab>
                                <Tab heading={ <TabHeading style={styles.tabStyle}><Icon ios='ios-pin-outline' android="md-pin" style={styles.tabIconStyle} /><Text style={styles.tabTextStyle}>Location Map</Text></TabHeading>}>
                                    <LocationMap />
                                </Tab>
                                <Tab heading={ <TabHeading style={styles.tabStyle}><Icon ios='ios-map-outline' android="md-map" style={styles.tabIconStyle} /><Text style={styles.tabTextStyle}>Subdivision Map</Text></TabHeading>}>
                                    <SubdivisionMap />
                                </Tab>
                                <Tab heading={ <TabHeading style={styles.tabStyle}><Icon ios='ios-list-box-outline' android="md-list" style={styles.tabIconStyle} /><Text style={styles.tabTextStyle}>Amenities</Text></TabHeading>}>
                                    <Amenities images={this.props.selected_project.amenities} />
                                </Tab>
                                <Tab heading={ <TabHeading style={styles.tabStyle}><Icon ios='ios-home-outline' android="md-home" style={styles.tabIconStyle} /><Text style={styles.tabTextStyle}>Model Homes</Text></TabHeading>}>
                                    <HouseModels  available_house_models={this.props.selected_project.available_house_models} />
                                </Tab>
                                <Tab heading={ <TabHeading style={styles.tabStyle}><Icon ios='ios-images' android="md-images" style={styles.tabIconStyle} /><Text style={styles.tabTextStyle}>Gallery</Text></TabHeading>}>
                                    <Gallery images={this.props.selected_project.galleries} />
                                </Tab>
                            </Tabs>
                        </ScrollView>
                    </ScrollView>
            </Root>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selected_project : state.selected_project
    };
}
export default connect (mapStateToProps)(Project);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabIconStyle : {
    fontSize: 20,
    color : '#000'
  },
  tabTextStyle : {
    fontSize: 12,
    color : '#000'
  },
  tabStyle : {
    backgroundColor : '#fff'
  }
});
