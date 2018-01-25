import React, {Component} from 'react';
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';

import { Card, CardItem, Body, Text, Thumbnail, Button, Icon, Left, Right, H3 } from 'native-base';

import {connect} from 'react-redux';

import ImageView from 'react-native-image-view';
import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight =  300;


const {width} = Dimensions.get('window');


export default class HouseModelViewer extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            currentImage : {
                title : '',
                source : null,
                dimensions : {
                    width : 0,
                    height : 0
                }
            },
            isImageViewVisible : false
        }
    }
    renderFooter({title, source}) {
        return (
            <View style={styles.footer}>
                <Text style={styles.footerText}>{title}</Text>
            </View>
        );
    }
    renderPage = (house_model, index) => {
        return (
            <Card key={index}>
                <CardItem style={{ borderBottomColor : '#ddd', borderBottomWidth : 1, marginBottom : 3, flex: 0 }}>
                    <Left>
                        {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                        <Body>
                            <H3>{house_model.name}</H3>
                            <Text note>April 15, 2016</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    {/* <View style={styles.container}>
                        <TouchableHighlight  
                            onPress={() => { 
                                this.setState({
                                    currentImage : image,
                                    isImageViewVisible : true
                                });
                            }}>
                            <Image style={{ width: BannerWidth, height: BannerHeight, resizeMode : 'stretch' }} source={image.source} />
                        </TouchableHighlight>
                    </View> */}

                </CardItem>
                <CardItem>
                    <Left>
                        <Text style={styles.house_model_info}>Floor Area </Text>
                        <Body><Text style={styles.house_model_info}>{house_model.flrArea}</Text></Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text style={styles.house_model_info}>Lot Area </Text>
                        <Body><Text style={styles.house_model_info}>{house_model.lotArea}</Text></Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text style={styles.house_model_info}>Features </Text>
                        <Body><Text style={styles.house_model_info}>{house_model.features}</Text></Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Button  block rounded warning>
                            <Text style={{fontSize : 11}}>View Details</Text>
                        </Button>
                        <View style={{ margin : 3 }}></View>
                        <Button  block rounded success>
                            <Text style={{fontSize : 11}}>Sample Computation</Text>
                        </Button>
                    </Body>
                </CardItem>
            </Card>
        );
    }

    render() {
        const house_models = this.props.house_models;
        const {currentImage, isImageViewVisible} = this.state;
        return (
            <View>
            <Carousel
                    autoplay={false}
                    autoplayTimeout={5000}
                    index={0}
                    pageSize={BannerWidth - 19}
                    padder
                >
                    {house_models.map((house_model, index) => this.renderPage(house_model, index))}
            </Carousel>
        </View>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    footer: {
        width,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    footerButton: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    footerText: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center',
    },
    photo: {
      width: width,
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black'
    },
    house_model_info : {
        color : '#333',
        fontSize : 12
    }
});
