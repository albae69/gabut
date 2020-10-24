import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const detailStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  descContainer: {
    padding: 20,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    textAlign: 'left',
  },
  btn1: {
    height: 40,
  },
  btnTitle: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: width,
    position: 'absolute',
    bottom: 0,
  },
});
