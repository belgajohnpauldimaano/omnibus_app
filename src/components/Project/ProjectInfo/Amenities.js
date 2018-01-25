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
        } from "native-base";
// import ImageViewer from './../../Util/ImageViewer/ImageViewer';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import GridGalleryRenderer from './../../Util/GridGalleryRenderer/GridGalleryRenderer';
class Amenities extends Component<{}> {
    constructor (props) {
        super(props);
        
    }
    // componentWillUnmount() {
    //       ActionSheet.actionsheetInstance = null;
    // }
  render() {
    const {images} = this.props;
    return (
        <Container>
            <Content>
                {/* <ImageViewer images={images} /> */}
                <GridGalleryRenderer images={images} />
                <ProjectFooter showHeader={true} />
            </Content>
        </Container>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        selected_project : state.selected_project
    };
}

export default connect(mapStateToProps)(Amenities);

