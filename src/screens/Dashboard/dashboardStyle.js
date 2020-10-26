import {StyleSheet} from 'react-native';

export const dashboardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnNavContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
