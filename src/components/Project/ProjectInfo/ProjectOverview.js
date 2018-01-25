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
    TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';

import {
    Container,
    Header,
    Title,
    Left,
    Icon,
    Right,
    Button,
    Body,
    Content,
    Text,
    ActionSheet,
    Card,
    CardItem,
    Root,
    Thumbnail
} from "native-base";


import PhotoView from '@merryjs/photo-viewer';
import ProjectFooter from './ProjectFooter/ProjectFooter';

class ProjectOverview extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            isImageViewVisible : false
        };
    }
    
    render() {
        const project = this.props.selected_project;
        return (
                <Root>
                    <TouchableHighlight onPress={ () => {
                        this.setState({isImageViewVisible : true});
                    }}>
                        <Image
                            style={{ width : '100%', height : 300, resizeMode : 'cover' }}
                            source={project.overviewImg}
                            />
                    </TouchableHighlight>
                    <Card padder>
                        <CardItem style={{ backgroundColor:'#b7f5ff' }}>
                            <Left>
                                <Body>
                                    <Image source={project.logo} style={{ height : 30, width :112 }} />
                                    <Text note>{project.addr}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={{ backgroundColor:'#c5da66' }}>
                            <Body>
                                <Text style={{ fontSize : 13 }}>
                                    {project.description}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <ProjectFooter showHeader={false} />
                    
                    <PhotoView
                        visible={this.state.isImageViewVisible}
                        data={[{
                            source : project.overviewImg,
                            title  : project.addr
                        }]}
                        hideStatusBar={true}
                        initial={1}
                        shareText={""}
                        onDismiss={e => {
                            // don't forgot set state back.
                            this.setState({ isImageViewVisible: false });
                        }}
                    />
                </Root>
            );
    }
}
const mapStateToProps = (state) => {
    return {
        selected_project : state.selected_project
    };
}

export default connect(mapStateToProps)(ProjectOverview);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  menuButton : {
    // flex: 1,
  },
  box1: {
    zIndex : 9999,
    position: 'absolute',
    top: 1,
    left: 1,
    width: 100,
    height: 100,
    // backgroundColor: 'red'
  },
  menuIcon : {
    zIndex : 9999,
    width: 100,
    height: 100,
  }
});
