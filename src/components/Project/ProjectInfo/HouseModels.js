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
    ImageBackground
} from 'react-native';

import { connect } from 'react-redux';

import {    Container,
            Content,
            Text,
            Card, 
            CardItem,
            H1,
            Left,
            Body,
            Col,
            Row,
            Grid,
            Button,
            Icon
        } from "native-base";
        

import HouseModelViewer from './../../Util/HouseModelViewer/HouseModelViewer';
import ProjectFooter from './ProjectFooter/ProjectFooter';
import PhotoView from '@merryjs/photo-viewer';

class HouseModels extends Component<{}> {
    constructor (props) {
        super(props);
        this.state = {
            house_models : [],
            photoViewerImages : [],
            showPhotoViewer : false
        };
    }
  render() {
    const {house_models} = this.props;
    const available_house_models = this.props.available_house_models.map((ahm) => {
        return house_models.find((hm) => {
            if (hm.name == ahm)
            {
                return hm;
            }
        })
    });
    const house_model_display = available_house_models.map((ahm, key) => {
        
        return (
            <Card key={key}>
                <CardItem>
                    
                    <ImageBackground source={ahm.images[0].source} style={{ width:'100%', height : 200 }}>
                        <H1 style={{ color : '#252525', textShadowColor : '#e3e3e3', padding : 10, backgroundColor : 'rgba(0,0,0, 0.25)' }}>{ahm.name}</H1>
                    </ImageBackground>
                </CardItem>
                <CardItem >
                    <Grid>
                        <Row>
                            <Col><Text>Floor area : </Text></Col>
                            <Col><Text>{ahm.flrArea} sqm.</Text></Col>
                        </Row>
                        <Row>
                            <Col><Text>Lot area : </Text></Col>
                            <Col>
                                
                                    <Text>{ahm.lotAreaIU} sqm. (Inner)</Text>
                                    <Text>{ahm.lotAreaEU} sqm. (End)</Text>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col><Text>Feature : </Text></Col>
                            <Col><Text>{ahm.features.substring(0,20)}</Text></Col>
                        </Row>
                    </Grid>
                </CardItem>
                <CardItem >
                    <Row>
                        <Col>
                            <Button iconLeft full warning onPress={() => { 
                                this.setState({ showPhotoViewer : true}); 
                                this.setState({ photoViewerImages : ahm.images });
                            }}>
                                <Icon ios='ios-information-circle' android="md-information-circle" style={{ fontSize : 25 }} /><Text> View Details</Text>
                            </Button>
                        </Col>
                    </Row>
                </CardItem>
            </Card>
            
        );
    });
    return (
        <View>
            {/* <Content> */}
                {/* <HouseModelViewer house_models={available_house_models} /> */}
                {house_model_display}
                <ProjectFooter showHeader={true} />
                <PhotoView
                    visible={this.state.showPhotoViewer}
                    data={this.state.photoViewerImages}
                    hideStatusBar={true}
                    initial={0}
                    shareText={""}
                    onDismiss={e => {
                        // don't forgot set state back.
                        this.setState({ isImageViewVisible: false });
                    }}
                />
            {/* </Content> */}
        </View>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        house_models : state.house_models
    };
}

export default connect(mapStateToProps)(HouseModels);

