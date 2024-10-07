import { AnyAction, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

import { authentMiddleware } from '@middlewares/authentMiddleware';
import { logIn, logOut } from '@slices/authentSlice';

describe('authentMiddleware', () => {
  let store: MiddlewareAPI<Dispatch<AnyAction>>;
  let next: jest.Mock;

  beforeEach(() => {
    store = {
      dispatch: jest.fn(),
      getState: jest.fn(),
    };
    next = jest.fn();
  });

  it('should call next with the action', () => {
    const action = { type: 'TEST_ACTION' };
    authentMiddleware(store)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should handle logIn action', () => {
    const action = logIn('test-token');
    authentMiddleware(store)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
    // Add more assertions if needed
  });

  it('should handle logOut action', () => {
    const action = logOut();
    authentMiddleware(store)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
    // Add more assertions if needed
  });

  it('should not handle unknown action', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    authentMiddleware(store)(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });
});
