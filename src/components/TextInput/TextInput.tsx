import React from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';
import {InputType} from './TextInput.props';

import styles from './TextInput.style';

export const TextInput = (props: InputType) => {
  const {value, onChangeText, placeholder, forwardedRef, inputStyle, ...rest} =
    props;
  const style = StyleSheet.flatten([styles.input, inputStyle]);
  return (
    <RNTextInput
      {...rest}
      testID="text-input"
      style={style}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      ref={forwardedRef}
    />
  );
};
