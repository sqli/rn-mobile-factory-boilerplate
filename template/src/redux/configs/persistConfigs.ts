import KeychainManager from '@managers/KeychainManager';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authentPersistConfig = {
  key: 'authent',
  storage: KeychainManager,
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
