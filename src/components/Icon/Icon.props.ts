import {ImageStyle, StyleProp, ViewStyle} from 'react-native';
import {icons} from 'utils/icons';

export type IconTypes = keyof typeof icons;

export interface IconProps {
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  icon: IconTypes;
  size?: number;
}
