import { fetchRemoteConfigValues, initApp } from '@redux/slices/generalSlice';
import { AppDispatch, AppMiddleware } from '@redux/store';
import { checkRemoteConfigVersion } from '@services/firebaseInit';

export const generalMiddleware: AppMiddleware = store => next => action => {
  const dispatch: AppDispatch = store.dispatch;
  const _next = next(action);
  const nextState = store.getState();

  switch (action.type) {
    case initApp.type: {
      // firebaseInit();
      // dispatch(fetchRemoteConfigValues());
      break;
    }
    case fetchRemoteConfigValues.fulfilled.type: {
      checkRemoteConfigVersion(nextState.general.remoteConfigValues.min_version);
      break;
    }
  }
  return _next;
};
