import {I18nManager, StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});
