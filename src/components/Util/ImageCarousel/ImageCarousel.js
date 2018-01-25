/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Carousel, { Pagination, ParallaxImage  } from 'react-native-snap-carousel';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';


const SLIDER_1_FIRST_ITEM = 1;
export default class ImageCarousel extends Component<{}> {

  constructor (props) {
    super(props);
    this.state = {
      entries : [
        {
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'http://i.imgur.com/UYiroysl.jpg'
        },
        {
            title: 'Earlier this morning, NYC',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'http://i.imgur.com/UPrs1EWl.jpg'
        },
        {
            title: 'White Pocket Sunset',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
            illustration: 'http://i.imgur.com/MABUbpDl.jpg'
        },
        {
            title: 'Acrocorinth, Greece',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'http://i.imgur.com/KZsmUi2l.jpg'
        },
        {
            title: 'The lone tree, majestic landscape of New Zealand',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'http://i.imgur.com/2nCt3Sbl.jpg'
        },
        {
            title: 'Middle Earth, Germany',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'http://i.imgur.com/lceHsT6l.jpg'
        }
      ],
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      slider1Ref: null
    };
  }
  _renderItem ({item, index}) {
      return (
          <View style={styles.slide}>
              <View style={styles.slideInnerContainer}>
                <Text> {item.title}</Text>
              </View>
          </View>
      );
  }
  _renderItemParallax ({item, index}, parallaxProps) {
        return (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.slideInnerContainer}
            onPress={() => { alert(`You've clicked '${item.title}'`); }}
            >
            <View style={styles.imageContainer}>
                <ParallaxImage
                    source={{ uri: item.illustration }}
                    // source={ require('./../assets/images/UYiroysl.jpg') }
                    containerStyle={styles.imageContainer}
                    // containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
                    style={styles.image}
                    parallaxFactor={0.4}
                    showSpinner
                    {...parallaxProps}
                />
              </View>
              <View>
                <Text style={styles.title} numberOfLines={2}>
                    { item.title }
                </Text>
            </View>
          </TouchableOpacity>
        );
    }
  render() {
    return (
      <View>
            <Carousel
              ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
              data={this.state.entries}
              // renderItem={this._renderItem}
              renderItem={this._renderItemParallax}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              itemHeight={viewportWidth}

                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  hasParallaxImages
            />

            <Pagination
              dotsLength={this.state.entries.length}
              activeDotIndex={this.state.slider1ActiveSlide}
              containerStyle={styles.paginationContainer}
              dotColor={'rgba(255, 255, 255, 0.92)'}
              dotStyle={styles.paginationDot}
              inactiveDotColor={colors.black}
              inactiveDotOpacity={0.9}
              inactiveDotScale={0.9}
              carouselRef={this.state.slider1Ref}
              tappableDots={!!this.state.slider1Ref}
            />

      </View>
    );
  }
}


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const horizontalMargin = 20;

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = '100%';

const entryBorderRadius = 8;


const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    slideInnerContainer: {
      width: itemWidth,
      height: slideHeight,
      paddingBottom: 18
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    imageContainerEven: {
        backgroundColor: colors.black
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
});
