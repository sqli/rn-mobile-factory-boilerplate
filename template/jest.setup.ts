import { NativeModules } from 'react-native';

import '@testing-library/react-native/extend-expect';
import * as matchers from 'jest-extended';

expect.extend(matchers);

/* jest.mock('@react-native-firebase/analytics', () => () => ({
  logEvent: jest.fn(),
  setAnalyticsCollectionEnabled: jest.fn().mockResolvedValue(null),
}));

jest.mock('@react-native-firebase/crashlytics', () => () => ({
  log: jest.fn(),
  recordError: jest.fn(),
  setCrashlyticsCollectionEnabled: jest.fn().mockResolvedValue(null),
}));

jest.mock('@react-native-firebase/perf', () => () => ({
  setPerformanceCollectionEnabled: jest.fn().mockResolvedValue(null), // Return a resolved promise
}));

 jest.mock('@managers/firebaseManager', () => ({
  firebaseInit: jest.fn(),
}))*/

jest.mock('react-native-permissions', () => ({
  check: jest.fn(),
  request: jest.fn(),
  RESULTS: {
    DENIED: 'denied',
    GRANTED: 'granted',
  },
}));

jest.mock('react-native-keychain', () => ({
  getInternetCredentials: jest.fn().mockResolvedValue({ username: 'user', password: 'pass' }),
  setInternetCredentials: jest.fn().mockResolvedValue(true),
  resetInternetCredentials: jest.fn().mockResolvedValue(true),
}));

jest.mock('react-native-device-info', () => ({
  getVersion: () => 4,
  getBundleId: jest.fn(),
  getUniqueId: jest.fn(),
}));

jest.mock('react-native-config', () => ({
  ENV: 'string',
  BASE_URL: 'string',
}));

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('i18next', () => ({
  ...jest.requireActual('i18next'),
  t: (str: string, option?: string | undefined) => {
    if (option) {
      return str + '' + JSON.stringify(option);
    }
    return str;
  },
  changeLanguage: jest.fn(),
}));

NativeModules.SourceCode = { scriptURL: 'http://localhost:8081' };
