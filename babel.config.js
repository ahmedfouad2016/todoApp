module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./__tests__/'],
          '@components': './src/components',
          '@containers': './src/containers',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@utils': './src/utils',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
