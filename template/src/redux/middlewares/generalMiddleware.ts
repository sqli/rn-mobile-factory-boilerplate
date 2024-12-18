import { fetchRemoteConfigValues, initApp } from '@redux/slices/generalSlice';
import { AppMiddleware } from '@redux/store';
import { checkRemoteConfigVersion } from '@services/firebaseInit';
import Config from 'react-native-config';

export const generalMiddleware: AppMiddleware = store => next => action => {
  // const dispatch: AppDispatch = store.dispatch;
  const _next = next(action);
  const nextState = store.getState();

  switch (true) {
    case initApp.match(action): {
      console.log(`initApp for environnement ${Config.ENV} and base url ${Config.BASE_URL}`);
      // firebaseInit();
      // dispatch(fetchRemoteConfigValues());
      break;
    }
    case fetchRemoteConfigValues.fulfilled.match(action): {
      checkRemoteConfigVersion(nextState.general.remoteConfigValues.min_version);
      break;
    }
  }
  return _next;
};
