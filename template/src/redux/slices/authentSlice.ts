import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@redux/store';

interface AuthentInitialState {
  token?: string;
}

export const authentInitialState: AuthentInitialState = {};

const authentSlice = createSlice({
  name: 'authent',
  initialState: authentInitialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logOut: state => {
      state.token = undefined;
    },
  },
});

export const { logIn, logOut } = authentSlice.actions;

export const getToken = (state: RootState) => state.authent.token;

export default authentSlice;
