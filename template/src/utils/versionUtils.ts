import DeviceInfo from 'react-native-device-info';

const versionUtils = {
  getApplicationVersion: () => DeviceInfo.getVersion(),

  getApplicationBuildNumber: () => DeviceInfo.getBuildNumber(),

  // https://stackoverflow.com/questions/6832596/how-to-compare-software-version-number-using-js-only-number
  compareVersionNumbers: (v1: string, v2: string) =>
    v1.localeCompare(v2, undefined, { numeric: true, sensitivity: 'base' }),
};

export default versionUtils;
