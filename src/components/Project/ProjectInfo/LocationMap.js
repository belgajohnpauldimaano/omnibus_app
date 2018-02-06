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
    Dimensions,
    TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';


const BannerWidth = Dimensions.get('window').width;
const BannerHeight =  300;


const {width} = Dimensions.get('window');

import { Container,
        Header,
        Title,
        Left,
        Icon,
        Right,
        Button,
        Body,
        Content,
        Text,
        ActionSheet,
        Card,
        CardItem,
        Root,
        Thumbnail,
        DeckSwiper,
         } from "native-base";
import ProjectFooter from './ProjectFooter/ProjectFooter';
import ProjectLocationFooter from './ProjectLocationFooter/ProjectLocationFooter';
import ImageViewer from './../../Util/ImageViewer/ImageViewer';

class LocationMap extends Component<{}> {
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
    // renderFooter({title, source}) {
    //     return (
    //         <View style={styles.footer}>
    //             <Text style={styles.footerText}>{title}</Text>
    //         </View>
    //     );
    // }
    // renderPage = (image, index) => {
    //     return (
    //             <View key={index}>
    //                 <TouchableHighlight  
    //                     onPress={() => { 
    //                         this.setState({
    //                             currentImage : image,
    //                             isImageViewVisible : true
    //                         });
    //                     }}>
    //                     <Image style={{ width: BannerWidth, height: BannerHeight, resizeMode : 'cover' }} source={image.source} />
                    
    //                 </TouchableHighlight>
    //             </View>
    //     );
    // }

    // componentWillUnmount() {
    //       ActionSheet.actionsheetInstance = null;
    // }
    componentWillMount () {
    }
  render() {
    return (
        <View>
                {/* <ImageGallery images={this.props.selected_project.location_map} /> */}
                {/* <ImageViewer images={images} /> */}
            <ImageViewer images={this.props.selected_project.location_map} />
            <ProjectLocationFooter />
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
});


const mapStateToProps = (state) => {
    return {
        selected_project : state.selected_project
    };
}

export default connect(mapStateToProps)(LocationMap);

