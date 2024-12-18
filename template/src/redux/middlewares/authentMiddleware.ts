/* eslint-disable @typescript-eslint/no-unused-vars */
import { logIn, logOut } from '@redux/slices/authentSlice';
import { AppDispatch, AppMiddleware } from '@redux/store';

export const authentMiddleware: AppMiddleware = store => next => action => {
  const dispatch: AppDispatch = store.dispatch;
  const _next = next(action);
  const nextState = store.getState();

  switch (true) {
    case logIn.match(action):
      break;
    case logOut.match(action):
      // reset your slices here
      break;
    default:
      break;
  }

  return _next;
};
