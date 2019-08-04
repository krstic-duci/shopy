import { getHotDeals } from '@/api/Products'

const state = {
  products: []
}

const getters = {
  ALL_HOT_PRODUCTS: state => state.products
}

const mutations = {
  SET_HOT_PRODUCTS (state, payload) {
    state.products = payload
  }
}

const actions = {
  GET_HOT_PRODUCTS ({ commit }, payload) {
    //
    // @description - Call /products endpoint for fetching the new products hot deals
    // @returns - 10 new hot deals products
    //
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

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
