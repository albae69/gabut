import {StyleSheet} from 'react-native';

export const profileStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapProfile: {flexDirection: 'row', padding: 16, alignItems: 'center'},

  imgContainer: {alignItems: 'center', marginTop: 100},
  img: {
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: 'lightgray',
  },
  text1: {fontFamily: 'Nunito-Bold', fontSize: 18, color: 'black'},
  text2: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: 'lightgray',
  },
  p5: {marginTop: 50},
  p2: {marginTop: 20},
  p: {
    padding: 20,
  },
  ml2: {
    marginLeft: 20,
  },
});
