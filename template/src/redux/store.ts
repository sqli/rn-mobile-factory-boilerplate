import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import reactotron from '../../ReactotronConfig';
import generalSlice from '@slices/generalSlice';
import userSlice from '@slices/userSlice';
import { generalMiddleware } from '@middlewares/generalMiddleware';
import { userMiddleware } from '@middlewares/userMiddleware';

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
