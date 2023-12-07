import React from 'react';
import {View, Image} from 'react-native';
import {Text} from '@ui-kitten/components'
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './loading_styles';
import Animated, { FadeIn } from 'react-native-reanimated';
import { loadingViewModel } from './loading_view_model';

// create a component
export const LoadingScreen = () => {
  const {} = loadingViewModel()
  return (
    <LinearGradient
    colors={['#549084', '#549084', '#549084']}
    angle={130}
    useAngle
    locations={[-0.014, 0.5, 0.9364]}
    angleCenter={{
      x: 0.5, y: 0.5,
    }}
    style={styles.gradientContainer}
  >
    <View style={styles.loadingContainer}>
      <Animated.Image
      entering={FadeIn.delay(200)}
      source={require('../../../core/assets/modak_logo.png')}
      />
      <Animated.Text entering={FadeIn.delay(400)} style={{fontSize: 24, color: 'white'}}>Challenge</Animated.Text>
    </View>
  </LinearGradient>
  );
};
