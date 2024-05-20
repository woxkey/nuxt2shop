export const state = () => ({
  list: [],
})

export const getters = {
  getCategories(state) {
    return state.list
  },
}

export const mutations = {
  setCategories(state, categories) {
    state.list = categories
  },
}

export const actions = {
  async fetchCategories({ commit }) {
    const response = await fetch('/data/categories.json')
    const categories = await response.json()
    commit('setCategories', categories)
  },
}
