import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeVue
  },
  {
    path: '/favorites',
    name: 'favorites',

    component: () => import(/* webpackChunkName: "about" */ '../views/Favorites.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
