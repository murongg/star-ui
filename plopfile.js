const component = require('./templates/component/prompt')
const {
  firstLetterToUpperCase
} = require('./templates/utils')
module.exports = function (plop) {
  plop.setHelper('firstLetterToUpperCase', function (text) {
    return firstLetterToUpperCase(text)
  });
  plop.setGenerator('component', component);
};