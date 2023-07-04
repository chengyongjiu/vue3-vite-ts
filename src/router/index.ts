import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routers: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers
})

export default router