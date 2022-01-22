import {setLocal, translate} from 'i18n';
import React, {useEffect, useState} from 'react';
import {View, I18nManager, Switch, Text} from 'react-native';
import {usePrevious} from 'utils/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import styles from './SwitchLang.style';
import {colors} from 'utils/colors';

export const SwitchLang = () => {
  const [isChecked, setIsChecked] = useState(I18nManager.isRTL);
  const prevLang = usePrevious(isChecked);
  useEffect(() => {
    const saveLang = async (lang: string) => {
      await AsyncStorage.setItem('@current_lang', lang);
    };
    if (prevLang !== isChecked) {
      if (prevLang === null || prevLang === undefined) {
        return;
      }
      setLocal(isChecked ? 'ar' : 'en');
      I18nManager.allowRTL(isChecked);
      I18nManager.forceRTL(isChecked);
      saveLang(isChecked ? 'ar' : 'en');
      setTimeout(() => {
        RNRestart.Restart();
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);
  return (
    <View style={styles.row}>
      <Text style={styles.text}>
        {translate(`common.${isChecked ? 'ar' : 'en'}`)}
      </Text>
      <Switch
        trackColor={{false: colors.gray, true: colors.blue}}
        onValueChange={() => setIsChecked(prevState => !prevState)}
        value={isChecked}
      />
    </View>
  );
};
