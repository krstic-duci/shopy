import { getHotDeals } from '@/api/Products'

export default {

  state: {
    products: []
  },

  getters: {
    ALL_HOT_PRODUCTS: state => state.products
  },

  mutations: {
    SET_HOT_PRODUCTS (state, payload) {
      state.products = payload
    }
  },

  actions: {
    GET_HOT_PRODUCTS ({ commit }, payload) {
      getHotDeals()
        .then(products => {
          commit('SET_HOT_PRODUCTS', products)
        })
        .catch(err => {
          console.error('Cannot fetch products', err)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }

}
