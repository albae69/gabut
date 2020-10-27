import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const swiperStyle = StyleSheet.create({
  container: {
    height: 200,
    marginBottom: 10,
  },
  img: {
    height: 200,
    width: width,
    resizeMode: 'cover',
  },
});
