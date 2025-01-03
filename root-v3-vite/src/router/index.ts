import { createRouter, createWebHashHistory } from 'vue-router'
import PageA from '../views/page1/index.vue'
const router = createRouter({
  history: createWebHashHistory(''),
  routes: [
    {
      path: '/',
      redirect: '/page-1',
      children: [
        {
          path: '/page-1',
          name: 'page-1',
          component: PageA
        }
      ]
    }
  ]
})

export default router
