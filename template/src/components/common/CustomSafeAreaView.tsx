import React from 'react';

import { View } from 'react-native';

import { SafeAreaInsetsContext, SafeAreaProvider } from 'react-native-safe-area-context';

import { ColorsEnum } from '@enums/ColorsEnum';
import { NavigationEnum } from '@enums/NavigationEnum';
import useAppSelector from '@hooks/useAppSelector';

interface Props {
  children?: React.ReactNode;
}

export default ({ children }: Props) => {
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

  return (
    <SafeAreaProvider>
      <SafeAreaInsetsContext.Consumer>
        {insets => {
          const safeAreaStyle = insets && {
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            paddingTop: insets.top,
          };
          return (
            <View style={{ flex: 1, backgroundColor: getBackgroundColor(), ...safeAreaStyle }}>
              {children}
            </View>
          );
        }}
      </SafeAreaInsetsContext.Consumer>
    </SafeAreaProvider>
  );
};
