import authentSlice, {
  logIn,
  logOut,
  getToken,
  authentInitialState,
} from '@redux/slices/authentSlice';
import { generalInitialState } from '@redux/slices/generalSlice';
import { userInitialState } from '@redux/slices/userSlice';
import { RootState } from '@redux/store';

describe('authentSlice', () => {
  describe('reducers', () => {
    it('should handle logIn', () => {
      const token = 'test-token';
      const action = logIn(token);
      const state = authentSlice.reducer(authentInitialState, action);

      expect(state.token).toBe(token);
    });

    it('should handle logOut', () => {
      const initialState = { token: 'test-token', _persist: { rehydrated: true, version: -1 } };
      const action = logOut();
      const state = authentSlice.reducer(initialState, action);

      expect(state.token).toBeUndefined();
    });
  });

  describe('selectors', () => {
    it('should return the token from state', () => {
      const state: RootState = {
        authent: { token: 'test-token', _persist: { rehydrated: true, version: -1 } },
        general: { ...generalInitialState, _persist: { rehydrated: true, version: -1 } },
        user: { ...userInitialState, _persist: { rehydrated: true, version: -1 } },
      };

      const token = getToken(state);
      expect(token).toBe('test-token');
    });

    it('should return undefined if token is not set', () => {
      const state = {
        authent: { token: undefined, _persist: { rehydrated: true, version: -1 } },
        general: { ...generalInitialState, _persist: { rehydrated: true, version: -1 } },
        user: { ...userInitialState, _persist: { rehydrated: true, version: -1 } },
      };

      const token = getToken(state);
      expect(token).toBeUndefined();
    });
  });
});
