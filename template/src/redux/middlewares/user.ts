/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppDispatch, AppMiddleware } from '@redux/store';

export const userMiddleware: AppMiddleware = store => next => action => {
  const dispatch: AppDispatch = store.dispatch;
  const _next = next(action);
  const nextState = store.getState();

  switch (action.type) {
    default:
      break;
  }
  return _next;
};
