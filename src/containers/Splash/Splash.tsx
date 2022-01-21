import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './Splash.style';

function Splash() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="00ff00" />
    </View>
  );
}
export {Splash};
