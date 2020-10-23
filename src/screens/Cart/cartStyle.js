import {StyleSheet} from 'react-native';

export const cartStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#43D9BE',
    letterSpacing: 2,
    padding: 20,
  },
  wrapPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 25,
  },
  btn: {
    width: 150,
    marginTop: 0,
    backgroundColor: 'red',
  },
  btnTitleStyle: {
    fontSize: 12,
  },
  wrapCard: {
    alignItems: 'center',
    marginTop: 20,
  },
  total: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
});
