import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const headerStyle = StyleSheet.create({
  container: {
    height: 50,
    width: width,
    backgroundColor: '#43D9BE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  account: {position: 'absolute', right: 20},
});
