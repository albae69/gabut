import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const bottomNavStyle = StyleSheet.create({
  container: {
    height: 60,
    width: width * 0.9,
    borderRadius: 30,
    backgroundColor: '#43D9BE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.9,
  },
});
