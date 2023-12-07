import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  containerEmptyState: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.9,
    width: '100%',
    paddingHorizontal: width * 0.01,
    gap: height * 0.02,
  },
  emptyStateText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#F2F6FF'
  },
  icon: {
    width: 80,
    height: 80,
  },
});
