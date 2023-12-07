import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: height * 0.3,
    marginVertical: height * 0.025,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A6C1FF',
    borderColor: '#598BFF',
    borderRadius: 16,
  },
  smallContainer: {
    marginHorizontal: width * 0.025,
    borderBottomColor: 'black',
    width: width * 0.45,
  },
  largeContainer: {
    marginHorizontal: width * 0.05,
    width: width * 0.9,
  },
  bottomDecorationBar: {
    position: 'absolute',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    bottom:0,
    height: 15,
    width: '100%',
    backgroundColor: '#00E096',
  },
  image: {
    width: '100%',
    height: 100,
  },
  cardBody: {
    display: 'flex',
    paddingVertical: 8,
    gap: 4,
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  cardArtist: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
  },
});
