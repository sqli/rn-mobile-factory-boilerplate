import analytics from '@react-native-firebase/analytics';
import { ReactNativeFirebase } from '@react-native-firebase/app';
import crashlytics from '@react-native-firebase/crashlytics';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import perf from '@react-native-firebase/perf';

import versionUtils from '@utils/versionUtils';

export const checkRemoteConfigVersion = (remoteVersion?: string) => {
  if (remoteVersion) {
    const isMinVersionHigher = versionUtils.compareVersionNumbers(
      remoteVersion as string,
      versionUtils.getApplicationVersion(),
    );
    if (isMinVersionHigher === 1 && !__DEV__) {
      // TODO
      console.log('🐙 Show Modal force Update');
    }
  } else {
    console.error('checkRemoteConfigVersion error: no remote version', 'checkRemoteConfigVersion');
  }
};

const setNotificationsEnabled = (
  status: FirebaseMessagingTypes.AuthorizationStatus,
  messaging: ReactNativeFirebase.FirebaseModuleWithStatics<
    FirebaseMessagingTypes.Module,
    FirebaseMessagingTypes.Statics
  >,
) => {
  if (status === messaging.AuthorizationStatus.DENIED) {
    // TODO
    console.log('🐙 notifs not allowed');
  } else {
    // TODO
    console.log('🐙 notifs allowed');
  }
};

export const firebaseInit = () => {
  analytics()
    .setAnalyticsCollectionEnabled(!__DEV__)
    .catch(error => {
      console.error(`setAnalyticsCollectionEnabled error: ${JSON.stringify(error)}`, 'setAnalyticsCollectionEnabled');
    });
  crashlytics()
    .setCrashlyticsCollectionEnabled(!__DEV__)
    .catch(error => {
      console.error(
        `setCrashlyticsCollectionEnabled error: ${JSON.stringify(error)}`,
        'setCrashlyticsCollectionEnabled',
      );
    });
  perf()
    .setPerformanceCollectionEnabled(!__DEV__)
    .catch(error => {
      console.error(
        `setPerformanceCollectionEnabled error: ${JSON.stringify(error)}`,
        'setPerformanceCollectionEnabled',
      );
    });
  // for Android to check if Notifications are enabled
  messaging()
    .hasPermission()
    .then(status => {
      setNotificationsEnabled(status, messaging);
    });
  // for iOS
  messaging()
    .requestPermission()
    .then(status => {
      setNotificationsEnabled(status, messaging);
      messaging()
        .getToken()
        .then(fcmToken => {
          // TODO
          console.log('🐣 fcmToken', fcmToken);
        })
        .catch(error => {
          console.error(`setMessagingCollectionEnabled error: ${error}`, 'setMessagingCollectionEnabled');
        });
      // timeout so when first opening the app, api is not called twice (token didn't exist before)
      setTimeout(() => {
        messaging().onTokenRefresh(fcmToken => {
          // TODO
          console.log('🐣 fcmToken', fcmToken);
        });
      }, 5000);
    });
  // Handle notification information when notif is received and the app is in foreground
  messaging().onMessage(message => {
    __DEV__ && console.log(message);
  });
  // Handle notification information when notif is opened and the app is in background
  messaging().onNotificationOpenedApp(message => {
    setTimeout(() => {
      // TODO
      message && console.log('🐙 notif opened');
    }, 300);
  });
  messaging().setBackgroundMessageHandler(async message => {
    console.log(message);
  });
};
