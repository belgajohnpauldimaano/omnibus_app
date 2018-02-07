
import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground, Button } from "react-native";
import { Container, Content, Text, List, ListItem, View, Body, Icon, Right, Separator } from "native-base";
// import PixAccordion from 'react-native-pixfactory-accordion';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';


import { connect } from 'react-redux';

import {SelectProjectAction} from './../../../actions/index';

class SideMenuBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          activeSection: false,
          collapsed: true,
        };
    }
    
  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  _setSection = (section) => {
    this.setState({ activeSection: section });
  }

  _renderHeader = (section, i, isActive) => {
    return (
      <Animatable.View duration={400} transition="backgroundColor" style={{borderBottomColor : '#ddd', borderBottomWidth : 1, marginBottom : 5, paddingBottom : 8, paddingTop : 8}}>
        <Text style={{color: '#000', fontSize: 16, paddingLeft: '2%'}}>{section.title} <Icon style={{fontSize : 12, position: 'absolute', right:0}} name="arrow-dropdown" /></Text>
        {/* <Button title={'Click me'} onPress={() => {
            Linking.openURL('https://www.facebook.com/paulAgleb');
        }} /> */}
      </Animatable.View>
    );
  }

  _renderContent = (section, i, isActive) => {
    return (
      <Animatable.View duration={400} transition="backgroundColor"  >
        <List
            style={{ backgroundColor: "transparent"}}
            dataArray={section.projects}
            renderRow={data => {
              if (data.id == '') {
                return (
                  <ListItem style={{padding: -10, margin : -10}}>
                        <Text style={{ fontSize : 11, fontStyle : 'italic', fontWeight : 'bold', color: "#030303",padding: 0, margin : 0 }}>{data.name}</Text>
                  </ListItem>
                );
              }
              return (
                <ListItem
                    style={{ backgroundColor: "transparent", padding: -10, margin : -10}}
                    button
                    onPress={() => {
                        this.props.dispatch(SelectProjectAction(data));
                        this.props.navigation.navigate('Project')
                    }}
                    icon
                    >
                    <Body>
                      <Animatable.Text style={{color: '#000',paddingLeft : 30, paddingTop : 0}} animation={ isActive ? 'bounceIn' : undefined}>{data.name}</Animatable.Text>
                    </Body>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
              );
            }}
          />
      </Animatable.View>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('./../../../assets/images/bg.jpg')}
            style={{
              height: 180,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
              }}
            />
          </ImageBackground>

          
        <Accordion
          activeSection={this.state.activeSection}
          sections={this.props.projects}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          duration={400}
          onChange={this._setSection.bind(this)}
        />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        projects : state.projects
    };
}


export default connect(mapStateToProps)(SideMenuBar);