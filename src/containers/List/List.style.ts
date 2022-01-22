import {StyleSheet} from 'react-native';
import {colors} from 'utils/colors';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    tintColor: colors.sky,
  },
  input: {
    width: 300,
    marginRight: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
  },
  header: {
    marginBottom: 30,
  },
});
