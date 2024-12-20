# Tests with Maestro

Maestro is a tool that allows you to run UI tests on multiple platforms at the same time. Tests are written in yaml files and can be run on Android and iOS simulators.

## Prerequisites

- Python 3.13.1
- Maestro
- Android simulator
- iOS simulator

## Running tests

### iOS or Android only

1. Build the app for the platform you want to test
2. run `yarn maestro:ios` or `yarn maestro:android`

### Start both platforms

1. Start Android and iOS simulators
2. From the terminal, navigate to the /template folder
3. Run the command `yarn maestro`
