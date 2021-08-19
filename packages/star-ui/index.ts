import Button from '@star-ui/button'
import Icon from '@star-ui/icon'
import Transition from '@star-ui/transition'
import Row from '@star-ui/row'
import Col from '@star-ui/col'
import Grid from '@star-ui/grid'
import GridItem from '@star-ui/grid-item'
import Badge from '@star-ui/badge'

import { App } from 'vue'
const components = [
  Button,
  Icon,
  Transition,
  Row,
  Col,
  Grid,
  GridItem,
  Badge,
]

const install = function (app: App) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  Button,
  Icon,
  Transition,
  Grid,
  GridItem,
  Badge,
}

export default {
  install,
}
