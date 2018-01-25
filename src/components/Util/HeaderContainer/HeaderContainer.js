


        
import React, { Component } from 'react';
import {
    StatusBar 
} from 'react-native';

import { Body, Header, Title, Subtitle } from "native-base";

import RightNavButton from './../RightNavButton/RightNavButton';
import LeftNavButton from './../LeftNavButton/LeftNavButton';

class HeaderContainer extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
        <Header style={{ backgroundColor : '#fff'}}>
            <LeftNavButton {...this.props} />
                <Body>    
                    <Title style={{ color: '#444' }}>{ this.props.title }</Title>
                    <Subtitle style={{ color: '#888' }}>{this.props.subtitle}</Subtitle>
                </Body>
            <RightNavButton {...this.props} />
        </Header>
        );
    }
}

export default HeaderContainer;