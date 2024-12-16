/**
 * boilerplate App
 *
 * Generated with the template from SQLI Mobile Factory
 * https://github.com/sqli/rn-mobile-factory-boilerplate
 *
 * @format
 */

import React, { useEffect } from 'react';

import '@locales/i18n';
import MainNavigator from '@navigators/MainNavigator';
import { getCurrentRoute, navigationRef } from '@services/navigationServices';
import { NavigationContainer } from '@react-navigation/native';
import { initApp, setCurrentRoute } from '@redux/slices/generalSlice';
import store, { persistor } from '@redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CustomSafeAreaView from '@components/common/CustomSafeAreaView';
import CustomStatusBar from '@components/common/CustomStatusBar';
import BootSplash from 'react-native-bootsplash';
// import crashlyticsUtils from '@utils/crashlyticsUtils';

// crashlyticsUtils();

const App = (): React.JSX.Element => {
  useEffect(() => {
    const init = async () => {
      store.dispatch(initApp());
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomStatusBar />
        <CustomSafeAreaView>
          <NavigationContainer
            ref={navigationRef}
            onStateChange={() => {
              const currentRouteName = getCurrentRoute()?.name;
              store.dispatch(setCurrentRoute(currentRouteName));
            }}
          >
            <MainNavigator />
          </NavigationContainer>
        </CustomSafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
