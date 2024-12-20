# SQLI React-Native boilerplate

Versions of Node (`22.6.0`), Java (`Java 17`) and Ruby (`3.2.5`) are managed with `.nvmrc`, `.jabbarc` and `.ruby-version` files so everyone could use this starter kit.

## Basic configuration

There are a few things you have to change to make this template specific to your project :

- Do a search and replace on all `com.sqli.appname` to `com.company.appname` specific to your project (bundleId)

Replace those variables with your urls :

- JIRA_URL
- SONAR_URL

## Firebase configuration

Most of the Firebase configuration is initialized in the boilerplate, but you have a few steps to do in order to make it work for your project.

- Once you have specified your bundleID you can go to the firebase console an create a new firebase project.
- Inside this firebase project you can create a new Android app and a new iOS app with ou specified `bundleID`.
- You can download both GoogleServices files (.JSON and .plist).
- Place the `google-services.json` file in `android/app/` and in the folder `firebase_services`.
- Place the `GoogleServices-Info.plist` file in `ios` and in the folder `firebase_services`.

Now that you have create your Firebase project and added the configuration files, you have to update the app configuration:

- Add Crashlytics : `yarn add @react-native-firebase/crashlytics @react-native-firebase/analytics @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/messaging @react-native-firebase/perf @react-native-firebase/remote-config`
- In `AppDelegate.m` uncomment \*`#import <Firebase.h>` et `[FIRApp configure];`
- In `app/build.gradle` uncomment \*`apply plugin` lines at the top of the file.
- In `build.gradle` uncomment \*`classpath` lines in dependencies.
- In `App.tsx` uncomment `import crashlytics` et `crashlyticsUtils()`
- In `general.ts` middleware uncomment `initApp` functions.
- In `firebaseInit.ts` and `RemoteConfigManager.ts` uncomment the imports
- In `remoteConfigManager.ts` uncomment the `getAllRemoteConfigValues` function
- In `generalMiddleware.ts` uncomment `// firebaseInit();` `// dispatch(fetchRemoteConfigValues());`
- In `firebaseInit.ts` uncomment `setNotificationsEnabled` function
- in `jest.setup.ts`uncomment all the jest mocks
- In .env files, replace `FIREBASE_APP_ID_IOS = "1:xxxxxxxxxxxx:ios:xxxxxxxxxxxxxxxxxxxxx"` and `FIREBASE_APP_ID_ANDROID = "1:xxxxxxxxxxxx:android:xxxxxxxxxxxxxxxxxxxxx"`

> Firebase is now initialized with analytics, crashlytics, firestore, messaging, performance and remote-config.
> You can now see logs of your `fcmtoken`, and reports in your Firebase console.

## CI / CD

Part of the CI / CD as been set-up with gitlab_ci and fastlane.
If you want to use it for your project you have to :

- Add the global variables in the file .env.global
- Add the secret variables in your gilab repo
- Update the file `.gitlab-ci.yml` and `Fastile` to fit your requirements.
- If you are using App Center, create your apps (iOS & Android).
