import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Props, RouteProps} from './ListDetails.props';

const ListDetails = ({navigation}: Props) => {
  const {params} = useRoute<RouteProps>();
  useEffect(() => {
    const list = params?.list;
    navigation.setOptions({
      title: list?.title || '',
    });
  }, [navigation, params]);

  return (
    <View>
      <Text />
    </View>
  );
};

export {ListDetails};
