module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    //if you already have other plugin just paste this lines below
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@enums': './src/enums',
          '@hooks': './src/hooks',
          '@managers': './src/managers',
          '@models': './src/models',
          '@navigators': './src/navigators',
          '@redux': './src/redux',
          '@thunks': './src/redux/thunks',
          '@middlewares': './src/redux/middlewares',
          '@slices': './src/redux/slices',
          '@selectors': './src/redux/selectors',
          '@screens': './src/screens',
          '@services': './src/services',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
