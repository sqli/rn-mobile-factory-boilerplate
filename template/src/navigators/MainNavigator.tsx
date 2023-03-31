import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '@screens/DetailsScreen';
import HomeScreen from '@screens/HomeScreen';

import navigationConstants from './navigationConstants';
import { rootStackParamList } from './rootStackParams';

const Stack = createNativeStackNavigator<rootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={navigationConstants.HOME}>
      <Stack.Screen name={navigationConstants.HOME} component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen
        name={navigationConstants.DETAILS}
        component={DetailsScreen}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
