import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const swiperStyle = StyleSheet.create({
  container: {
    height: 250,
    marginBottom: 10,
  },
  img: {
    height: 250,
    width: width,
    resizeMode: 'cover',
  },
});
