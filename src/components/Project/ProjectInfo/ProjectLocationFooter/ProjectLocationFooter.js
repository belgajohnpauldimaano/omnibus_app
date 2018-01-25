/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    View,
    Image,
    Platform,
    ScrollView
} from 'react-native';

import {    
    Text,
    Body,
    Left,
    Icon,
    Separator,
    ListItem,
    List
} from "native-base";

import { connect } from 'react-redux'

class ProjectLocationFooter extends Component<{}> {
    showHeader = false;
    constructor (props) {
        super(props);
    }
    renderLocationInfo = () => {
        const {locations} = this.props.selected_project;

        return (
            locations.map((location, index) => {
                if (location.desc == "") {
                    return;
                }
                return (    
                    <View key={index}>
                        <List>
                            <ListItem itemDivider style={{backgroundColor:'#dadada'}}>
                                <Text>{ location.title}</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={{ fontSize : 12 }}>{location.desc}</Text>
                            </ListItem>
                        </List>
                    </View>
                );
            })
        )
    }
    render() {
        const {images} = this.props;
        const {
                commute,
                vehicle,
                road,
                transpo,
                terminal,
                others,
                hospital,
                school,
                church,
                mall,
                market,
                festival,
                locations
            } = this.props.selected_project;
        return (
            <View>
                {this.renderLocationInfo()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginBottom : 50,
        paddingBottom : 50,
        
    },
    headerStyle : {
        backgroundColor:'#fff'
        // backgroundColor:'#b7f5ff'
    },
    bodyStyle : {
        backgroundColor:'#fff',
        // backgroundColor:'#c5da66',
    },
    contentBodyStyle : {
        fontSize : 13
    } 
});

const mapStateToProps = (state) => {
    return {
        selected_project : state.selected_project
    };
}

export default connect(mapStateToProps)(ProjectLocationFooter);


