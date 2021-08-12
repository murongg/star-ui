import Button from './src/index'
Button.install = function (app) {
  app.component(Button.name, Button)
}

export default Button as typeof Button & Plugin;