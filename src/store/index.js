import { createStore } from 'vuex'
import anq  from './modules/anq'
import goods from './modules/goods'
import favorites from './modules/favorites'
export default createStore({

  modules: {
    anq,
    goods,
    favorites
  }
})
