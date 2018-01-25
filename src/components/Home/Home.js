/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StatusBar,Image,
    ImageBackground
} from 'react-native';

import {H3, View,Footer, Grid, Col, Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, ActionSheet, CardItem, Root } from "native-base";

import { connect } from 'react-redux';

import HeaderContainer from './../Util/HeaderContainer/HeaderContainer';


class Home extends Component<{}> {
  componentWillUnmount() {
        ActionSheet.actionsheetInstance = null;
  }
  render() {
    return (
        <Root>
        <Container>
            <HeaderContainer {...this.props} title={"Camella North"} subtitle={''} />
        <Content>
            <ImageBackground source={require('./../../assets/images/bg.jpg')} style={{ width:'100%', height : 400 }}>
                <Image source={require('./../../assets/images/fg.png')}  style={{ width:'100%', marginTop : '5%', height : '100%', resizeMode : 'contain' }}></Image>
            </ImageBackground>
            <Card padder>
                    <CardItem style={{ backgroundColor:'#b7f5ff' }}>
                        <Left>
                            <Text style={{ fontSize : 16, textAlign : 'center' }}>
                                Camella North Luzon Poised and In Position
                            </Text>
                        </Left>
                    </CardItem>
                    <CardItem style={{ backgroundColor:'#c5da66' }}>
                        <Body>
                            <Text style={{ fontSize : 12, textAlign : 'justify' }}>
                                Pioneering the trek, mapping communities across regions. Camella master-planned communities were built to raise its residents' lifestyle to a level beyond expectations, while making living easily convenient.
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{ backgroundColor:'#fff' }} footer>
                        <Left>
                            <Body>
                                <Image source={require('./../../assets/images/logo.png')} style={{ height : 50, width :200, alignSelf : 'center' }} />
                                <Text style={{alignSelf : 'center' }}><H3>www.camellanorth.com</H3></Text>
                            </Body>
                        </Left>
                    </CardItem>
                </Card>
        </Content>
      </Container>
      </Root>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sample_data : state.sample_data,
    house_models : state.house_models
  };
}

export default connect(mapStateToProps)(Home);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });
