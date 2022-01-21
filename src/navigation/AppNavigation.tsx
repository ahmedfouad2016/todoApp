import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import {List, ListDetails} from 'containers';

export interface IAppNavigationProps {}

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC<{}> = () => {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="ListDetails" component={ListDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {AppNavigation};
