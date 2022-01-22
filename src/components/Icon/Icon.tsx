import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {IconProps} from './Icon.props';
import {icons} from 'utils/icons';
import styles from './Icon.style';

export function Icon(props: IconProps) {
  const {style: styleOverride, icon, containerStyle, size} = props;
  const style = StyleSheet.flatten([
    styles.image,
    {width: size, height: size},
    styleOverride,
  ]);
  return (
    <View style={containerStyle}>
      <Image style={style} source={icons[icon]} />
    </View>
  );
}
