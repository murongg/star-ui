import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import button from '../pages/base/button/index.vue'
import icon from '../pages/base/icon/index.vue'
import transition from '../pages/base/transition/index.vue'
import layout from '../pages/layout/layout/index.vue'
import grid from '../pages/layout/grid/index.vue'
import badge from '../pages/view/badge/index.vue'

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
  {
    path: '/layout/layout',
    name: 'layout',
    component: layout,
  },
  {
    path: '/layout/grid',
    name: 'grid',
    component: grid,
  },
  {
    path: '/view/badge',
    name: 'badge',
    component: badge,
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
