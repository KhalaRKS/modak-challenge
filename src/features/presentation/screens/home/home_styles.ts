import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F9FC',
    width: '100%',
  },
  list: {
    width: '100%',
    height
  },
  topNav: {
    backgroundColor: '#F7F9FC',
  },
  containerList: {
    width: '100%',
    height: 300,
  }
});
