/* eslint-disable @typescript-eslint/no-unused-vars */
import { logIn, logOut } from '@redux/slices/authentSlice';
import { AppDispatch, AppMiddleware } from '@redux/store';
import { isAction } from '@reduxjs/toolkit';

export const authentMiddleware: AppMiddleware = store => next => action => {
  const dispatch: AppDispatch = store.dispatch;
  const _next = next(action);
  const nextState = store.getState();

  if (isAction(action)) {
    switch (action.type) {
      case logIn.type:
        break;
      case logOut.type:
        //reset your slices here
        break;
      default:
        break;
    }
  }
  return _next;
};
