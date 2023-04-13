# SQLI Mobile Factory React Native Boilerplate

Welcome to the [SQLI](https://github.com/sqli) starter kit for [React Native](https://reactnative.dev/) apps.  
This custom one is built upon the **0.69 version of RN** with **typescript**.

The template is preconfigured for **Firebase** and **CI/CD** with the combo **Gitlab CI** x **Fastlane** (you may find some details in the template folder inside the `README.md` itself).

## Requirement

You need to install and use 16 or newer version of Node.
If you encounter an error related to Cocoapods you may need to upgrade your version of Ruby to `2.7.3`.  
If it's not enough you may run `npx pod-install`.

## Packages (last update 02-2023)
**React Navigation** - 6.1.4  
**Redux** - 8.0.5  
**Redux ToolKit** - 1.9.3   
**Redux Persist** - 6.0.0   
React Native **Async storage** - 1.17.11  
**Reactotron** with Redux config - 3.1.3  


## Quick start

Run this command in your favorite terminal :

`npx react-native init MyApp --template https://github.com/sqli/rn-mobile-factory-boilerplate`

Install the packages with the `yarn` command and then you could run your app with these two :  
- `yarn start` to start the metro bundler ;  
- `yarn ios` or `yarn android` to run the chosen platform application.

## About us
We are a small research and development team from the Mobile Factory division. We thought we could buy some time with contemporary starter kit so we built this one with common specs and packages used within previous projects.