import BootSplash from 'react-native-bootsplash';
import Config from 'react-native-config';

import { fetchRemoteConfigValues, initApp } from '@redux/slices/generalSlice';
import { AppMiddleware } from '@redux/store';
import { checkRemoteConfigVersion } from '@services/firebaseInit';

export const generalMiddleware: AppMiddleware = store => next => action => {
  // const dispatch: AppDispatch = store.dispatch;
  const _next = next(action);
  const nextState = store.getState();

  switch (true) {
    case initApp.match(action): {
      console.log(`initApp for environnement ${Config.ENV} and base url ${Config.BASE_URL}`);
      // firebaseInit();
      // dispatch(fetchRemoteConfigValues());
      BootSplash.hide({ fade: true });
      break;
    }
    case fetchRemoteConfigValues.fulfilled.match(action): {
      checkRemoteConfigVersion(nextState.general.remoteConfigValues.min_version);
      break;
    }
  }
  return _next;
};
