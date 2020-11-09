import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export const categortStyle = StyleSheet.create({
  container: {
    height: 100,
    width: width - 200,
    margin: 8,
  },
  category: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: 'white',
    padding: 10,
  },
});
