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
    Platform,
    ScrollView
} from 'react-native';

import {    
    Container,
    Content,
    Card,
    CardItem,
    Text,
    Body,
    Left,
    Icon,
    Grid,
    Row,
    Col
} from "native-base";

import { connect } from 'react-redux'

class ProjectLocationFooter extends Component<{}> {
    showHeader = false;
    constructor (props) {
        super(props);
    }
    render() {
        const {images} = this.props;
        const {
                logo, 
                addr, 
                launch, 
                land, 
                phase, 
                amenity,
                fbID,
                twID,
                igID,
                ytID,
                ytCH,
                microsite,
                email,
                comm
            } = this.props.selected_project;
        
        return (
            <View>
                <Card>
                    {(this.props.showHeader) &&
                        <CardItem  style={styles.headerStyle} header>
                            <Left>
                                <Body>
                                    <Image source={logo} style={{ height : 30, width :112 }} />
                                    <Text note>{addr}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    }
                    <CardItem  style={styles.bodyStyle} header>
                        <Body>
                            <Grid>
                                <Col>
                                    <Row>
                                        <Text style={styles.contentBodyStyle}>Launch Date : </Text>
                                    </Row>
                                    <Row>
                                            <Text style={styles.contentBodyStyle}>Land Area : </Text>
                                    </Row>
                                    <Row>
                                            <Text style={styles.contentBodyStyle}>Amenities : </Text>
                                    </Row>
                                    <Row>
                                            <Text style={styles.contentBodyStyle}>Phases/Enclaves : </Text>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Text style={styles.contentBodyStyle}>{launch}</Text>
                                    </Row>
                                    <Row>
                                        <Text style={styles.contentBodyStyle}>{land}</Text>
                                    </Row>
                                    <Row>
                                        <Text style={styles.contentBodyStyle}>{amenity}</Text>
                                    </Row>
                                    <Row>
                                        <Text style={styles.contentBodyStyle}>{phase}</Text>
                                    </Row>
                                </Col>
                            </Grid>
                        
                            <Grid style={{ marginTop : 10 }}>
                                <Row>
                                    <Text style={styles.contentBodyStyle}><Icon name="logo-facebook" style={{ color : '#000'  }} /> {fbID}</Text>
                                </Row>
                                <Row>
                                <Text style={styles.contentBodyStyle}><Icon name="logo-youtube" style={{ color : '#000'  }} /> {ytCH}</Text>
                                </Row>
                                <Row>
                                <Text style={styles.contentBodyStyle}><Icon name="logo-twitter" style={{ color : '#000'  }} /> {twID}</Text>
                                </Row>
                                <Row>
                                <Text style={styles.contentBodyStyle}><Icon name="md-globe" style={{ color : '#000'  }} /> {microsite}</Text>
                                </Row>
                                <Row>
                                <Text style={styles.contentBodyStyle}><Icon name="logo-instagram" style={{ color : '#000'  }} /> {igID}</Text>
                                </Row>
                                <Row>
                                <Text style={styles.contentBodyStyle}><Icon name={Platform.OS == 'ios' ? "ios-mail" : 'md-mail'} style={{ color : '#000'  }} /> {email}</Text>
                                </Row>
                            </Grid>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginBottom : 50,
        paddingBottom : 50,
        
    },
    headerStyle : {
        backgroundColor:'#fff'
        // backgroundColor:'#b7f5ff'
    },
    bodyStyle : {
        backgroundColor:'#fff',
        // backgroundColor:'#c5da66',
    },
    contentBodyStyle : {
        fontSize : 13
    } 
});

const mapStateToProps = (state) => {
    return {
        selected_project : state.selected_project
    };
}

export default connect(mapStateToProps)(ProjectLocationFooter);


