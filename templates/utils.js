const fs = require('fs')
const path = require('path')

exports.notEmpty = name => v =>
  !v || v.trim() === '' ? `${name} is required` : true

exports.checkEnglishLetters = name => v => {
  const reg = new RegExp("^[a-zA-Z]+$")
  return reg.test(v) ? true : `${v} must be all English letters`
}
exports.firstLetterToUpperCase = word => {
  const wordArr = word.split('')
  wordArr[0] = wordArr[0].toUpperCase()
  return wordArr.join('')
}
exports.updateStarUIPackage = name => {
  const starPackage = require('../packages/star-ui/package.json')
  const dependencies = starPackage.dependencies
  dependencies[`@star-ui/${name}`] = "^0.0.0"
  starPackage.dependencies = dependencies

  const targetFile = path.resolve(__dirname, '../packages/star-ui/package.json')
  fs.writeFileSync(targetFile, JSON.stringify(starPackage, null, 2), { encoding: 'utf8' }, err => {
    console.log(err)
  })
}