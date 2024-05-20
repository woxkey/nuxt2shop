export const state = () => ({
  list: [],
})

export const getters = {
  getProducts(state) {
    return state.list
  },
}

export const mutations = {
  setProducts(state, products) {
    state.list = products
  },
  add(state, text) {
    state.list.push({
      text,
      done: false,
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  // toggle(state, todo) {
  //   todo.done = !todo.done
  // },
}

export const actions = {
  async fetchProducts({ commit }) {
    const response = await fetch('/data/products.json')
    const products = await response.json()
    commit('setProducts', products)
  },
}
