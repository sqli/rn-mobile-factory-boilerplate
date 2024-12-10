import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

// @ts-ignore
import { authentMiddleware } from '@middlewares/authentMiddleware';
import { generalMiddleware } from '@middlewares/generalMiddleware';
import {
  authentPersistConfig,
  generalPersistConfig,
  userPersistConfig,
} from '@redux/configs/persistConfigs';
import generalSlice from '@slices/generalSlice';
import userSlice from '@slices/userSlice';

import reactotron from '../../ReactotronConfig';
import authentSlice from './slices/authentSlice';

const rootReducer = combineReducers({
  [authentSlice.name]: persistReducer(authentPersistConfig, authentSlice.reducer),
  [generalSlice.name]: persistReducer(generalPersistConfig, generalSlice.reducer),
  [userSlice.name]: persistReducer(userPersistConfig, userSlice.reducer),
});

const store = configureStore({
  reducer: rootReducer,
  enhancers: getDefaultEnhancers =>
    // @ts-ignore
    __DEV__ ? getDefaultEnhancers().concat(reactotron.createEnhancer()) : getDefaultEnhancers(),
  // @ts-ignore
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(generalMiddleware, authentMiddleware),
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppMiddleware = Middleware<RootState>;
