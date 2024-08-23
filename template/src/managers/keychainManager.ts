import * as Keychain from 'react-native-keychain';

const keychainManager = {
  getItem: (key: string) =>
    new Promise((res, rej) => {
      Keychain.getInternetCredentials(key)
        .then(result => {
          if (result === false || result?.password === 'null') {
            res(null);
          } else {
            res(result?.password);
          }
        })
        .catch(e => {
          rej(e);
        });
    }),

  setItem: (key: string, item: string, username: string) =>
    new Promise<void>((res, rej) => {
      Keychain.setInternetCredentials(key, username ?? 'null', item ?? 'null')
        .then(() => {
          res();
        })
        .catch(e => {
          rej(e);
        });
    }),

  removeItem: (key: string) =>
    new Promise<void>((res, rej) => {
      Keychain.resetInternetCredentials(key)
        .then(() => {
          res();
        })
        .catch(e => {
          rej(e);
        });
    }),
};

export default keychainManager;
