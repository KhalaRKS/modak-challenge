//import liraries
import React from 'react';
import {View, Image, ListRenderItemInfo} from 'react-native';
import {Artwork} from '../../../domain/entities/artwork';
import {Divider, Icon, ListItem, Spinner, Text} from '@ui-kitten/components';
import {styles} from './artwork_widget_style';
import Animated, {
  FadeIn,
  SlideInLeft,
  SlideInUp,
  SlideOutDown,
  SlideOutRight,
} from 'react-native-reanimated';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { ArtworkBody } from './artwork_body/artwork_body';
// create a component
export const ArtworkWidget = ({item,index,fullWidth}:{item: Artwork,index:number,fullWidth?: boolean}) => {
  
  return (
    <Animated.View
      style={fullWidth ? [styles.container, styles.largeContainer] : [[styles.container, styles.smallContainer]]}>

      <Animated.Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/300,/0/default.jpg`,
        }}
        sharedTransitionTag={item.image_id}
      />
      <ArtworkBody item={item}/>
      <View style={styles.bottomDecorationBar}></View>
    </Animated.View>
  );
};
