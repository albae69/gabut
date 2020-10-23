import {StyleSheet} from 'react-native';

export const splashStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43D9BE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brand: {},
  title: {
    fontSize: 48,
    fontFamily: 'Nunito-Bold',
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: 'white',
    letterSpacing: 2,
    textAlign: 'center',
  },
  cp: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    letterSpacing: 2,
    color: 'white',
  },
});
