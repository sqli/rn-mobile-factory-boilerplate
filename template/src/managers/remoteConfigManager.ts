// import remoteConfig from '@react-native-firebase/remote-config';

export const remoteConfigMinVersion = 'min_version';

const remoteConfigManager = {
  getAllRemoteConfigValues: () =>
    new Promise<{ [key: string]: string }>((res, rej) => {
      // remoteConfig()
      //   .fetchAndActivate()
      //   .then(fetchedRemotely => {
      //     if (fetchedRemotely) {
      //       console.info('Configs were retrieved from the backend and activated.');
      //     } else {
      //       console.info(
      //         'No configs were fetched from the backend, and the local configs were already activated',
      //       );
      //     }
      //     const parameters = remoteConfig().getAll();
      //     const remoteConfigValues: { [key: string]: string } = {};
      //     Object.entries(parameters).forEach(element => {
      //       const [key, entry] = element;
      //       remoteConfigValues[key] = entry.asString();
      //     });
      //     res(remoteConfigValues);
      //   })
      //   .catch(err => {
      //     rej(err);
      //   });
    }),
};

export default remoteConfigManager;
