import {I18nManager, StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    resizeMode: 'contain',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
});
