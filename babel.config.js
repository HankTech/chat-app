module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '*': '.',
          '@': './src',
          '@assets': './src/assets',
          '@fonts': './src/assets/fonts',
          '@images': './src/assets/images',
          '@components': './src/components',
          '@partials': './src/components/_partials',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@models': './src/models',
          '@navigations': './src/navigations',
          '@layouts': './src/layouts',
          '@screens': './src/screens',
          '@store': './src/store',
          '@themes': './src/themes',
          '@utils': './src/utils'
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js'
        ]
      }
    ]
  ]
}
