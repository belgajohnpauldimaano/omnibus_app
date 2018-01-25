import React, {Component} from 'react';
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, Text, TouchableHighlight } from 'react-native';

import {connect} from 'react-redux';


const BannerWidth = Dimensions.get('window').width;
const BannerHeight =  300;
import PhotoView from '@merryjs/photo-viewer';

const {width} = Dimensions.get('window');

export default class SubdivisionMapGallery extends Component<{}> {
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
            isImageViewVisible : true
        }
    }
    

    render() {
        // const images = this.props.selected_project.subdivision_map;
        // const {currentImage, isImageViewVisible} = this.state;
        return (
            
            <PhotoView
                visible={this.state.isImageViewVisible}
                data={photos}
                hideStatusBar={true}
                initial={1}
                shareText={""}
                onDismiss={e => {
                    // don't forgot set state back.
                    this.setState({ isImageViewVisible: false });
                }}
            />
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

// const mapStateToProps = (state) => {
//     return {
//         selected_project : state.selected_project
//     };
// }

// export default connect(mapStateToProps)(SubdivisionMapGallery); 

