import Grid from './src/index'
Grid.install = function (app) {
  app.component(Grid.name, Grid)
}

export default Grid
