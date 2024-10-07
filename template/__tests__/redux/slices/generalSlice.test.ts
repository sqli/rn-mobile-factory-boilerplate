import { Action, configureStore, Store } from '@reduxjs/toolkit';

import generalSlice, { generalInitialState, initApp, setCurrentRoute } from '@slices/generalSlice';

interface GeneralState {
  currentRoute?: string;
  previousRoute?: string;
}

describe('generalSlice', () => {
  let store: Store<{ general: GeneralState }, Action>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        general: generalSlice.reducer,
      },
    });
  });

  it('should have initial state', () => {
    const state = store.getState().general;
    expect(state).toEqual(generalInitialState);
  });

  it('should handle initApp', () => {
    store.dispatch(initApp());
    const state = store.getState().general;
    expect(state).toEqual(generalInitialState);
  });

  it('should handle setCurrentRoute', () => {
    const newRoute = 'newRoute';
    store.dispatch(setCurrentRoute(newRoute));
    const state = store.getState().general;
    expect(state.currentRoute).toBe(newRoute);
    expect(state.previousRoute).toBe('');
  });

  it('should update previousRoute when setCurrentRoute is called', () => {
    const firstRoute = 'firstRoute';
    const secondRoute = 'secondRoute';
    store.dispatch(setCurrentRoute(firstRoute));
    store.dispatch(setCurrentRoute(secondRoute));
    const state = store.getState().general;
    expect(state.currentRoute).toBe(secondRoute);
    expect(state.previousRoute).toBe(firstRoute);
  });
});
