# SQLI React-Native Boilerplate

Versions of Node (`16.15.1`), Java (`Java 11`) and Ruby (`2.7.3`) are managed with `.nvmrc`, `.jabbarc` and `.ruby-version` files so everyone could use this starter kit.

## Basic configuration

There are a few things you have to change to make this template specific to your project :

- Do a search and replace on all `com.sqli.appname` to `com.company.appname` specific to your project (bundleId)

## Firebase configuration

Most of the Firebase configuration is initialized in the boilerplate, but you have a few steps to do in order to make it work for your project.

- Once you have specified your bundleID you can go to the firebase console an create a new firebase project.
- Inside this firebase project you can create a new Android app and a new iOS app with ou specified `bundleID`.
- You can download both GoogleServices files (.JSON and .plist).
- Place the `google-services.json` file in `android/app/` and in the folder `firebase_services`.
- Place the `GoogleServices-Info.plist` file in `ios` and in the folder `firebase_services`.

Now that you have create your Firebase project and added the configuration files, you have to update the app configuration:

- Add Crashlytics : `yarn add @react-native-firebase/crashlytics@14.12.0 @react-native-firebase/analytics@14.12.0 @react-native-firebase/app@14.12.0 @react-native-firebase/auth@14.12.0 @react-native-firebase/messaging@14.12.0 @react-native-firebase/perf@14.12.0 @react-native-firebase/remote-config@14.12.0`
- In `AppDelegate.m` uncomment \*`#import <Firebase.h>` et `[FIRApp configure];`
- In `app/build.gradle` uncomment \*`apply plugin` lines at the top of the file.
- In `build.gradle` uncomment \*`classpath` lines in dependencies.
- In `App.tsx` uncomment `import crashlytics` et `crashlyticsUtils()`
- In `general.ts` middleware uncomment `initApp` functions.
- In `firebaseInit.ts` and `RemoteConfigManager.ts` uncomment the imports

> Firebase is now initialized with analytics, crashlytics, firestore, messaging, performance and remote-config.
> You can now see logs of your `fcmtoken`, and reports in your Firebase console.

## CI / CD

Part of the CI / CD as been set-up with gitlab_ci and fastlane.
If you want to use it for your project you have to :

- Add the global variables in the file .env.global
- Add the secret variables in your gilab repo
- Update teh file `.gitlab-ci.yml` and `Fastile` to fit your requirements.
- If you are using App Center, create your apps (iOS & Android).
