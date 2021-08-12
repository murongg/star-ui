exports.notEmpty = name => v =>
  !v || v.trim() === '' ? `${name} is required` : true

exports.checkEnglishLetters = name => v => {
  const reg = new RegExp("^[a-zA-Z]+$")
  return reg.test(v) ? true : `${v} must be all English letters`
}
exports.firstLetterToUpperCase = word => {
  const wordArr = word.split('')
  wordArr[0] = wordArr[0].toUpperCase()
  return wordArr.join('')
}