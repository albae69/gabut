import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 30,
  },
  alignCenter: {
    marginTop: height / 5,
  },
  forgotPassword: {
    textAlign: 'right',
    marginTop: 10,
    color: '#43D9BE',
    fontFamily: 'Nunito-Regular',
  },
  wrapNoAcc: {flex: 1, justifyContent: 'flex-end', marginBottom: 20},
  noAcc: {
    fontFamily: 'Nunito-Regular',
    color: 'black',
    fontSize: 16,
  },
});
