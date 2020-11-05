import {StyleSheet, Dimensions} from 'react-native';

export const dashboardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  btnNavContainer: {
    position: 'absolute',
    bottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 10,
  },
});
