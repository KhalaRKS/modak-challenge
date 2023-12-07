import {StyleSheet, Dimensions} from 'react-native';
import { useAnimatedStyle, withDelay, withTiming } from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topNav: {
    position:'absolute',
    left: width * 0.02, 
    marginTop: height * 0.01,
    textAlign: 'left'
    
  },
  starIcon: {
    position: 'absolute',
    top: height * 0.01,
    right: width * 0.05,
    width: 40,
    height: 40
    
  },
  topText: {
    fontWeight: 'bold',
    color: '#3366FF'
  },
  image: {
    objectFit:'contain',
    marginTop: height * 0.05, 
    width: '100%',
    height: height * 0.4,
  },
  backButton:{
    color: 'black'
  },
  title: {
    width: '90%',
    marginTop: height * 0.05,
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  description: {
    width: '100%',
    textAlign: 'left',
    fontSize: 16,
    color: 'black',
  },
  category: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  artistText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
  },
  origin: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    backgroundColor: 'red',
  },
  scrollView:{
    width: '90%'
  }
});