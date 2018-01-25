
import React, { Component } from 'react';
import {
    StatusBar 
} from 'react-native';

import { Left, Button, Icon } from "native-base";

class LeftNavButton extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <Left>
                <Button
                    transparent
                    onPress={() => this.props.navigation.navigate("DrawerOpen")}
                    >
                        <Icon name="menu" 
                            style={{ color : '#000'  }} />
                </Button>
          </Left>
        );
    }
}

export default LeftNavButton;