import { createStore } from 'vuex'
import anq  from './modules/anq'
import goods from './modules/goods'
export default createStore({

  modules: {
    anq,
    goods
  }
})
