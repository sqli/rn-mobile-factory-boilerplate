import React from 'react';

import { SafeAreaView, StatusBar } from 'react-native';

import { ColorsEnum } from '@enums/ColorsEnum';
import { NavigationEnum } from '@enums/NavigationEnum';
import useAppSelector from '@hooks/useAppSelector';

const CustomStatusBar = () => {
  const currentRoute = useAppSelector(state => state.general.currentRoute);
  const getBackgroundColor = () => {
    switch (currentRoute) {
      case NavigationEnum.DETAILS: {
        return ColorsEnum.BLACK;
      }
      default: {
        return ColorsEnum.WHITE;
      }
    }
  };

  const getBarStyle = () => {
    switch (currentRoute) {
      case NavigationEnum.DETAILS: {
        return 'light-content';
      }
      default: {
        return 'dark-content';
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 0, backgroundColor: getBackgroundColor() }}>
      <StatusBar translucent barStyle={getBarStyle()} backgroundColor={getBackgroundColor()} />
    </SafeAreaView>
  );
};

export default CustomStatusBar;
