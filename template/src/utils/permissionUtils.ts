import { Platform } from 'react-native';

import {
  check,
  RESULTS,
  request,
  Permission,
  AndroidPermission,
  IOSPermission,
} from 'react-native-permissions';

const checkPermission = (permission: Permission) =>
  new Promise<void>((res, rej) => {
    check(permission)
      .then(result => {
        if (result === RESULTS.DENIED) {
          request(permission)
            .then(status => {
              if (status === RESULTS.GRANTED) {
                res();
              } else {
                rej(Error(status));
              }
            })
            .catch(error => {
              console.error(error);
              rej(error);
            });
        } else if (result === RESULTS.GRANTED) {
          res();
        } else {
          rej(Error(result));
        }
      })
      .catch(error => {
        console.error(error);
        rej(error);
      });
  });

export const checkIosAndAndroidPermission = (
  iosPermission: IOSPermission,
  androidPermission: AndroidPermission,
) =>
  new Promise<void>((res, rej) => {
    if (Platform.OS === 'ios') {
      checkPermission(iosPermission).then(res).catch(rej);
    } else {
      checkPermission(androidPermission).then(res).catch(rej);
    }
  });
