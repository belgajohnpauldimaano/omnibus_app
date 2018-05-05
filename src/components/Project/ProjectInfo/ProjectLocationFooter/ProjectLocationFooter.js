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
    renderLocationInfo = (infomations) => {
        // const {locations} = this.props.selected_project;

        return (
            infomations.map((location, index) => {
                if (location.desc == "") {
                    return;
                }
                return (    
                    <View key={index}>
                        <List>
                            <ListItem itemDivider style={{backgroundColor:location.bgColor}}>
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
        const infomations = [
            {
                title : 'Commute',
                desc  : commute,
                bgColor : '#4af6f9'
            },
            {
                title : 'Vehicle',
                desc  : vehicle,
                bgColor : '#75ce10'
            },
            {
                title : 'Major Roads',
                desc  : road,
                bgColor : '#f28f26'
            },
            {
                title : 'Transportation & Terminals',
                desc  : terminal + ' ' + transpo,
                bgColor : '#4af6f9'
            },
            {
                title : 'Landmarks',
                desc  : commute,
                bgColor : '#75ce10'
            },
            {
                title : 'Hospitals',
                desc  : hospital,
                bgColor : '#f28f26'
            },
            {
                title : 'Schools',
                desc  : school,
                bgColor : '#4af6f9'
            },
            {
                title : 'Places of Worship',
                desc  : church,
                bgColor : '#75ce10'
            },
            {
                title : 'Malls',
                desc  : mall,
                bgColor : '#f28f26'
            },
            {
                title : 'Supermarkets/WetMarkets',
                desc  : market,
                bgColor : '#4af6f9'
            },
            {
                title : 'Festival',
                desc  : festival,
                bgColor : '#75ce10'
            },
            {
                title : 'Others',
                desc  : others,
                bgColor : '#f28f26'
            },
        ];
        









        return (
            <View>
                {this.renderLocationInfo(infomations)}
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


