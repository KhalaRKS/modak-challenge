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
    backgroundColor: '#2E3A59',
  },
  containerList: {
    width: '100%',
    height: 300,
  },
  topNavText: {
    color: '#3366FF'
  }
});
