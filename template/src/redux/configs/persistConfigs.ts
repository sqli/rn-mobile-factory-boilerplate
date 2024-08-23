import keychainManager from '@managers/keychainManager';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authentPersistConfig = {
  key: 'authent',
  storage: keychainManager,
  whitelist: ['token'],
};

export const generalPersistConfig = {
  key: 'general',
  storage: AsyncStorage,
  whitelist: [],
};

export const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: [],
};
