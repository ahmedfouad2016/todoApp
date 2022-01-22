import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    tintColor: '#4498D1',
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
    backgroundColor: '#D3D3D3',
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
  },
  header: {
    marginBottom: 30,
  },
});
