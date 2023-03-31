/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit';

interface UserInitialState {
  username: string;
}
export const userInitialState: UserInitialState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice;
