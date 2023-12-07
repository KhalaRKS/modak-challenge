import { View } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeOut, FadeOutUp } from 'react-native-reanimated'
import { Artwork } from '../../../../domain/entities/artwork'
import { styles } from '../artwork_widget_style'

export const ArtworkBody = ({item}:{item: Artwork}) => {
  return (
    <View style={styles.cardBody}>
    <Animated.Text
      sharedTransitionTag={item.title}
      style={styles.cardTitle}>
        
      {item.title.length > 30 ? `${item.title.substring(0,20)}...` :  item.title}
    </Animated.Text>
    <Animated.Text entering={FadeIn} style={styles.cardArtist}>
      {item.origin.length > 120 ? `${item.origin.substring(0,120)}...`:  item.origin}
    </Animated.Text>
  </View>
  )
}
