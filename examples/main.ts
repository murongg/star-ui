import { createApp } from 'vue'
import router from './router'
import './assets/css/reset.css'
import App from './App.vue'
import StarUI from 'star-ui'
import ListBox from './components/ListBox.vue'
import PageBox from './components/PageBox.vue'
import Page from './components/Page.vue'
import View from './components/View.vue'
import '../packages/styles/src/index.scss'
const app = createApp(App)
app.use(StarUI)
app.use(router)
app.component(PageBox.name, PageBox)
app.component(ListBox.name, ListBox)
app.component(Page.name, Page)
app.component(View.name, View)
app.mount('#app')
//# sourceMappingURL=main.js.map
