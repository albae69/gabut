import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export const categortStyle = StyleSheet.create({
  container: {
    height: 120,
    width: width - 200,
    margin: 10,
  },
  category: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
  },
});
