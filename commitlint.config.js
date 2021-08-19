module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'scope-empty': [2, 'never'],
    'scope-case': [0, 'never'],
    'scope-enum': [
      2,
      'always',
      [
        'Boring',
        'EsLint',
        'PlopTemplate',
        'tsconfig.json',
        'Github',
        'VuePress',
        'package.json',
        'License',
        'TravisCI',
        'GithubAction',
        'Husky',
        'README',
        'util',
        '.editorconfig',
        '.gitignore',
        'commitlint',
        'Example',
        'Core',
        'Lerna',
        'Transition',
        'Button',
        'Icon',
        'Layout',
        'Row',
        'Col',
        'Grid',
        'Badge'
      ]
    ]
  }
};
