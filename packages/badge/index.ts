import Badge from './src/index'
Badge.install = function (app) {
  app.component(Badge.name, Badge)
}

export default Badge
