import React, {Component} from 'react';
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';

import { Card, CardItem, Body, Text, Thumbnail, Grid, Row, Col } from 'native-base';

import {connect} from 'react-redux';

import ImageView from 'react-native-image-view';
import Carousel from 'react-native-banner-carousel';
import PhotoView from '@merryjs/photo-viewer';
import PhotoGrid from 'react-native-photo-grid';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight =  300;


const {width} = Dimensions.get('window');


export default class GridGalleryRenderer extends Component<{}> {
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
            imageIndex : 0,
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
    renderPage = (image, index) => {
        return (
            <Card key={index}>
                <CardItem style={{ borderBottomColor : '#ddd', borderBottomWidth : 1, marginBottom : 3 }}>
                    <Body>
                        <Text>{image.title}</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <View style={styles.container}>
                        <TouchableHighlight  
                            onPress={() => { 
                                this.setState({
                                    currentImage : image,
                                    isImageViewVisible : true,
                                    imageIndex : index
                                });
                            }}>
                            <Image style={{ width: BannerWidth, height: BannerHeight, resizeMode : 'stretch' }} source={image.source} />
                        </TouchableHighlight>
                    </View>
                </CardItem>
            </Card>
        );
    }

    
    renderHeader() {
        return(
        <Text>I'm on top!</Text>
        );
    }

    renderItem = (item, itemSize) => {
        return(
        <Card key={item.id}>
            <CardItem  style={{ justifyContent : 'center' }}>
                <TouchableOpacity
                    onPress = { () => {
                        this.setState({
                            // currentImage : image,
                            isImageViewVisible : true,
                            imageIndex : item.id - 1
                        });
                    }}>
                    <Image
                    resizeMode = "stretch"
                    style = {{ flex: 1, width: 150, height: 150, alignSelf : 'center' }}
                    source = {item.source}
                    />
                </TouchableOpacity>
            </CardItem>
            { (item.title != null) &&
            <CardItem footer  style={{ justifyContent : 'center' }}>
                    <Text style={{ textAlign : 'center', fontSize : 13 }}>{item.title}</Text>
            </CardItem>}
        </Card>
        )
    }

    render() {
        const images = this.props.images;
        const {currentImage, isImageViewVisible, imageIndex} = this.state;
        return (
            <View >
            {/* <Carousel
                    autoplay={false}
                    autoplayTimeout={5000}
                    index={0}
                    pageSize={BannerWidth}
                    padder
                >
                    {images.map((image, index) => this.renderPage(image, index))}
            </Carousel> */}
            
            <PhotoGrid
                data = { images }
                itemsPerRow = { 2 }
                itemMargin = { 1 }
                // renderHeader = { this.renderHeader }
                renderItem = { this.renderItem }
            />
            <PhotoView
                visible={isImageViewVisible}
                data={images}
                hideStatusBar={true}
                initial={this.state.imageIndex}
                shareText={""}
                onDismiss={e => {
                    // don't forgot set state back.
                    this.setState({ isImageViewVisible: false });
                }}
            />
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
});
