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
  },
  {
    path: '/goods/:city/:filter/:name',
    name: 'goods',

    component: () => import(/* webpackChunkName: "about" */ '../views/FilterPage.vue')
  },
  {
    path: '/elanlar/',
    name: 'elanlar',

    component: () => import(/* webpackChunkName: "about" */ '../views/FilterPage.vue')
  },
  {
    path: '/elanlar/:type/:subtype/:id',
    name: 'elan',

    component: () => import(/* webpackChunkName: "about" */ '../views/OneAdv.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
