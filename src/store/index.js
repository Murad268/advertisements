import { createStore } from 'vuex'
import anq  from './modules/anq'
import goods from './modules/goods'
import favorites from './modules/favorites'
import cities from './modules/cities'
import desc from './modules/desc'
import menu from './modules/menu'
export default createStore({

  modules: {
    anq,
    goods,
    favorites,
    cities,
    desc,
    menu
  }
})
