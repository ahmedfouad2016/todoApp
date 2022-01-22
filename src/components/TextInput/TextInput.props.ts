import {StyleProp, TextInputProps, TextStyle} from 'react-native';

export interface InputType extends TextInputProps {
  onChangeText: (text: string) => void;
  value?: string;
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
  forwardedRef?: any;
}
