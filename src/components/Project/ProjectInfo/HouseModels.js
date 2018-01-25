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
            Text
        } from "native-base";
        

import HouseModelViewer from './../../Util/HouseModelViewer/HouseModelViewer';
import ProjectFooter from './ProjectFooter/ProjectFooter';

class HouseModels extends Component<{}> {
    constructor (props) {
        super(props);
        this.state = {
            house_models : []
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
        return <Text key={key}>{ahm.name}</Text>
    });
    return (
        <Container>
            <Content>
                <HouseModelViewer house_models={available_house_models} />
                <ProjectFooter showHeader={true} />
            </Content>
        </Container>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        house_models : state.house_models
    };
}

export default connect(mapStateToProps)(HouseModels);

