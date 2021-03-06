const {
  checkEnglishLetters,
  updateStarUIPackage
} = require('../utils')

module.exports = {
  description: 'create component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'component name',
    validate: checkEnglishLetters('name')
  }],
  actions: (inputData) => {
    let {
      name
    } = inputData
    // name = firstLetterToUpperCase(name)
    const type = 'add'
    updateStarUIPackage(name)
    const actions = [{
      type,
      path: `packages/${name}/index.ts`,
      templateFile: 'templates/component/index.ts.hbs'
    }, {
      type,
      path: `packages/${name}/src/index.tsx`,
      templateFile: 'templates/component/index.tsx.hbs'
    }, {
      type,
      path: `packages/${name}/__tests__/index.test.ts`,
      templateFile: 'templates/component/index.test.ts.hbs'
    }, {
      type,
      path: `packages/${name}/package.json`,
      templateFile: 'templates/component/package.hbs'
    }]
    return actions
  }
}