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
    Text
} from 'react-native';

import { connect } from 'react-redux';

import {    
    Container,
    Content,
} from "native-base";

import ProjectFooter from './ProjectFooter/ProjectFooter';
import ImageViewer from './../../Util/ImageViewer/ImageViewer';
import GridGalleryRenderer from './../../Util/GridGalleryRenderer/GridGalleryRenderer';


class SubdivisionMap extends Component<{}> {
    constructor (props) {
        super(props);
        
    }
  render() {
    const project = this.props.selected_project;
    return (
        <View>
                {/* <ImageViewer images={this.props.selected_project.location_map} /> */}
                <GridGalleryRenderer images={this.props.selected_project.subdivision_map} />
                <ProjectFooter showHeader={true} />
        </View>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        selected_project : state.selected_project
    };
}

export default connect(mapStateToProps)(SubdivisionMap);

