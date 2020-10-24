import {StyleSheet} from 'react-native';

export const headerStyle = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#43D9BE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  account: {position: 'absolute', right: 20},
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: 200,
    backgroundColor: 'white',
    elevation: 8,
    borderRadius: 8,
  },
  placeholder: {
    fontFamily: 'Nunito-Family',
    fontSize: 12,
    color: 'gray',
  },
});
