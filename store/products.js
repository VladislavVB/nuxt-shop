export const state = () => ({
  products: 'saaaaaaaaaaaaaaaaaaaaaa',
})

export const mutations = {
  addProducts(state, data) {
    state.products = data
  }
}
export const actions = {
  async getProducts({commit}) {
    const products = await this.$axios.$get('https://frontend-test.idaproject.com/api/product');
    commit('addProducts', products)
  }
}

export const getters = {
  getProducts: (state) => {
    return state.products
  }
}