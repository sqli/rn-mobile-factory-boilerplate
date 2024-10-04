/* eslint-disable @typescript-eslint/no-require-imports */
import { NativeModules } from 'react-native';

NativeModules.SourceCode = { scriptURL: 'http://localhost:8081' };

jest.mock('react-native-device-info', () => ({
  getVersion: () => 4,
  getBundleId: jest.fn(),
  getUniqueId: jest.fn(),
}));

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('@react-native-firebase/app', () => () => ({
  onNotification: jest.fn(),
  onNotificationDisplayed: jest.fn(),
}));

jest.mock('@react-native-firebase/analytics', () => () => ({
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

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native/Libraries/Utilities/BackHandler', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

jest.mock('reactotron-react-native', () => ({
  configure: jest.fn().mockReturnThis(),
  useReactNative: jest.fn().mockReturnThis(),
  connect: jest.fn().mockReturnThis(),
  use: jest.fn(),
}));

jest.mock('reactotron-redux', () => ({
  reactotronRedux: jest.fn().mockReturnValue({
    createEnhancer: jest.fn(),
  }),
}));

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn().mockReturnValue({
    Navigator: jest.fn(),
    Screen: jest.fn(),
  }),
}));

jest.mock('react-native-keychain', () => ({
  getInternetCredentials: jest.fn().mockResolvedValue({ username: 'user', password: 'pass' }),
  setInternetCredentials: jest.fn().mockResolvedValue(true),
  resetInternetCredentials: jest.fn().mockResolvedValue(true),
}));

jest.mock('react-native-permissions', () => ({
  check: jest.fn(),
  request: jest.fn(),
  RESULTS: {
    DENIED: 'denied',
    GRANTED: 'granted',
  },
}));

jest.mock('@services/firebaseInit', () => ({
  firebaseInit: jest.fn(),
}));
