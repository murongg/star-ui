import GridItem from './src/index'
GridItem.install = function (app) {
  app.component(GridItem.name, GridItem)
}

export default GridItem
