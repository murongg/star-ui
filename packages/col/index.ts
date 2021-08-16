import Col from './src/index'
Col.install = function (app) {
  app.component(Col.name, Col)
}

export default Col
