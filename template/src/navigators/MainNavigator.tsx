import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { t } from 'i18next';

import { NavigationEnum } from '@enums/NavigationEnum';
import { RootStackParamList } from '@models/navigators/RootStackParams';
import DetailsScreen from '@screens/DetailsScreen';
import HomeScreen from '@screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName={NavigationEnum.HOME}>
    <Stack.Screen
      name={NavigationEnum.HOME}
      component={HomeScreen}
      options={{ title: t('home.header') }}
    />
    <Stack.Screen
      name={NavigationEnum.DETAILS}
      component={DetailsScreen}
      options={{ title: t('details.header') }}
    />
  </Stack.Navigator>
);

export default MainNavigator;
