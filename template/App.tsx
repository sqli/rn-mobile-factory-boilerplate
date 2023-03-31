/**
 * boilerplate App
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import MainNavigator from '@navigators/MainNavigator';
import { getCurrentRoute, navigationRef } from '@navigators/navigationServices';
import { initApp, setCurrentRoute } from '@redux/reducers/general';
import store, { persistor } from '@redux/store';
import crashlyticsUtils from '@utils/crashlyticsUtils';

crashlyticsUtils();

const App = () => {
  useEffect(() => {
    store.dispatch(initApp());
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer
          ref={navigationRef}
          onStateChange={() => {
            const currentRouteName = getCurrentRoute()?.name;
            store.dispatch(setCurrentRoute(currentRouteName));
          }}>
          <MainNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
