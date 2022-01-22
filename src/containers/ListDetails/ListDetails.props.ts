import {RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamTypes} from 'navigation/ParamTypes';

export interface Props
  extends NativeStackScreenProps<ParamTypes, 'ListDetails'> {}

export type RouteProps = RouteProp<ParamTypes, 'ListDetails'>;
