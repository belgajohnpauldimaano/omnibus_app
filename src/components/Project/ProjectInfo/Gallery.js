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
    Image
} from 'react-native';

import { connect } from 'react-redux';


import {    Container,
            Content,
            ActionSheet
        } from "native-base";
        
// import ImageViewer from './../../Util/ImageViewer/ImageViewer';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import GridGalleryRenderer from './../../Util/GridGalleryRenderer/GridGalleryRenderer';

class Gallery extends Component<{}> {
    constructor (props) {
        super(props);
        
    }
    componentWillUnmount() {
          ActionSheet.actionsheetInstance = null;
    }
  render() {
    const {images} = this.props;
    return (
        <View>
            {/* <SubdivisionMapGallery /> */}
            {/* <ImageViewer images={images} /> */}
            <GridGalleryRenderer images={images} />
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

export default connect(mapStateToProps)(Gallery);

