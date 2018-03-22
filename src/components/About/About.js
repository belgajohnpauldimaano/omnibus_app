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
    ImageBackground,
    Dimensions
} from 'react-native';




import { DeckSwiper, Thumbnail, Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, ActionSheet, Card, CardItem, Root, H1 } from "native-base";
import HeaderContainer from './../Util/HeaderContainer/HeaderContainer';
import ImageViewer from './../Util/ImageViewer/ImageViewer';
const deviceHeight = Dimensions.get('window').height;

export default class About extends Component<{}> {
    componentWillUnmount() {
          ActionSheet.actionsheetInstance = null;
    }
  render() {
    return (
    <Root>
        <Container>
          {/* <StatusBar
            hidden={true}
          /> */}
            <HeaderContainer {...this.props} title={'About'} subtitle={''} />
            <Content padder>
                {/* <ImageBackground style={{ width:'100%', height : deviceHeight}}>
                  <Image source={require('./../../assets/images/about/5-point-advantage.jpg')}  style={{ width:'100%', marginTop : 0, height : '100%', resizeMode : 'contain' }}></Image>
                </ImageBackground> */}
                <Card>
                      <View style={{ width:'100%', marginTop : 0, height : '100%' }}>
                        <ImageViewer images={[
                          { source : require('./../../assets/images/about/camella-north.jpg'), width : 800, height : 600 }
                        ]} />
                      </View>
                </Card>
                <Card>
                      <View style={{ width:'100%', marginTop : 0, height : '100%' }}>
                        <ImageViewer images={[
                          { source : require('./../../assets/images/about/5-point-advantage.jpg'), width : 800, height : 600 }
                        ]} />
                      </View>
                </Card>
            </Content>
        </Container>
    </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
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
