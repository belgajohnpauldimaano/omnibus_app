
import React, { Component } from 'react';
import {
    StatusBar 
} from 'react-native';

import { Right, Button, Icon } from "native-base";

import CustomActionSheet from './../CustomActionSheet';

class RightNavButton extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <Right>
                <Button
                    transparent
                    onPress={() =>  CustomActionSheet(this.props)}>
                    <Icon name="more" style={{ color:"#000" }} />
                </Button>
            </Right>
        );
    }
}

export default RightNavButton;