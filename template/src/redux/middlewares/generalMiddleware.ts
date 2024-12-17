import { fetchRemoteConfigValues, initApp } from '@redux/slices/generalSlice';
import { AppMiddleware } from '@redux/store';
import { checkRemoteConfigVersion } from '@services/firebaseInit';

export const generalMiddleware: AppMiddleware = store => next => action => {
  // const dispatch: AppDispatch = store.dispatch;
  const _next = next(action);
  const nextState = store.getState();

  switch (true) {
    case initApp.match(action): {
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
