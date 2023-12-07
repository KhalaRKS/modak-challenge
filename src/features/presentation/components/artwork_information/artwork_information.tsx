import React from 'react';
import Animated, {FadeIn, SlideInLeft} from 'react-native-reanimated';
import {ScrollView, View} from 'react-native';
import {styles} from './artwork_information_styles';
import {Artwork} from '../../../domain/entities/artwork';
import {Divider} from '@ui-kitten/components';

export const ArtworkInformation = ({item}: {item: Artwork}) => {
  return (
    <View style={styles.container}>
      <Divider style={{backgroundColor: 'black', marginVertical: 4}} />
      <View style={styles.containerScrollView}>
        <ScrollView style={styles.scrollView}>
          <Animated.View
            entering={FadeIn.delay(100).duration(200)}
            style={styles.categoryContainer}>
            <Animated.Text style={styles.category}>Artist/s:</Animated.Text>
            <Animated.Text style={styles.artistText}>
              {item.artist}
            </Animated.Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(350).duration(200)}
            style={styles.categoryContainer}>
            <Animated.Text style={styles.category}>Origin:</Animated.Text>
            <Animated.Text style={styles.origin}>{item.origin}</Animated.Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(550).duration(200)}
            style={styles.categoryContainer}>
            <Animated.Text entering={SlideInLeft} style={styles.category}>
              Description:
            </Animated.Text>

            <Animated.Text style={styles.description}>
              {item.min_description}
            </Animated.Text>
          </Animated.View>
        </ScrollView>
      </View>
    </View>
  );
};
