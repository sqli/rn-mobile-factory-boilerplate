import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '@screens/DetailsScreen';
import HomeScreen from '@screens/HomeScreen';

import { NavigationEnum } from '@enums/NavigationEnum';
import { RootStackParamList } from '@models/navigators/RootStackParams';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationEnum.HOME}>
      <Stack.Screen name={NavigationEnum.HOME} component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen
        name={NavigationEnum.DETAILS}
        component={DetailsScreen}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
