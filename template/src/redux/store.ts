import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import { generalMiddleware } from './middlewares/general';
import { userMiddleware } from './middlewares/user';
import generalSlice from './reducers/general';
import userSlice from './reducers/user';
import reactotron from '../../ReactotronConfig';

const generalPersistConfig = {
  key: 'general',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};
const userPersistConfig = {
  key: 'general',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};

const rootReducer = combineReducers({
  [generalSlice.name]: persistReducer(generalPersistConfig, generalSlice.reducer),
  [userSlice.name]: persistReducer(userPersistConfig, userSlice.reducer),
});
const store = configureStore({
  reducer: rootReducer,
  enhancers: (__DEV__ && [reactotron.createEnhancer()]) || undefined,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(generalMiddleware, userMiddleware),
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppMiddleware = Middleware<RootState>;
