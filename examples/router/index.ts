import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import button from '../pages/base/button/index.vue'
import icon from '../pages/base/icon/index.vue'
import transition from '../pages/base/transition/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/base/button',
    name: 'button',
    component: button,
  },
  {
    path: '/base/icon',
    name: 'icon',
    component: icon,
  },
  {
    path: '/base/transition',
    name: 'transition',
    component: transition,
  },

]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
