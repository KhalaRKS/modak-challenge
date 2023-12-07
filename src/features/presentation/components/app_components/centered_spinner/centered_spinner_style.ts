import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  center: {
    display: 'flex',
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
