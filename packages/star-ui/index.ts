import Button from '@star-ui/button'
import Icon from '@star-ui/icon'

import { App } from 'vue'
const components = [
  Button,
  Icon,
]

const install = function (app: App) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  Button,
  Icon,
}

export default {
  install,
}
