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
  },
  {
    path: '/elanlar/vip',
    name: 'vip',

    component: () => import(/* webpackChunkName: "about" */ '../views/VipPage.vue')
  },
]


const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
