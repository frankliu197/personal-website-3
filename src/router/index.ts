import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'Home',
      component: HomeView,
      meta: {
        defaultHeader: false,
      }
    },
    {
      path: '/:pathMatch(.*)*',
      meta: {
        defaultHeader: true,
      },
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router