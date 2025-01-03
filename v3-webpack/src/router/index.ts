import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
declare const PROJECT_NAME: string
const router = createRouter({
  history: createWebHashHistory((window as any).__MICRO_APP_BASE_ROUTE__ || PROJECT_NAME),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
export default router
