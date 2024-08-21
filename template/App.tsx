/**
 * boilerplate App
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';

import MainNavigator from '@navigators/MainNavigator';
import { getCurrentRoute, navigationRef } from '@services/navigationServices';
import { NavigationContainer } from '@react-navigation/native';
import { initApp, setCurrentRoute } from '@redux/slices/generalSlice';
import store, { persistor } from '@redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import crashlyticsUtils from '@utils/crashlyticsUtils';

// crashlyticsUtils();

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
          }}
        >
          <MainNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
