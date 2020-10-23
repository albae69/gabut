import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const cardCartStyle = StyleSheet.create({
  container: {
    height: 100,
    width: width - 35,
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 8,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  wrapImg: {
    height: 50,
    width: 50,
    backgroundColor: 'lightgray',
  },
  row: {
    flexDirection: 'row',
  },
  wrapText: {
    marginLeft: 20,
  },
  ml: {
    marginLeft: 10,
  },
  mr: {
    marginRight: 5,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    width: width / 3,
  },
  price: {fontFamily: 'Nunito-Regular', fontSize: 14},
  qty: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
});
