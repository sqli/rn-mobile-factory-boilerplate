/* eslint-disable @typescript-eslint/no-explicit-any */
// import crashlytics from '@react-native-firebase/crashlytics';

declare global {
  interface Console {
    tronError: typeof console.error;
    tronWarning: typeof console.warn;
  }
}

const crashlyticsUtils = () => {
  const consoleWarning = console.warn;

  // console.tronError = (...args: any) => {
  //   crashlytics().log(args);
  //   crashlytics().recordError(new Error(args), args[1]);
  // };

  console.tronWarning = (...args: any) => {
    consoleWarning(...args);
    // crashlytics().log(args);
  };

  console.warn = console.tronWarning;
  console.error = console.tronError;
};

export default crashlyticsUtils;
