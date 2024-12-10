import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const oldConsoleLog = console.log;
console.log = (...args) => {
  oldConsoleLog(...args);

  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 1 ? JSON.stringify(args) : args[0],
  });
};

let reactotron;

let scriptHostname;
if (__DEV__) {
  // TODO: find a solution for Reactotron hostname + new architecture
  // const scriptURL = NativeModules.SourceCode.scriptURL;
  // scriptHostname = scriptURL.split('://')[1].split(':')[0];

  reactotron =
    Reactotron.setAsyncStorageHandler &&
    Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
      .configure({ name: 'boilerplate' /*, host: scriptHostname */ }) // controls connection & communication settings
      .useReactNative() // add all built-in react native plugins
      .use(reactotronRedux())
      .connect(); // let's connect!
}

export default reactotron;
