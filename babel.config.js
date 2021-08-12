module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      require.resolve('@babel/preset-env'),
      {
        targets: {
          node: true,
          browsers: [
            'last 2 versions',
            'Firefox ESR',
            '> 1%',
            'ie >= 11',
            'iOS >= 8',
            'Android >= 4',
          ],
        },
      },
    ],
  ],

  plugins: [
    '@vue/babel-plugin-jsx',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    [
      require.resolve('@babel/plugin-transform-runtime'),
      {
        helpers: false,
      },
    ],
    [
      "@babel/plugin-transform-typescript",
      {
        isTSX: true,
      },
    ],

  ]
}
