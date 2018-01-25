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
} from 'react-native';

import { DeckSwiper, Thumbnail, Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, ActionSheet, Card, CardItem, Root } from "native-base";

import HeaderContainer from './../Util/HeaderContainer/HeaderContainer';

export default class About extends Component<{}> {
    componentWillUnmount() {
          ActionSheet.actionsheetInstance = null;
    }
  render() {
    return (
    <Root>
        <Container>
          <StatusBar
            hidden={true}
          />
            <HeaderContainer {...this.props} title={'About'} subtitle={''} />
            <Content padder>
            </Content>
        </Container>
    </Root>
    );
  }
}

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
