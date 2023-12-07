import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#2E3A59',
  },
  title: {
    width: '90%',
    marginTop: height * 0.05,
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  containerScrollView: {
    width: '100%',
    height: height * 0.35,
    flexDirection: 'column',
    paddingHorizontal: 8,
    paddingBottom: 40,
  },
  description: {
    fontSize: 16,
    color: '#F7F9FC',
    marginTop: 4,
  },
  category: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
    color: '#FFC94D',
    fontWeight: 'bold',
  },
  artistText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
    color: '#F7F9FC',
  },
  origin: {
    width: '100%',
    fontSize: 16,
    color: '#F7F9FC',
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});
