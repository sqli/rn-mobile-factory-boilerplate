import DeviceInfo from 'react-native-device-info';

const isPositiveInteger = (x: string) => {
  return /^\d+$/.test(x);
};

// Validate numbers are true version numbers
const validateParts = (parts: string[]) => {
  parts.forEach(part => {
    if (!isPositiveInteger(part)) {
      return false;
    }
  });
  return true;
};

const versionUtils = {
  getApplicationVersion: () => {
    return DeviceInfo.getVersion();
  },

  getApplicationBuildNumber: () => {
    return DeviceInfo.getBuildNumber();
  },

  // https://stackoverflow.com/questions/6832596/how-to-compare-software-version-number-using-js-only-number
  compareVersionNumbers: (v1: string, v2: string) => {
    const version1Parts = v1.split('.');
    const version2Parts = v2.split('.');

    if (!validateParts(version1Parts) || !validateParts(version2Parts)) {
      return NaN;
    }

    for (let i = 0; i < version1Parts.length; ++i) {
      const version1PartInt = parseInt(version1Parts[i], 10);
      const version2PartInt = parseInt(version2Parts[i], 10);

      if (version2Parts.length === i) {
        return 1;
      }

      if (version1PartInt === version2PartInt) {
        continue;
      }

      if (version1PartInt > version2PartInt) {
        return 1;
      }
      return -1;
    }

    if (version1Parts.length !== version2Parts.length) {
      return -1;
    }

    return 0;
  },
};

export default versionUtils;
