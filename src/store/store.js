import Vue from 'vue'
import Vuex from 'vuex'
import homeModules from './modules/homeModules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home: homeModules
  },
  strict: process.env.NODE_ENV !== 'production'
})
