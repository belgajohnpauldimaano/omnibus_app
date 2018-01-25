
import React, { Component } from 'react';
import Gallery from 'react-native-image-gallery';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';


export default class ImageGallery extends Component {
  constructor (props) {
    super(props);
    this.state = {
      counter : 1,
      index: 0,
    };
  }

    onChangeTextDisplay = (index) => {
        this.setState({counter : index + 1});
    }
    onChangeImage = (index) => {
        this.setState({ index });
    }
    caption () {
        const { index } = this.state;
        return (
            <View style={{ top: 0, height: 40, backgroundColor: 'rgba(255, 255, 255, 0.4)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: '#333', fontSize: 15, fontStyle: 'italic' }}>{ this.props.images[index].title } </Text>
            </View>
        );
    }

    galleryCount () {
        const { index } = this.state;
        return (
            <View style={{ top: 0, height: 40, backgroundColor: 'rgba(255, 255, 255, 0.4)', width: '100%', position: 'absolute', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'right', color: '#333', fontSize: 15, fontStyle: 'italic', paddingRight: '10%' }}>{ index + 1 } / { this.props.images.length }</Text>
            </View>
        );
    }
  render () {
    return (
        <View>
          <Gallery
            initialPage={0}
            images={
                this.props.images
            }
            onPageSelected={this.onChangeImage}
          />
        { this.galleryCount() }
        { this.caption() }
      </View>
    )
  }
}
