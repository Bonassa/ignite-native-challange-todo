module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.json'],
          alias: {
            '@assets': './src/application/assets',
            '@components': './src/application/components',
            '@contexts': './src/application/contexts',
            '@constants': './src/application/constants',
            '@dtos': './src/application/dtos',
            '@flows': './src/application/flows',
            '@hooks': './src/application/hooks',
            '@provider': './src/application/provider',
            '@routes': './src/application/routes',
            '@theme': './src/application/theme',

            '@app': './src/application',
            '@infrastructure': './src/infrastructure',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
