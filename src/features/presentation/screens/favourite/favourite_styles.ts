import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  button: {
    width: '70%',
  },
  list: {
    width: '100%',
    height: height * 0.82,
  },
  topNav: {
    backgroundColor: '#F2F8FF',
  },
  containerList: {
    width: '100%',
    height: 300,
  },
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
