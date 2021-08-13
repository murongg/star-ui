import Button from '@star-ui/button'
import Icon from '@star-ui/icon'
import Transition from '@star-ui/transition'
import { App } from 'vue'
const components = [
  Button,
  Icon,
  Transition,
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
}

export default {
  install,
}
